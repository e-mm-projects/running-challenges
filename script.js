// 1. Nejdříve si najdeme tlačítko a textové políčko v HTML pomocí jejich 'id'
const tlacitkoPrihlasit = document.getElementById("prihlasit-btn");
const inputJmeno = document.getElementById("jmeno-uzivatele");

// 2. Tlačítku přidáme "posluchače" (EventListener). 
// Ten bude čekat, až na tlačítko někdo klikne ("click").
tlacitkoPrihlasit.addEventListener("click", function() {
    
    // 3. Zjistíme, co uživatel napsal do políčka, a odstraníme případné mezery na začátku a konci (trim)
    const zadaneJmeno = inputJmeno.value.trim();

    // 4. Zkontrolujeme, jestli políčko není prázdné
    if (zadaneJmeno !== "") {
        
        // 5. Uložíme jméno do paměti prohlížeče (localStorage) pod klíčem "uzivatel"
        localStorage.setItem("uzivatel", zadaneJmeno);
        
        // 6. Přesměrujeme uživatele na stránku s nástěnkou
        window.location.href = "dashboard.html";
        
    } else {
        // Pokud nic nezadal, ukážeme mu varování
        alert("Prosím, zadej nejprve své jméno.");
    }
});