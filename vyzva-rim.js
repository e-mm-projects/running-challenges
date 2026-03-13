// 1. Načteme údaje z paměti (jméno, jakou výzvu běžíme a kolik má km)
const ulozeneJmeno = localStorage.getItem("uzivatel");
const aktualniVyzva = localStorage.getItem("aktualniVyzva"); 
const ciloveKm = parseFloat(localStorage.getItem("ciloveKm")); // parseFloat převede text na desetinné číslo

// Bezpečnostní kontrola
if (!ulozeneJmeno || !aktualniVyzva) {
    window.location.href = "index.html";
}

// jméno uživatele v pravém horním rohu 
document.getElementById("jmeno-zobrazeni").innerText = "Přihlášený uživatel: " + ulozeneJmeno;

//  Vytvoříme ten unikátní štítek pro šuplík s kilometry (např. "Honza_nabehanoKm_rim")
const unikatniKlic = ulozeneJmeno + "_nabehanoKm_" + aktualniVyzva;

// Načteme dosud naběhané km. Pokud tam nic není, dosadíme 0.
let nabehanoKm = parseFloat(localStorage.getItem(unikatniKlic)) || 0;

// Databáze našich zajímavostí na trase do Říma
const seznamMist = [
    { km: 0, nazev: "Bystřice pod Hostýnem", text: "Začínáme!", img: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&q=80" },
    { km: 198, nazev: "Vídeň", text: "Hlavní město Rakouska.", img: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&q=80" },
    { km: 548, nazev: "Villach", text: "Blížíme se do Itálie", img: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&q=80" },
    { km: 747, nazev: "Benátky", text: "Jsme v Itálii!", img: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=400&q=80" },
    { km: 966, nazev: "San Marino", text: "Na zastávce v San Marinu", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80" },
    { km: 966, nazev: "Řím", text: "Cíl dosažen", img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&q=80" }
];

// FUNKCE PRO AKTUALIZACE DAT + MAPU // ...................................

function aktualizujStatistiky() {
    let zbyvaKm = ciloveKm - nabehanoKm;
    if (zbyvaKm < 0) zbyvaKm = 0; 
    
    let procenta = (nabehanoKm / ciloveKm) * 100;
    if (procenta > 100) procenta = 100; 

    // Čísla a progress bar (zůstává stejné)
    document.getElementById("nabehano-text").innerText = nabehanoKm.toFixed(1);
    document.getElementById("zbyva-text").innerText = zbyvaKm.toFixed(1);
    document.getElementById("procenta-text").innerText = procenta.toFixed(1);
    document.getElementById("progress-bar-vypln").style.width = procenta + "%";

    // --- MAGIE S KLIKATOU TRASOU ---
    
    // 1. Najdeme si naši SVG křivku na stránce
    const cesta = document.getElementById("trasa-krivka");
    // 2. Změříme její celkovou délku v pixelech
    const delkaCesty = cesta.getTotalLength();

    // 3. Výpočet pozice PANÁČKA na křivce
    // Jak daleko po křivce má panáček dojít (např. 50% z celkové délky)
    let vzdalenostPanacka = (procenta / 100) * delkaCesty;
    // Získáme přesné X a Y souřadnice na tomto bodě
    let bodPanacka = cesta.getPointAtLength(vzdalenostPanacka);
    
    // Protože SVG mapa je nastavená na šířku 800 a výšku 600, převedeme souřadnice na procenta okna
    let panacekLeft = (bodPanacka.x / 987) * 100;
    let panacekTop = (bodPanacka.y / 1165) * 100;

    // Aplikujeme to na panáčka!
    document.getElementById("panacek").style.left = panacekLeft + "%";
    document.getElementById("panacek").style.top = panacekTop + "%";

    // 4. Výpočet pozice TEČEK a kreslení KARTIČEK
    let teckyHtml = "";
    let kartickyHtml = "";

    for (let i = 0; i < seznamMist.length; i++) {
        let misto = seznamMist[i]; // Získáme konkrétní místo podle jeho čísla
        let procentoMista = misto.km / ciloveKm;
        let vzdalenostMista = procentoMista * delkaCesty;
        let bodMista = cesta.getPointAtLength(vzdalenostMista);
        
        let teckaLeft = (bodMista.x / 987) * 100;
        let teckaTop = (bodMista.y / 1165) * 100;
        
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
}

// Spuštění funkce ihned po načtení stránky, aby se ukázal uložený stav
aktualizujStatistiky();

// 4. OBSLUHA TLAČÍTEK
// Tlačítko Přidat kilometry
document.getElementById("pridat-km-btn").addEventListener("click", function() {
    const polickoKm = document.getElementById("nove-km");
    const pridaneKm = parseFloat(polickoKm.value);

if (!isNaN(pridaneKm) && pridaneKm > 0) {
        let stareKm = nabehanoKm; // Zapamatujeme si kilometry před přidáním!
        
        nabehanoKm += pridaneKm; 
        localStorage.setItem(unikatniKlic, nabehanoKm); 
        polickoKm.value = ""; 
        aktualizujStatistiky(); 

        // KONTROLA DOSAŽENÍ NOVÉHO MÍSTA
        for (let i = 0; i < seznamMist.length; i++) {
            let misto = seznamMist[i];
            // Pokud byly staré km MENŠÍ než cíl, ale nové už jsou VĚTŠÍ nebo ROVNY cílu...
            if (stareKm < misto.km && nabehanoKm >= misto.km) {
                otevriModal(i); // Vyskakuje okno!
            }
        }

    } else {
        alert("Prosím, zadej platné číslo větší než nula.");
    }
});

// --- Tlačítko Smazat kilometry ---
document.getElementById("odebrat-km-btn").addEventListener("click", function() {
    const polickoKm = document.getElementById("nove-km");
    const odebraneKm = parseFloat(polickoKm.value);

    if (!isNaN(odebraneKm) && odebraneKm > 0) {
        // Odečteme kilometry
        nabehanoKm -= odebraneKm; 
        
        // Bezpečnostní pojistka: nepustíme kilometry do mínusu
        if (nabehanoKm < 0) {
            nabehanoKm = 0;
        }

        // Uložíme nový stav do paměti a překreslíme stránku
        localStorage.setItem(unikatniKlic, nabehanoKm); 
        polickoKm.value = ""; 
        aktualizujStatistiky(); 
    } else {
        alert("Prosím, zadej platné číslo větší než nula, které chceš smazat.");
    }
});

// Tlačítko Zpět na nástěnku
document.getElementById("zpet-btn").addEventListener("click", function() {
    window.location.href = "dashboard.html";
});

// --- FUNKCE PRO VYSKAKOVACÍ OKNO ----------------
function otevriModal(index) {
    const misto = seznamMist[index];
    document.getElementById("modal-nadpis").innerText = "Dosaženo: " + misto.nazev;
    document.getElementById("modal-obrazek").src = misto.img;
    document.getElementById("modal-text").innerText = misto.text;
    
    document.getElementById("gratulace-modal").classList.add("zobrazeno");
}

document.getElementById("zavrit-modal").addEventListener("click", function() {
    document.getElementById("gratulace-modal").classList.remove("zobrazeno");
});

// Zavření okna i při kliknutí kamkoliv mimo něj (do šedého pozadí)
document.getElementById("gratulace-modal").addEventListener("click", function(udalost) {
    if (udalost.target === this) {
        this.classList.remove("zobrazeno");
    }
});