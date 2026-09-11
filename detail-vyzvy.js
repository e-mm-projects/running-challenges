// 1. FIREBASE KONFIGURACE
const firebaseConfig = {
    apiKey: "AIzaSyBNdcnQFnQblLTE6VCS-7EfJwrWEIGJrBA",
    authDomain: "running-challenges-6cbea.firebaseapp.com",
    projectId: "running-challenges-6cbea",
    storageBucket: "running-challenges-6cbea.firebasestorage.app",
    messagingSenderId: "1084399919766",
    appId: "1:1084399919766:web:a0e828e0775ad2cff358b7"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 2. NAČTENÍ ZÁKLADNÍCH ÚDAJŮ Z PAMĚTI
const ulozeneJmeno = localStorage.getItem("uzivatel");
const aktualniVyzva = localStorage.getItem("aktualniVyzva"); 

if (!ulozeneJmeno || !aktualniVyzva || !databazeVyzev[aktualniVyzva]) {
    window.location.href = "index.html";
}

const dataVyzvy = databazeVyzev[aktualniVyzva];
const ciloveKm = dataVyzvy.celkoveKm;
const seznamMist = dataVyzvy.seznamMist; 

// Tyto proměnné teď budeme plnit z cloudu, takže už nečteme localStorage pro kilometry!
let nabehanoKm = 0;
let frontaOdmen = [];
let historieBehu = [];
const klicPosledniZaznam = ulozeneJmeno + "_posledniDatum_" + aktualniVyzva; // Necháme lokálně pro rychlost

// 3. PŘÍPRAVA STRÁNKY
document.getElementById("jmeno-zobrazeni").innerText = "Přihlášený uživatel: " + ulozeneJmeno;
document.getElementById("hlavni-nadpis").innerText = dataVyzvy.nazev;
document.getElementById("telo-stranky").className = dataVyzvy.tridaPozadi;

if (dataVyzvy.tridaMapy !== "") {
    document.getElementById("mapa-zoomovana").classList.add(dataVyzvy.tridaMapy);
}

document.getElementById("mapa-obrazek").src = dataVyzvy.mapaImg;
document.getElementById("svg-mapa").setAttribute("viewBox", dataVyzvy.svgViewBox);
document.getElementById("trasa-krivka").setAttribute("d", dataVyzvy.svgPath);
document.getElementById("panacek").innerHTML = dataVyzvy.panacekHtml;

// Aktivujeme ZOOM
if (dataVyzvy.povolitZoom === true) {
    document.getElementById("zoom-ovladani").style.display = "flex";
    const zoomOkno = document.getElementById("zoom-okno-obal");
    zoomOkno.style.aspectRatio = dataVyzvy.mapaSirka + " / " + dataVyzvy.mapaVyska;
    zoomOkno.style.overflow = "hidden";

    let urovenZoomu = 100;
    const mapaZoomovana = document.getElementById("mapa-zoomovana");

    document.getElementById("zoom-in-btn").addEventListener("click", function() {
        urovenZoomu += 30;
        if (urovenZoomu > 300) urovenZoomu = 300; 
        mapaZoomovana.style.width = urovenZoomu + "%";
        zoomOkno.style.overflow = "auto";
        setTimeout(zameritNaPanacka, 300);
    });

    document.getElementById("zoom-out-btn").addEventListener("click", function() {
        urovenZoomu -= 20;
        if (urovenZoomu <= 100) {
            urovenZoomu = 100; 
            zoomOkno.style.overflow = "hidden";
        }
        mapaZoomovana.style.width = urovenZoomu + "%";
    });

} else {
    const zoomOkno = document.getElementById("zoom-okno-obal");
    zoomOkno.style.border = "none";
    zoomOkno.style.backgroundColor = "transparent";
    zoomOkno.style.overflow = "visible"; 
    zoomOkno.style.aspectRatio = "auto"; 
}

function zameritNaPanacka() {
    const okno = document.querySelector('.zoom-okno');
    const panacek = document.getElementById('panacek');
    if (!okno || !panacek) return;

    const posunX = panacek.offsetLeft - (okno.clientWidth / 2);
    const posunY = panacek.offsetTop - (okno.clientHeight / 2);

    okno.scrollTo({ left: posunX, top: posunY, behavior: 'smooth' });
}

// 4. HLAVNÍ FUNKCE PRO VÝPOČTY A KRESLENÍ
function aktualizujStatistiky() {
    let zbyvaKm = ciloveKm - nabehanoKm;
    if (zbyvaKm < 0) zbyvaKm = 0; 
    
    let procenta = (nabehanoKm / ciloveKm) * 100;
    if (procenta > 100) procenta = 100; 

    document.getElementById("nabehano-text").innerText = nabehanoKm.toFixed(1);
    document.getElementById("zbyva-text").innerText = zbyvaKm.toFixed(1);
    document.getElementById("procenta-text").innerText = procenta.toFixed(1);
    document.getElementById("progress-bar-vypln").style.width = procenta + "%";

    const cesta = document.getElementById("trasa-krivka");
    const delkaCesty = cesta.getTotalLength();

    let vzdalenostPanacka = (procenta / 100) * delkaCesty;
    let bodPanacka = cesta.getPointAtLength(vzdalenostPanacka);
    
    let panacekLeft = (bodPanacka.x / dataVyzvy.mapaSirka) * 100;
    let panacekTop = (bodPanacka.y / dataVyzvy.mapaVyska) * 100;

    document.getElementById("panacek").style.left = panacekLeft + "%";
    document.getElementById("panacek").style.top = panacekTop + "%";

    let teckyHtml = "";
    let kartickyHtml = "";
    let zabkyHtml = ""; 
    let obsahujeZabky = false;

    for (let i = 0; i < seznamMist.length; i++) {
        let misto = seznamMist[i];
        let procentoMista = misto.km / ciloveKm;
        let vzdalenostMista = procentoMista * delkaCesty;
        let bodMista = cesta.getPointAtLength(vzdalenostMista);
        
        let teckaLeft = (bodMista.x / dataVyzvy.mapaSirka) * 100;
        let teckaTop = (bodMista.y / dataVyzvy.mapaVyska) * 100;
        
        let jeNavstiveno = nabehanoKm >= misto.km;
        let jeZabka = misto.typ === "zabka"; 

        if (jeZabka) obsahujeZabky = true; 

        if (jeNavstiveno) {
            if (jeZabka) {
                teckyHtml += `<div class="bod-zabka navstiveno" style="left: ${teckaLeft}%; top: ${teckaTop}%" title="${misto.nazev}">🐸</div>`;
                zabkyHtml += `
                    <div class="karta-zajimavosti" onclick="otevriModal(${i})">
                        <img src="${misto.img}" alt="${misto.nazev}">
                        <h3>${misto.nazev}</h3>
                        <p>Klikni pro detail</p>
                    </div>`;
            } else {
                teckyHtml += `<div class="bod-mapy navstiveno" style="left: ${teckaLeft}%; top: ${teckaTop}%" title="${misto.nazev}"></div>`;
                kartickyHtml += `
                    <div class="karta-zajimavosti" onclick="otevriModal(${i})">
                        <img src="${misto.img}" alt="${misto.nazev}">
                        <h3>${misto.nazev} (${misto.km} km)</h3>
                        <p>Klikni pro detail</p>
                    </div>`;
            }
        } else {
            if (jeZabka) {
                teckyHtml += `<div class="bod-zabka" style="left: ${teckaLeft}%; top: ${teckaTop}%" title="Neznámá čokoládová žabka (${misto.km} km)">❔</div>`;
            } else {
                teckyHtml += `<div class="bod-mapy" style="left: ${teckaLeft}%; top: ${teckaTop}%" title="${misto.nazev} (${misto.km} km)"></div>`;
            }
        }
    }

    document.getElementById("body-na-mape").innerHTML = teckyHtml;
    document.getElementById("seznam-zajimavosti").innerHTML = kartickyHtml;

    const zabkyKontejner = document.getElementById("zabky-kontejner");
    if (zabkyKontejner) {
        if (obsahujeZabky) {
            zabkyKontejner.style.display = "block";
            document.getElementById("seznam-zabek").innerHTML = zabkyHtml !== "" ? zabkyHtml : "<p>Zatím nemáš žádné žabky. Běž dál!</p>";
        } else {
            zabkyKontejner.style.display = "none";
        }
    }

    const wowKontejner = document.getElementById("wow-level-kontejner");
    if (wowKontejner) { 
        if (aktualniVyzva === 'dark-portal') {
            wowKontejner.style.display = "block";
            let level = Math.floor(nabehanoKm / 2);
            if (level < 1) level = 1;
            if (level > 58) level = 58;
            
            let zbytekKm = nabehanoKm % 2; 
            let xpProcenta = (zbytekKm / 2) * 100;
            let chybikmDoLevelu = (2 - zbytekKm).toFixed(1);
            
            if (nabehanoKm >= ciloveKm) {
                level = 58;
                xpProcenta = 100;
                chybikmDoLevelu = "0.0";
            }
            document.getElementById("wow-aktualni-level").innerText = level;
            document.getElementById("wow-xp-bar-vypln").style.width = xpProcenta + "%";
            document.getElementById("wow-xp-zbytek").innerText = chybikmDoLevelu;
        } else {
            wowKontejner.style.display = "none";
        }
    }
}

// 5. NAČTENÍ DAT A HISTORIE Z FIREBASE
async function nactiDataZFirebase() {
    try {
        const doc = await db.collection("uzivatele").doc(ulozeneJmeno).get();
        if (doc.exists) {
            const dataDb = doc.data();
            if (dataDb[aktualniVyzva]) {
                if (dataDb[aktualniVyzva].nabehanoKm) nabehanoKm = dataDb[aktualniVyzva].nabehanoKm;
                if (dataDb[aktualniVyzva].historie) historieBehu = dataDb[aktualniVyzva].historie;
            }
        }
        aktualizujStatistiky(); 
        vykresliHistorii(); // Přidáno vykreslení tabulky
        aktualizujPosledniZaznam();
    } catch (error) {
        console.error("Chyba při načítání dat:", error);
        aktualizujStatistiky(); 
    }
}
nactiDataZFirebase(); 

// --- NOVÁ FUNKCE PRO VYKRESLENÍ TABULKY ---
function vykresliHistorii() {
    const tbody = document.getElementById("historie-telo");
    if (!tbody) return;

    if (historieBehu.length === 0) {
        tbody.innerHTML = `<tr><td colspan="3">Zatím tu nejsou žádné záznamy. Běž ven!</td></tr>`;
        return;
    }

    let html = "";
    // Vytvoříme kopii a otočíme ji, aby nejnovější běh byl nahoře
    let kopieHistorie = [...historieBehu].reverse();

    kopieHistorie.forEach(zaznam => {
        html += `
            <tr>
                <td>${zaznam.datum}</td>
                <td><strong>${zaznam.km} km</strong></td>
                <td><button class="btn-smazat-zaznam" onclick="smazatZaznam('${zaznam.id}')">Smazat</button></td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

// --- NOVÁ FUNKCE PRO SMAZÁNÍ KONKRÉTNÍHO ZÁZNAMU ---
window.smazatZaznam = async function(idZaznamu) {
    if (confirm("Opravdu chceš tento záznam vymazat z historie?")) {
        // Najdeme, kde v poli se záznam nachází
        const index = historieBehu.findIndex(z => z.id === idZaznamu);
        
        if (index !== -1) {
            const kmKSmazani = historieBehu[index].km;
            
            // 1. Vymažeme ho z historie
            historieBehu.splice(index, 1);
            
            // 2. Odečteme kilometry z celkového postupu
            nabehanoKm -= kmKSmazani;
            if (nabehanoKm < 0) nabehanoKm = 0;

            // 3. Vše aktualizujeme a uložíme do cloudu
            aktualizujStatistiky();
            vykresliHistorii();
            ulozDoFirebase();
        }
    }
};

// --- CHYTRÁ FUNKCE PRO POSLEDNÍ ZÁZNAM ---
function aktualizujPosledniZaznam() {
    // Teď se funkce dívá přímo do naší historie z Firebase!
    if (historieBehu && historieBehu.length > 0) {
        // Vezmeme úplně poslední prvek z pole
        const posledni = historieBehu[historieBehu.length - 1];
        document.getElementById("posledni-datum").innerText = posledni.datum;
        document.getElementById("posledni-km").innerText = posledni.km;
        document.getElementById("posledni-beh-info").style.display = "block"; 
    } else {
        document.getElementById("posledni-beh-info").style.display = "none"; 
    }
}

// --- NOVÁ FUNKCE: UPRAVIT ZÁZNAM ---
window.upravitZaznam = async function(idZaznamu) {
    const index = historieBehu.findIndex(z => z.id === idZaznamu);
    
    if (index !== -1) {
        const staryZaznam = historieBehu[index];
        // Zobrazíme vyskakovací okno s předvyplněnou starou hodnotou
        const novaHodnota = prompt("Oprav počet kilometrů pro tento běh:", staryZaznam.km);

        if (novaHodnota !== null) {
            const noveKm = parseFloat(novaHodnota);
            
            if (!isNaN(noveKm) && noveKm > 0) {
                // Vypočítáme rozdíl (např. oprava z 50 na 5 = rozdíl -45)
                const rozdil = noveKm - staryZaznam.km;
                
                nabehanoKm += rozdil;
                if (nabehanoKm < 0) nabehanoKm = 0; // Pojistka

                // Přepíšeme kilometry přímo v historii
                historieBehu[index].km = noveKm;

                // Vše aktualizujeme a odešleme
                aktualizujStatistiky();
                vykresliHistorii();
                aktualizujPosledniZaznam();
                ulozDoFirebase();
            } else {
                alert("Neplatná hodnota. Zadej prosím číslo větší než nula.");
            }
        }
    }
};

// --- FUNKCE: SMAZAT ZÁZNAM (aktualizovaná) ---
window.smazatZaznam = async function(idZaznamu) {
    if (confirm("Opravdu chceš tento záznam vymazat z historie?")) {
        const index = historieBehu.findIndex(z => z.id === idZaznamu);
        
        if (index !== -1) {
            const kmKSmazani = historieBehu[index].km;
            historieBehu.splice(index, 1);
            nabehanoKm -= kmKSmazani;
            if (nabehanoKm < 0) nabehanoKm = 0;

            aktualizujStatistiky();
            vykresliHistorii();
            aktualizujPosledniZaznam(); // Přidáno pro aktualizaci lišty posledního běhu
            ulozDoFirebase();
        }
    }
};

// 6. ULOŽENÍ DO FIREBASE (VČETNĚ HISTORIE)
async function ulozDoFirebase() {
    const uzivatelRef = db.collection("uzivatele").doc(ulozeneJmeno);
    await uzivatelRef.set({
        [aktualniVyzva]: { 
            nabehanoKm: nabehanoKm,
            historie: historieBehu // Přidali jsme ukládání pole historie
        }
    }, { merge: true });
}

document.getElementById("pridat-km-btn").addEventListener("click", async function() {
    const polickoKm = document.getElementById("nove-km");
    const pridaneKm = parseFloat(polickoKm.value);

    if (!isNaN(pridaneKm) && pridaneKm > 0) {
        let stareKm = nabehanoKm; 
        nabehanoKm += pridaneKm; 
        
        const nyni = new Date();
        const datumCas = nyni.toLocaleDateString('cs-CZ') + " v " + nyni.toLocaleTimeString('cs-CZ', {hour: '2-digit', minute:'2-digit'});
        
        const novyZaznam = {
            id: Date.now().toString(), 
            datum: datumCas,
            km: pridaneKm
        };
        
        historieBehu.push(novyZaznam); 

        polickoKm.value = ""; 
        aktualizujStatistiky(); 
        vykresliHistorii(); 
        aktualizujPosledniZaznam(); // Aktualizuje lištu z nového záznamu
        ulozDoFirebase();

        for (let i = 0; i < seznamMist.length; i++) {
            let misto = seznamMist[i];
            if (stareKm < misto.km && nabehanoKm >= misto.km) {
                frontaOdmen.push(i);
            }
        }
        
        if (frontaOdmen.length > 0) {
            zobrazDalsiOdmenu();
        }
        
    } else {
        alert("Prosím, zadej platné číslo větší než nula.");
    }
});

document.getElementById("zpet-btn").addEventListener("click", function() {
    window.location.href = "dashboard.html";
});

// 7. OBSLUHA VYSKAKOVACÍCH OKEN (MODALU)
function zobrazDalsiOdmenu() {
    if (frontaOdmen.length > 0) {
        let indexKeZobrazeni = frontaOdmen.shift(); 
        otevriModal(indexKeZobrazeni);
    }
}

function otevriModal(index) {
    const misto = seznamMist[index];
    document.getElementById("modal-nadpis").innerText = "Dosaženo: " + misto.nazev;
    document.getElementById("modal-obrazek").src = misto.img;
    document.getElementById("modal-text").innerText = misto.text;
    document.getElementById("gratulace-modal").classList.add("zobrazeno");
}

function zavriModalADalsi() {
    document.getElementById("gratulace-modal").classList.remove("zobrazeno");
    if (frontaOdmen.length > 0) {
        setTimeout(zobrazDalsiOdmenu, 400); 
    }
}

document.getElementById("zavrit-modal").addEventListener("click", zavriModalADalsi);

document.getElementById("gratulace-modal").addEventListener("click", function(udalost) {
    if (udalost.target === this) {
        zavriModalADalsi();
    }
});