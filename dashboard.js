// 1. Sáhneme do paměti prohlížeče a vytáhneme jméno, které jsme uložili na přihlašovací stránce
const ulozeneJmeno = localStorage.getItem("uzivatel");

// 2. Bezpečnostní kontrola: Co když někdo přijde na tuto stránku napřímo a nezadal jméno?
if (ulozeneJmeno === null) {
    // Pokud jméno v paměti není, pošleme ho nekompromisně zpět na přihlášení
    window.location.href = "index.html";
} else {
    // Pokud jméno máme, najdeme v HTML náš <span> a přepíšeme v něm text na tvé jméno
    document.getElementById("jmeno-zobrazeni").innerText = "Přihlášený uživatel: " + ulozeneJmeno;
}

// 3. Vytvoříme funkci, která se spustí po kliknutí na tlačítko "Začít tuto výzvu"
// Tato funkce přijímá dva parametry, které jsme jí poslali z HTML (napr. 'rim' a 1000)
function vybratVyzvu(idVyzvy, celkoveKm) {
    
    // Uložíme si zvolenou výzvu a její délku do paměti
    localStorage.setItem("aktualniVyzva", idVyzvy);
    localStorage.setItem("ciloveKm", celkoveKm);
    
    // TADY JE TA ZMĚNA! 
    // Vytvoříme si unikátní klíč (štítek na šuplík) spojením jména a výzvy.
    // Např. "Honza_nabehanoKm_rim"
    const unikatniKlic = ulozeneJmeno + "_nabehanoKm_" + idVyzvy;

    // Kontrolujeme, jestli TENTO KONKRÉTNÍ uživatel už má nějaké km uložené
    if (localStorage.getItem(unikatniKlic) === null) {
        // Pokud ne, nastavíme mu nulu
        localStorage.setItem(unikatniKlic, 0);
    }

    // Přesměrujeme uživatele na stránku s detailem výzvy
    window.location.href = "detail-vyzvy.html";
}

// Najdeme tlačítko pro odhlášení
const tlacitkoOdhlasit = document.getElementById("odhlasit-btn");

// Přidáme mu posluchače na kliknutí
tlacitkoOdhlasit.addEventListener("click", function() {
    // 1. Vymažeme jméno z paměti prohlížeče
    localStorage.removeItem("uzivatel");
    
    // 2. Přesměrujeme zpět na přihlašovací stránku
    window.location.href = "index.html";
});

// --- ZOBRAZENÍ POSTUPU A FILTROVÁNÍ VÝZEV ---
document.addEventListener("DOMContentLoaded", function() {
    const tlacitkaFiltru = document.querySelectorAll(".filtr-btn");
    const kartyVyzev = document.querySelectorAll(".vyzva-karta");

    // 1. Zjistíme, co má uživatel rozehráno, a vykreslíme mu progress bar
    kartyVyzev.forEach(karta => {
        const idVyzvy = karta.getAttribute("data-id");
        const celkoveKm = parseFloat(karta.getAttribute("data-celkem"));
        
        // Vytvoříme si unikátní klíč (např. Karel_nabehanoKm_rim)
        const unikatniKlic = ulozeneJmeno + "_nabehanoKm_" + idVyzvy;
        let ulozeneKm = localStorage.getItem(unikatniKlic);
        ulozeneKm = ulozeneKm ? parseFloat(ulozeneKm) : 0;

        // Pokud už má uživatel něco naběháno (je větší než 0)
        if (ulozeneKm > 0) {
            // Označíme si kartu tajným štítkem "rozehrano", ať ji pak snadno vyfiltrujeme
            karta.setAttribute("data-rozehrano", "true");

            // Vypočítáme procenta (maximálně 100%)
            const procenta = Math.min((ulozeneKm / celkoveKm) * 100, 100).toFixed(1);

            // Vyrobíme kousek HTML s naším mini-proužkem
            const miniProgressHtml = `
                <div class="mini-progress-obal">
                    <div class="mini-progress-text">Máš hotovo: ${ulozeneKm} / ${celkoveKm} km (${procenta} %)</div>
                    <div class="mini-progress-bar">
                        <div class="mini-progress-vypln" style="width: ${procenta}%;"></div>
                    </div>
                </div>
            `;
            
            // Najdeme tlačítko na této kartě a vložíme náš proužek těsně nad něj
            const tlacitko = karta.querySelector(".btn-vybrat");
            tlacitko.insertAdjacentHTML("beforebegin", miniProgressHtml);
            
            // Bonus: Změníme text tlačítka z "Zobrazit" na "Pokračovat" a dáme mu trochu jinou barvu
            tlacitko.innerText = "Pokračovat ve výzvě";
            tlacitko.style.backgroundColor = "#1976D2";
        }
    });

    // 2. Samotné klikání na filtry
    tlacitkaFiltru.forEach(tlacitko => {
        tlacitko.addEventListener("click", function() {
            // Odebereme třídu "aktivni" všem a dáme ji jen tomu kliknutému
            tlacitkaFiltru.forEach(btn => btn.classList.remove("aktivni"));
            this.classList.add("aktivni");

            const vybranyFiltr = this.getAttribute("data-filtr");

            // Projdeme karty a ukážeme jen ty správné
            kartyVyzev.forEach(karta => {
                const obtiznostKarty = karta.getAttribute("data-obtiznost");
                const jeRozehrana = karta.getAttribute("data-rozehrano") === "true";

                if (vybranyFiltr === "vse") {
                    karta.classList.remove("skryto");
                } else if (vybranyFiltr === "rozehrane") {
                    // Ukáže jen ty, které mají štítek rozehrano
                    if (jeRozehrana) {
                        karta.classList.remove("skryto");
                    } else {
                        karta.classList.add("skryto");
                    }
                } else if (vybranyFiltr === obtiznostKarty) {
                    karta.classList.remove("skryto");
                } else {
                    karta.classList.add("skryto");
                }
            });
        });
    });
});