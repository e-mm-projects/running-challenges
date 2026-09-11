// 1. Tvoje konfigurace z Firebase (musí tu být znovu, aby Dashboard věděl, kam se připojit)
const firebaseConfig = {
    apiKey: "AIzaSyBNdcnQFnQblLTE6VCS-7EfJwrWEIGJrBA",
    authDomain: "running-challenges-6cbea.firebaseapp.com",
    projectId: "running-challenges-6cbea",
    storageBucket: "running-challenges-6cbea.firebasestorage.app",
    messagingSenderId: "1084399919766",
    appId: "1:1084399919766:web:a0e828e0775ad2cff358b7"
};

// Inicializace
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 2. Kontrola přihlášení (jméno máme pořád v localStorage pro paměť zařízení)
const ulozeneJmeno = localStorage.getItem("uzivatel");

if (ulozeneJmeno === null) {
    window.location.href = "index.html";
} else {
    document.getElementById("jmeno-zobrazeni").innerText = "Přihlášený uživatel: " + ulozeneJmeno;
    provedMigraciDat(); // Spustíme kontrolu dat v cloudu!
}

// 3. MIGRACE: Záchrana dat a vytvoření uživatele ve Firestore
async function provedMigraciDat() {
    const uzivatelRef = db.collection("uzivatele").doc(ulozeneJmeno);
    
    try {
        const doc = await uzivatelRef.get();
        
        if (!doc.exists) {
            console.log("První přihlášení do cloudu! Vytvářím profil pro:", ulozeneJmeno);
            
            // Tady sesbíráme stará data, pokud nějaká máš (např. Honza_nabehanoKm_rim)
            let migrovanaData = {
                datumRegistrace: new Date().toISOString()
            };

            // Prohledáme všechny známé výzvy (jejich ID)
            const znameVyzvy = ["rim", "prasinky", "mount-doom", "brno", "bradavice", "dark-portal", "got"];
            
            znameVyzvy.forEach(idVyzvy => {
                let staryKlic = ulozeneJmeno + "_nabehanoKm_" + idVyzvy;
                let stareKm = localStorage.getItem(staryKlic);
                
                if (stareKm !== null) {
                    // Uložíme to do nového objektu pod danou výzvu
                    migrovanaData[idVyzvy] = { nabehanoKm: parseFloat(stareKm) };
                }
            });

            // Odešleme do Firebase!
            await uzivatelRef.set(migrovanaData);
            console.log("Profil a data úspěšně nahrány!");
        }
        
        // Až je vše zkontrolováno, načteme ukazatele u karet
        nactiProgressVyzev();

    } catch (error) {
        console.error("Chyba při komunikaci s databází:", error);
    }
}

// 4. KLIKNUTÍ NA VÝZVU
function vybratVyzvu(idVyzvy, celkoveKm) {
    // Pro předávání na další stránku si to zatím necháme v paměti
    localStorage.setItem("aktualniVyzva", idVyzvy);
    localStorage.setItem("ciloveKm", celkoveKm);
    
    window.location.href = "detail-vyzvy.html";
}

// 5. NAČTENÍ PROGRESSU KARET Z FIREBASE (dřív to četlo z localStorage)
async function nactiProgressVyzev() {
    const kartyVyzev = document.querySelectorAll(".vyzva-karta");
    const uzivatelRef = db.collection("uzivatele").doc(ulozeneJmeno);

    try {
        const doc = await uzivatelRef.get();
        if (doc.exists) {
            const dataDb = doc.data();

            kartyVyzev.forEach(karta => {
                const idVyzvy = karta.getAttribute("data-id");
                const celkoveKm = parseFloat(karta.getAttribute("data-celkem"));
                
                // Přečteme z Firebase, jestli u dané výzvy něco je
                let ulozeneKm = 0;
                if (dataDb[idVyzvy] && dataDb[idVyzvy].nabehanoKm) {
                    ulozeneKm = dataDb[idVyzvy].nabehanoKm;
                }

                if (ulozeneKm > 0) {
                    karta.setAttribute("data-rozehrano", "true");
                    const procenta = Math.min((ulozeneKm / celkoveKm) * 100, 100).toFixed(1);
                    const hezkeKm = Math.round(ulozeneKm * 100) / 100;

                    const miniProgressHtml = `
                        <div class="mini-progress-obal">
                            <div class="mini-progress-text">Máš hotovo: ${hezkeKm} / ${celkoveKm} km (${procenta} %)</div>
                            <div class="mini-progress-bar">
                                <div class="mini-progress-vypln" style="width: ${procenta}%;"></div>
                            </div>
                        </div>
                    `;
                    
                    const tlacitko = karta.querySelector(".btn-vybrat");
                    // Bezpečnostní vymazání, aby se to nepřidalo dvakrát
                    const staryProgress = karta.querySelector(".mini-progress-obal");
                    if (staryProgress) staryProgress.remove();

                    tlacitko.insertAdjacentHTML("beforebegin", miniProgressHtml);
                    tlacitko.innerText = "Pokračovat ve výzvě";
                    tlacitko.style.backgroundColor = "#1976D2";
                }
            });
        }
    } catch (error) {
        console.error("Chyba při načítání progressu:", error);
    }
}

// Odhlášení
document.getElementById("odhlasit-btn").addEventListener("click", function() {
    localStorage.removeItem("uzivatel");
    window.location.href = "index.html";
});

// Filtry fungují úplně stejně nezávisle na databázi
document.addEventListener("DOMContentLoaded", function() {
    const tlacitkaFiltru = document.querySelectorAll(".filtr-btn");
    const kartyVyzev = document.querySelectorAll(".vyzva-karta");

    tlacitkaFiltru.forEach(tlacitko => {
        tlacitko.addEventListener("click", function() {
            tlacitkaFiltru.forEach(btn => btn.classList.remove("aktivni"));
            this.classList.add("aktivni");

            const vybranyFiltr = this.getAttribute("data-filtr");

            kartyVyzev.forEach(karta => {
                const obtiznostKarty = karta.getAttribute("data-obtiznost");
                const jeRozehrana = karta.getAttribute("data-rozehrano") === "true";

                if (vybranyFiltr === "vse") {
                    karta.classList.remove("skryto");
                } else if (vybranyFiltr === "rozehrane") {
                    if (jeRozehrana) karta.classList.remove("skryto");
                    else karta.classList.add("skryto");
                } else if (vybranyFiltr === obtiznostKarty) {
                    karta.classList.remove("skryto");
                } else {
                    karta.classList.add("skryto");
                }
            });
        });
    });
});