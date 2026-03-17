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

// Tady si budeme pamatovat místa, která čekají na zobrazení
let frontaOdmen = [];

// Databáze našich zajímavostí na trase do Říma
const seznamMist = [
    { km: 1, nazev: "Praha", text: "Tvoje velká cesta začíná u orloje! Před tebou je 1543 km. Než vyrazíš, pořádně si zavaž boty, tohle bude jízda přes půl Evropy.", img: "images/cesta-do-rima/praha.jpg" },
    { km: 75, nazev: "Svatá Hora u Příbrami", text: "První velký milník v Čechách. Barokní areál Svaté Hory je jedno z nejslavnějších poutních míst ve střední Evropě. Ideální místo pro první odpočinek. Teď tě čeká běh až na Šumavu!", img: "images/cesta-do-rima/svata-hora.jpg" },
    { km: 200, nazev: "Boubínský prales", text: "Vstupuješ do jednoho z nejstarších pralesů v Evropě! Tato chráněná oblast byla založena už v roce 1858 a uvidíš tu stromy staré i přes 400 let. Po výstupu na rozhlednu tě čeká úchvatný výhled na Šumavu.", img: "images/cesta-do-rima/boubin.jpg" },
    { km: 285, nazev: "Pasov (Passau)", text: "Město tří řek! Tady se slévají Dunaj, Inn a Ilz. Oficiálně vstupuješ do Bavorska. Vychutnej si ten pohled na vodu, bude tě provázet dál.", img: "images/cesta-do-rima/passau.jpg" },
    { km: 345, nazev: "Braunau am Inn", text: "Procházíš historickým městečkem na břehu řeky Inn, které je známé svým středověkým centrem. Dominantou je pozdně gotický kostel svatého Štěpána s charakteristickou věží, který určitě nepřehlédneš.", img: "images/cesta-do-rima/braunau.jpg" },
    { km: 440, nazev: "Salzburg", text: "Zastávka v Mozartově rodišti. Nad městem se tyčí majestátní pevnost Hohensalzburg a vzduch je tu prosycen hudbou a historií.", img: "images/cesta-do-rima/salzburg.jpg" },
    { km: 535, nazev: "Kufstein", text: "Ikonická pevnost Kufstein stráží vstup do Tyrolska už po staletí. Tohle město na řece Inn tě okouzlí svou atmosférou a je to poslední zastávka před vysokými štíty Alp.", img: "images/cesta-do-rima/kufstein.jpg" },  
    { km: 645, nazev: "Innsbruck", text: "Hlavní město Alp a domov slavné Zlaté stříšky. Obklopují tě štíty vysoké přes 2000 metrů. Odtud tě čeká největší stoupání celé pouti.", img: "images/cesta-do-rima/innsbruck.jpg" },
    { km: 695, nazev: "Brenner", text: "Gratulace! Překonal jsi Brennerský průsmyk a oficiálně jsi v Itálii. Od teď už by se mělo jen oteplovat a těstoviny budou čím dál lepší.", img: "images/cesta-do-rima/brenner.jpg" },
    { km: 775, nazev: "Bolzano", text: "Vítej v Bolzanu! Nezapomeň pozdravit Ötziho – ledovcového muže, který tu odpočívá v muzeu už přes 5000 let. Ty jsi na tom s kondičkou naštěstí o dost lépe.", img: "images/cesta-do-rima/bolzano.jpg" },
    { km: 960, nazev: "Verona", text: "Město Romea a Julie. Můžeš si vystát řadu a zkusit zavolat pod balkonem, ale raději šetři dech na běh. Místní antická Aréna je naprosto dechberoucí!", img: "images/cesta-do-rima/verona.jpg" },
    { km: 1110, nazev: "Bologna", text: "Město věží a skvělého jídla. Tady vznikla nejstarší univerzita na světě a hlavně omáčka 'ragù alla bolognese'. Po tisíci kilometrech si pořádnou porci zasloužíš!", img: "images/cesta-do-rima/bologna.jpg" },
    { km: 1228, nazev: "Florencie", text: "Perla renesance. Stojíš v místě, kde tvořil Leonardo da Vinci i Michelangelo. Překroč řeku Arno přes most Ponte Vecchio a nasávej tu historii.", img: "images/cesta-do-rima/florencie.jpg" },
    { km: 1295, nazev: "Siena", text: "Vstoupil jsi do srdce Toskánska. Náměstí Piazza del Campo ve tvaru mušle je považováno za jedno z nejkrásnějších na světě. Už zbývá jen posledních 300 km!", img: "images/cesta-do-rima/siena.jpg" },
    { km: 1448, nazev: "Viterbo", text: "Starobylé 'Město papežů'. Už jsi skoro v cíli, cítíš ten vzduch z Říma? Viterbo bylo kdysi důležitější než samotný Řím, dnes je to oáza klidu před finále.", img: "images/cesta-do-rima/viterbo.jpg" },
    { km: 1543, nazev: "Řím", text: "DOKÁZAL JSI TO! Jako neohrožený gladiátor právě stojíš před Koloseem! 1543 km z Prahy až sem. Všechny cesty vedou do Říma a ta tvoje byla vítězná!", img: "images/cesta-do-rima/rim.jpg" }
];

// FUNKCE PRO AKTUALIZACE DAT + MAPU // ...................................

function aktualizujStatistiky() {
    // A. Výpočet základních čísel
    let zbyvaKm = ciloveKm - nabehanoKm;
    if (zbyvaKm < 0) zbyvaKm = 0; 
    
    let procenta = (nabehanoKm / ciloveKm) * 100;
    if (procenta > 100) procenta = 100; 

    // B. Aktualizace textů a progress baru v HTML
    document.getElementById("nabehano-text").innerText = nabehanoKm.toFixed(1);
    document.getElementById("zbyva-text").innerText = zbyvaKm.toFixed(1);
    document.getElementById("procenta-text").innerText = procenta.toFixed(1);
    document.getElementById("progress-bar-vypln").style.width = procenta + "%";

    // C. Práce s mapou a trasou
    const cesta = document.getElementById("trasa-krivka");
    const delkaCesty = cesta.getTotalLength();

    // D. Výpočet pozice PANÁČKA
    let vzdalenostPanacka = (procenta / 100) * delkaCesty;
    let bodPanacka = cesta.getPointAtLength(vzdalenostPanacka);
    
    // Přepočet souřadnic panáčka na procenta (podle tvé nové mapy)
    let panacekLeft = (bodPanacka.x / 911) * 100;
    let panacekTop = (bodPanacka.y / 1197) * 100;

    document.getElementById("panacek").style.left = panacekLeft + "%";
    document.getElementById("panacek").style.top = panacekTop + "%";

    // E. Vykreslení 12 TEČEK a KARTIČEK zajímavostí
    let teckyHtml = "";
    let kartickyHtml = "";

    for (let i = 0; i < seznamMist.length; i++) {
        let misto = seznamMist[i];
        let procentoMista = misto.km / ciloveKm;
        let vzdalenostMista = procentoMista * delkaCesty;
        let bodMista = cesta.getPointAtLength(vzdalenostMista);
        
        // Přepočet souřadnic teček na procenta
        let teckaLeft = (bodMista.x / 911) * 100;
        let teckaTop = (bodMista.y / 1197) * 100;
        
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
                frontaOdmen.push(i);
            }
        }

        // Když cyklus projde všechna místa, podíváme se, jestli v čekárně někdo je.
        // Pokud ano, zavoláme funkci, která ukáže první okno.
        if (frontaOdmen.length > 0) {
            zobrazDalsiOdmenu();
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

// --- FUNKCE PRO VYVOLÁVÁNÍ Z FRONTY ---
function zobrazDalsiOdmenu() {
    if (frontaOdmen.length > 0) {
        // .shift() vezme první položku ve frontě, smaže ji odtam a vrátí nám její číslo
        let indexKeZobrazeni = frontaOdmen.shift(); 
        otevriModal(indexKeZobrazeni);
    }
}

// --- FUNKCE PRO VYSKAKOVACÍ OKNO ----------------
function otevriModal(index) {
    const misto = seznamMist[index];
    document.getElementById("modal-nadpis").innerText = "Dosaženo: " + misto.nazev;
    document.getElementById("modal-obrazek").src = misto.img;
    document.getElementById("modal-text").innerText = misto.text;
    
    document.getElementById("gratulace-modal").classList.add("zobrazeno");
}

// --- CHYTRÉ ZAVÍRÁNÍ OKNA A KONTROLA FRONTY ---
function zavriModalADalsi() {
    // 1. Schováme aktuální okno
    document.getElementById("gratulace-modal").classList.remove("zobrazeno");
    
    // 2. Podíváme se, jestli ve frontě ještě někdo nečeká
    if (frontaOdmen.length > 0) {
        // Počkáme 400 milisekund (než zmizí animace starého okna) a ukážeme další!
        setTimeout(zobrazDalsiOdmenu, 400); 
    }
}

// Přiřazení naší chytré funkce na křížek
document.getElementById("zavrit-modal").addEventListener("click", zavriModalADalsi);

// Přiřazení naší chytré funkce na kliknutí do šedého pozadí
document.getElementById("gratulace-modal").addEventListener("click", function(udalost) {
    if (udalost.target === this) {
        zavriModalADalsi();
    }
});