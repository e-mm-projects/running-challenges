// detail-vyzvy.js

// 1. NAČTENÍ ZÁKLADNÍCH ÚDAJŮ Z PAMĚTI
const ulozeneJmeno = localStorage.getItem("uzivatel");
const aktualniVyzva = localStorage.getItem("aktualniVyzva"); 

// Bezpečnostní kontrola
if (!ulozeneJmeno || !aktualniVyzva || !databazeVyzev[aktualniVyzva]) {
    window.location.href = "index.html";
}

// 2. KOUZLO: Vytáhneme si z databáze všechna data pro naši aktuální výzvu!
const dataVyzvy = databazeVyzev[aktualniVyzva];
const ciloveKm = dataVyzvy.celkoveKm;
const seznamMist = dataVyzvy.seznamMist; // Zkratka pro náš seznam míst

// Vytvoříme unikátní klíč a načteme naběhané km
const unikatniKlic = ulozeneJmeno + "_nabehanoKm_" + aktualniVyzva;
let nabehanoKm = parseFloat(localStorage.getItem(unikatniKlic)) || 0;
let frontaOdmen = [];

const klicPosledniZaznam = unikatniKlic + "_posledniDatum"; // NOVÝ KLÍČ k zobrazení posledního běhu

// 3. PŘÍPRAVA STRÁNKY PODLE DATABÁZE (Tady se děje to sjednocení!)
document.getElementById("jmeno-zobrazeni").innerText = "Přihlášený uživatel: " + ulozeneJmeno;
document.getElementById("hlavni-nadpis").innerText = dataVyzvy.nazev;

// Přidáme správnou třídu pozadí na <body> (např. 'pozadi-doom' nebo 'pozadi-rim')
document.getElementById("telo-stranky").className = dataVyzvy.tridaPozadi;

// Pokud má mapa speciální třídu (jako mapa-doom), přidáme ji
if (dataVyzvy.tridaMapy !== "") {
    document.getElementById("mapa-zoomovana").classList.add(dataVyzvy.tridaMapy);
}

// Dosadíme správný obrázek mapy, rozměry (viewBox) a samotnou křivku cesty
document.getElementById("mapa-obrazek").src = dataVyzvy.mapaImg;
document.getElementById("svg-mapa").setAttribute("viewBox", dataVyzvy.svgViewBox);
document.getElementById("trasa-krivka").setAttribute("d", dataVyzvy.svgPath);

// Dosadíme správného panáčka (emoji nebo obrázek hobitů)
document.getElementById("panacek").innerHTML = dataVyzvy.panacekHtml;

// Aktivujeme ZOOM, ale jen pokud ho výzva má povolený!
if (dataVyzvy.povolitZoom === true) {
    document.getElementById("zoom-ovladani").style.display = "flex";
    
    const zoomOkno = document.getElementById("zoom-okno-obal");
    // Poměr stran nastavíme JEN u map se zoomem (Mordor)
    zoomOkno.style.aspectRatio = dataVyzvy.mapaSirka + " / " + dataVyzvy.mapaVyska;
    
    // Fígl na posuvníky: na začátku je úplně zakážeme!
    zoomOkno.style.overflow = "hidden";

    let urovenZoomu = 100;
    const mapaZoomovana = document.getElementById("mapa-zoomovana");

    document.getElementById("zoom-in-btn").addEventListener("click", function() {
        urovenZoomu += 30;
        if (urovenZoomu > 300) urovenZoomu = 300; 
        mapaZoomovana.style.width = urovenZoomu + "%";
        
        // Jakmile přiblížíme, posuvníky zapneme, abychom mohli mapou hýbat
        zoomOkno.style.overflow = "auto";
    });

    document.getElementById("zoom-out-btn").addEventListener("click", function() {
        urovenZoomu -= 20;
        if (urovenZoomu <= 100) {
            urovenZoomu = 100; 
            // Když oddálíme zpět na 100 %, posuvníky zase schováme
            zoomOkno.style.overflow = "hidden";
        }
        mapaZoomovana.style.width = urovenZoomu + "%";
    });

} else {
    // Pokud výzva ZOOM NEMÁ (Řím)
    const zoomOkno = document.getElementById("zoom-okno-obal");
    zoomOkno.style.border = "none";
    zoomOkno.style.backgroundColor = "transparent";
    zoomOkno.style.overflow = "visible"; 
    
    // Klíčové pro Řím: Zrušíme vynucený poměr stran, ať nevznikne díra!
    zoomOkno.style.aspectRatio = "auto"; 
}


// 4. HLAVNÍ FUNKCE PRO VÝPOČTY A KRESLENÍ (Už ji znáš)
function aktualizujStatistiky() {
    let zbyvaKm = ciloveKm - nabehanoKm;
    if (zbyvaKm < 0) zbyvaKm = 0; 
    
    let procenta = (nabehanoKm / ciloveKm) * 100;
    if (procenta > 100) procenta = 100; 

    // Texty a progress bar
    document.getElementById("nabehano-text").innerText = nabehanoKm.toFixed(1);
    document.getElementById("zbyva-text").innerText = zbyvaKm.toFixed(1);
    document.getElementById("procenta-text").innerText = procenta.toFixed(1);
    document.getElementById("progress-bar-vypln").style.width = procenta + "%";

    // Kreslení na mapu
    const cesta = document.getElementById("trasa-krivka");
    const delkaCesty = cesta.getTotalLength();

    // Výpočet pozice PANÁČKA
    let vzdalenostPanacka = (procenta / 100) * delkaCesty;
    let bodPanacka = cesta.getPointAtLength(vzdalenostPanacka);
    
    // Tady skript používá dynamické rozměry z databáze místo pevných čísel!
    let panacekLeft = (bodPanacka.x / dataVyzvy.mapaSirka) * 100;
    let panacekTop = (bodPanacka.y / dataVyzvy.mapaVyska) * 100;

    document.getElementById("panacek").style.left = panacekLeft + "%";
    document.getElementById("panacek").style.top = panacekTop + "%";

    // Výpočet pozice TEČEK a KARTIČEK
    let teckyHtml = "";
    let kartickyHtml = "";

    for (let i = 0; i < seznamMist.length; i++) {
        let misto = seznamMist[i];
        let procentoMista = misto.km / ciloveKm;
        let vzdalenostMista = procentoMista * delkaCesty;
        let bodMista = cesta.getPointAtLength(vzdalenostMista);
        
        let teckaLeft = (bodMista.x / dataVyzvy.mapaSirka) * 100;
        let teckaTop = (bodMista.y / dataVyzvy.mapaVyska) * 100;
        
        let jeNavstiveno = nabehanoKm >= misto.km;

        if (jeNavstiveno) {
            teckyHtml += `<div class="bod-mapy navstiveno" style="left: ${teckaLeft}%; top: ${teckaTop}%" title="${misto.nazev}"></div>`;
            kartickyHtml += `
                <div class="karta-zajimavosti" onclick="otevriModal(${i})">
                    <img src="${misto.img}" alt="${misto.nazev}">
                    <h3>${misto.nazev} (${misto.km} km)</h3>
                    <p>Klikni pro detail</p>
                </div>
            `;
        } else {
            teckyHtml += `<div class="bod-mapy" style="left: ${teckaLeft}%; top: ${teckaTop}%" title="${misto.nazev} (${misto.km} km)"></div>`;
        }
    }

    document.getElementById("body-na-mape").innerHTML = teckyHtml;
    document.getElementById("seznam-zajimavosti").innerHTML = kartickyHtml;

    // ==========================================
    // WOW LEVELING SYSTÉM (Speciální funkce)
    // ==========================================
    const wowKontejner = document.getElementById("wow-level-kontejner");
    
    if (wowKontejner) { // Pokud prvek v HTML existuje
        if (aktualniVyzva === 'dark-portal') {
            // Zobrazíme ho, protože jsme ve WoW výzvě
            wowKontejner.style.display = "block";
            
            // 1 level = 2 km. 
            // Použijeme Math.floor (zaokrouhlení dolů), takže např. 5.5 km / 2 = 2.75 -> Level 2
            let level = Math.floor(nabehanoKm / 2);
            
            // Pojistky: začínáme na levelu 1 a končíme max na 58
            if (level < 1) level = 1;
            if (level > 58) level = 58;
            
            // Výpočet XP (procenta v proužku)
            let zbytekKm = nabehanoKm % 2; // Kolik km máme naběháno v aktuálním levelu
            let xpProcenta = (zbytekKm / 2) * 100;
            let chybikmDoLevelu = (2 - zbytekKm).toFixed(1);
            
            // Pokud jsme cíl splnili, ukážeme plný bar a level 58
            if (nabehanoKm >= ciloveKm) {
                level = 58;
                xpProcenta = 100;
                chybikmDoLevelu = "0.0";
            }
            
            // Propíšeme čísla do HTML
            document.getElementById("wow-aktualni-level").innerText = level;
            document.getElementById("wow-xp-bar-vypln").style.width = xpProcenta + "%";
            document.getElementById("wow-xp-zbytek").innerText = chybikmDoLevelu;
            
        } else {
            // Pokud jsme v Bradavicích, Římě nebo jinde, boxík úplně schováme
            wowKontejner.style.display = "none";
        }
    }


}

aktualizujStatistiky();

// --- FUNKCE PRO POSLEDNÍ ZÁZNAM ---
function aktualizujPosledniZaznam() {
    const zaznamString = localStorage.getItem(klicPosledniZaznam);
    
    if (zaznamString) {
        // Pokud v paměti něco je, převedeme to zpět z textu na data a ukážeme
        const zaznam = JSON.parse(zaznamString);
        document.getElementById("posledni-datum").innerText = zaznam.datum;
        document.getElementById("posledni-km").innerText = zaznam.km;
        document.getElementById("posledni-beh-info").style.display = "block"; 
    } else {
        // Pokud uživatel ještě nic nepřidal, boxík schováme
        document.getElementById("posledni-beh-info").style.display = "none"; 
    }
}

// Spustíme hned po načtení stránky
aktualizujPosledniZaznam();

// 5. TLAČÍTKA PRO PŘIDÁNÍ/SMAZÁNÍ KM
document.getElementById("pridat-km-btn").addEventListener("click", function() {
    const polickoKm = document.getElementById("nove-km");
    const pridaneKm = parseFloat(polickoKm.value);

    if (!isNaN(pridaneKm) && pridaneKm > 0) {
        let stareKm = nabehanoKm; 
        
        nabehanoKm += pridaneKm; 
        localStorage.setItem(unikatniKlic, nabehanoKm); 
        polickoKm.value = ""; 
        aktualizujStatistiky(); 

        // --- NOVÉ: Uložení data a času posledního běhu ---
        const nyni = new Date();
        const datumCas = nyni.toLocaleDateString('cs-CZ') + " v " + nyni.toLocaleTimeString('cs-CZ', {hour: '2-digit', minute:'2-digit'});

        const dataZaznamu = {
            datum: datumCas,
            km: pridaneKm
        };
        // Uložíme jako textový řetězec pomocí JSON.stringify
        localStorage.setItem(klicPosledniZaznam, JSON.stringify(dataZaznamu));
        aktualizujPosledniZaznam(); // Překreslíme text na stránce


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

document.getElementById("odebrat-km-btn").addEventListener("click", function() {
    const polickoKm = document.getElementById("nove-km");
    const odebraneKm = parseFloat(polickoKm.value);

    if (!isNaN(odebraneKm) && odebraneKm > 0) {
        nabehanoKm -= odebraneKm; 
        if (nabehanoKm < 0) nabehanoKm = 0;

        localStorage.setItem(unikatniKlic, nabehanoKm); 
        polickoKm.value = ""; 
        aktualizujStatistiky(); 
    } else {
        alert("Prosím, zadej platné číslo větší než nula, které chceš smazat.");
    }
});

document.getElementById("zpet-btn").addEventListener("click", function() {
    window.location.href = "dashboard.html";
});


// 6. OBSLUHA VYSKAKOVACÍCH OKEN (MODALU)
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