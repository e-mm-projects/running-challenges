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

// --- FILTROVÁNÍ VÝZEV ---
document.addEventListener("DOMContentLoaded", function() {
    const tlacitkaFiltru = document.querySelectorAll(".filtr-btn");
    const kartyVyzev = document.querySelectorAll(".vyzva-karta");

    tlacitkaFiltru.forEach(tlacitko => {
        tlacitko.addEventListener("click", function() {
            // 1. Odebereme třídu "aktivni" všem tlačítkům a přidáme ji jen tomu kliknutému
            tlacitkaFiltru.forEach(btn => btn.classList.remove("aktivni"));
            this.classList.add("aktivni");

            // 2. Zjistíme, jaký filtr uživatel vybral
            const vybranyFiltr = this.getAttribute("data-filtr");

            // 3. Projdeme všechny karty a ukážeme/skryjeme je podle filtru
            kartyVyzev.forEach(karta => {
                const obtiznostKarty = karta.getAttribute("data-obtiznost");

                if (vybranyFiltr === "vse" || vybranyFiltr === obtiznostKarty) {
                    karta.classList.remove("skryto"); // Ukázat
                } else {
                    karta.classList.add("skryto"); // Skrýt
                }
            });
        });
    });
});