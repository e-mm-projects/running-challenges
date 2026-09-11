// 1. Tvoje konfigurace z Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBNdcnQFnQblLTE6VCS-7EfJwrWEIGJrBA",
    authDomain: "running-challenges-6cbea.firebaseapp.com",
    projectId: "running-challenges-6cbea",
    storageBucket: "running-challenges-6cbea.firebasestorage.app",
    messagingSenderId: "1084399919766",
    appId: "1:1084399919766:web:a0e828e0775ad2cff358b7"
};

// 2. Nastartujeme Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// 3. Hlavní přihlašovací funkce
function prihlasit(event) {
    if (event) {
        event.preventDefault();
    }
    
    const inputJmeno = document.getElementById("jmeno");
    const inputHeslo = document.getElementById("heslo-vypravy");
    const chybaZprava = document.getElementById("chyba-zprava"); // Náš nový prvek pro chyby
    
    const zadaneJmeno = inputJmeno.value.trim();
    const zadaneHeslo = inputHeslo.value.trim();

    const TAJNE_HESLO = "run"; 

    // Při každém novém pokusu hlášku nejprve schováme
    chybaZprava.style.display = "none";

    if (zadaneJmeno === "") {
        chybaZprava.innerText = "Prosím, zadej nejprve své jméno.";
        chybaZprava.style.display = "block"; // Zobrazí chybu
        return; 
    }

    if (zadaneHeslo !== TAJNE_HESLO) {
        chybaZprava.innerText = "Špatné heslo výpravy! Zkus to znovu.";
        chybaZprava.style.display = "block"; // Zobrazí chybu
        return; 
    }
        
    // Vše v pořádku
    localStorage.setItem("uzivatel", zadaneJmeno);
    
    setTimeout(function(){
        window.location.href = "dashboard.html";
    }, 100);
}