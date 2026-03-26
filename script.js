// Do závorky jsme přidali slovo 'event', abychom mohli formuláři říct, jak se má chovat
function prihlasit(event) {
    
    // 1. Zabráníme prohlížeči, aby po odklepnutí Enterem nesmyslně obnovil stránku
    if (event) {
        event.preventDefault();
    }
    
    // 2. Najdeme políčko podle jeho ID
    const inputJmeno = document.getElementById("jmeno");

    // 3. Zjistíme, co uživatel napsal (a ořízneme mezery)
    const zadaneJmeno = inputJmeno.value.trim();

    // 4. Zkontrolujeme, jestli nezůstalo prázdné
    if (zadaneJmeno !== "") {
        
        // 5. Uložíme jméno (v tuhle chvíli si ho uloží i prohlížeč do svého našeptávače!)
        localStorage.setItem("uzivatel", zadaneJmeno);
        
        // 6. Přesměrujeme tě na nástěnku
        setTimeout(function(){
            window.location.href = "dashboard.html";
        }, 100);
        
    } else {
        alert("Prosím, zadej nejprve své jméno.");
    }
}