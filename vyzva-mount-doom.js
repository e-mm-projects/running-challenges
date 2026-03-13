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

//  Vytvoříme ten unikátní štítek pro šuplík s kilometry
const unikatniKlic = ulozeneJmeno + "_nabehanoKm_" + aktualniVyzva;

// Načteme dosud naběhané km. Pokud tam nic není, dosadíme 0.
let nabehanoKm = parseFloat(localStorage.getItem(unikatniKlic)) || 0;

// Tady si budeme pamatovat místa, která čekají na zobrazení
let frontaOdmen = [];


// Databáze zajímavostí na trase do Mordoru
const seznamMist = [
    { km: 1, nazev: "Hobitín", text: "Vítej dobrodruhu! Právě ses pustil na dlouhou cestu po stopách dvou hobitů - Froda a Sama. Ti společně prošli skrze celou Středozemi až k samotné Hoře Osudu, kde se jim podařilo ukončit Třetí věk Středozemě vhozením Prstenu do Hory Osudu. Vše ale začíná tady v Hobitíně. Klidném místě, nacházejícím se v Kraji. Gandalf pověřil Froda se Samem důležitým úkolem. Musí se dostat do Hůrky, do hostince U Skákavého Poníka. I když se to ale ve filmu nezdá, Hůrka je od Hobitína vzdálená přibližně 250 kilometrů, máš tedy co dělat! Následující část cesty povede z Hobitína do Studánek. Nebude to trvat dlouho!", img: `images/mount-doom-challenge/hobitin.jpg` },
    { km: 49, nazev: "Studánky", text: "Právě jsi dorazil do Studánek! Frodův dům ve Studánkách sloužil jako krytí, pro Frodův odchod, kterým chtěl zmást Hobity po prodeji Dna Pytle v Hobitíně. V knižní verzi se zde Frodo a Sam setkávají s Pipinem a Smíškem, kteří již dávno o kouzelném Prstenu vědí a přidávají se k výpravě. Hobiti už věděli, že jsou pronásledováni Černými jezdci a proto zvolili cestu skrze Starý Hvozd. Po cestě tam tě ještě čeká zastávka u sedláka Červíka.", img: "images/mount-doom-challenge/studanky.jpg" },
    { km: 102, nazev: "Pole sedláka Červíka", text: "Máš za sebou už více než 100 kilometrů cesty s Frodem a Samem! Ti se zde ve filmové verzi setkávají se Smíškem a Pipinem a od této chvíle jsou součástí výpravy. Frodo měl už odmalička hrůzu z Červíkových velkých psů. V knižní verzi se spolu Frodo a sedlák Červík usmířili. Další část výpravy už bude mnohem nebezpečnější! Cesta vede do Starého Hvozdu.", img: "images/mount-doom-challenge/sedlak cervik.jpg" },
    { km: 125, nazev: "Starý Hvozd", text: "A je to tady! Přestože se hobiti zbavili Černých jezdců pochodem přes Starý Hvozd, čeká je neméně smrtonosné nebezpečí. Starý Hvozd je zalesněné území na východ od Kraje. Věřilo se, že stromy v tomto lese byly nepřátelské a bdělé. Listí šustilo i v bezvětší a v noci se ozýval šepot. Dokonce se zde záhadně přemisťovaly pěšiny. Hobiti z Rádovska pro ochranu své země před tímto lesem vysadili podél okraje Starého hvozdu Vysoké křoví - neprostupný živý plot. Když jednou začaly stromy růst příliš blízko Vysokého křoví, hobiti jich mnoho pokáceli a spálili na Vatrové pasece, kus cesty od západního okraje lesa. Od té doby se stromy stáhly od živého plotu, ale začaly být ještě nepřátelštějští.", img: "images/mount-doom-challenge/stary hvozd.jpg" },
    { km: 147, nazev: "Dědek Vrbák", text: "Starý Hvozd je nebezpečné místo a hobiti se o tom přesvědčili na vlastní kůži právě na tomto místě. Lesem protéká řeka Opletnice a u řeky roste strom, který není tak úplně obyčejný. Je to zlý Huorn - dědek Vrbák. Ten hobity uspal a snažil se je pohltit. Zachránil je až tajuplný Tom Bombadil svou písničkou. Následně pak hobity pozval do svého nedalekého domu. Vydrž pár dalších kilometrů a dozvíš se o Tomovi něco více!", img: "images/mount-doom-challenge/dedek vrbak.jpg" },    
    { km: 167, nazev: "Dům Toma Bombadila", text: "Máš za sebou kus cesty a první smrtelné nebezpečí s hobity. Teď jsi ale v bezpečí, vítej u Toma! Tom Bombadil byla záhadná postava žijící ve Starém hvozdě. Mluví se o něm jako o nejstarší bytosti ve Středozemi a o jeho původu není nic známo. Má ženu Zlatěnku, se kterou se hobiti potkali v jejich domě pod kopcem, na východním okraji Starého Hvozdu. Byl úzce spojen s přírodou a ve své vlastní zemi, jejíž hranice si sám vymezil. Měl nesmírnou moc, takže bez problémů dokázal porazit zlé síly dědka Vrbáka. Dokonce byl jedinou bytostí, která si nasadila Jeden prsten a nejen, že na něj neměl žádný vliv, dokonce jej nechal dočasně zmizet. Pak jej vrátil zpět polekanému Frodovi. Tom Bombadil se nestaral o vnější svět a žádné války pro něj neměly význam. Byl prostě svůj.", img: "images/mount-doom-challenge/bombadil.jpg" },
    { km: 198, nazev: "Mohylové vrchy", text: "Právě si doběhl k pradávným Mohylovým vrchům a máš za sebou bezmála 200 kilometrů putování s hobity. Ve filmové verzi vynechaná scéna, avšak jedna z nejnebezpečnějších a nejdůležitějších částí celé výpravy. Osud čtveřice hobitů visel na vlásku. Zachránil je Tom Bombadil. Hobitům následně předal mocné zbraně z mohyly, které byly vykovány za dávných časů pro boj s vládcem Angmaru. Díky této shodě okolností bylo možné o dlouhou dobu později zranit vůdce Devítky a setnout z něj proroctví, kvůli kterému jej nemohl zabít žádný člověk. (Ve filmové verzi muž).", img: "images/mount-doom-challenge/mohylove vrchy.jpg" },
    { km: 255, nazev: "Hůrka", text: "Hůrka byla místem, kde se setkávalo mnoho cestovatelů, například trpaslíci, cestující po Velké cestě mezi svými sídly v Modrých horách a na východě. Hlavním společenským centrem městečka byl vyhlášený hostinec U Skákavého poníka, patřící rodině Máselníků. Je to první (a poslední?) hospoda na tvé trase! Urazil si 250 kilometrů cesty až sem, a hobiti se zde setkávají s tajemným Chodcem, který si je získal na svou stranu a putoval s nimi dále divočinou směrem k Roklince.", img: "images/mount-doom-challenge/hurka.jpg" },
    { km: 315, nazev: "Bažiny", text: "Po stopách hobitů a Aragorna putuješ dál, až k bažinám v pustině. Aragorn se snažil hlavně setřást ze stopy Černé jezdce a udržet hobity naživu. Cesta z Hůrky až do Roklinky je dlouhá téměř 500 kilometrů nebezpečnou pustinou. Na dohled už je i Amon Sul - starodávné trosky strážné věže, kam teď vedou vaše kroky.", img: "images/mount-doom-challenge/pustina.jpg" },
    { km: 380, nazev: "Amon Sul", text: "Máš za sebou už 380 kilometrů cesty od Hobitína. Z Hůrky po stopách Aragorna a hobitů divočinou jsi urazil už 125 kilometrů až ses dostal sem na Amon Sûl. Název se překládá jako Větrný vrch. Když bylo založeno Severní království - Arnor, byla tu postavena mohutná strážní věž se stejným názvem Amon Sûl, která se stala stanovištěm jednoho z palantírů. Při válce s Černokněžným králem Angmaru byla strážní věž kompletně vypálena. 3. října 3018 tu byl čaroděj Gandalf obklíčen a přepaden hlídkujícími nazgûly a unikl jim. O tři dny později byla třemi nazgûly přepadena pod vrcholkem družina hobitů vedená Aragornem. Frodo tu byl raněn morgulskou dýkou. Tebe teď čeká přes 100 kilometrů dlouhá cesta divočinou až k Poslednímu mostu", img: "images/mount-doom-challenge/amon sul.jpg" },
    { km: 596, nazev: "Poslední most", text: "Máš za sebou další velký kus cesty až k Poslednímu mostu. Je to krátký kamenný most přes řeku Mitheithel. Dále se rozpíná divočina směrem až k Roklince. Zde podle knižní předlohy Glorfindel zahnal Prstenové přízraky a nechal Aragornovi a hobitům beryl na cestě jako znamená bezpečného průchodu. Ve filmové verzi se nic z těchto událostní nestane a družina zanedlouho potká Arwen.", img: "images/mount-doom-challenge/posledni most.jpg" },
    { km: 630, nazev: "Arwen", text: "V divočině za mostem Aragorn zoufale hledal Athelas - Králův lístek pro zpomalení otravy Froda po zásahu Morgulského meče. Družinu zde dle filmového zpracování vystopuje Arwen a Froda zachrání tím, že jej naloží na svého koně Asfalotha a uhání s ním k Roklince. Nacházíš se přibližně 630 kilometrů od Hobitína a Frodova situace zde byla opravdu kritická. Uháněj dál k brodu přes řeku Bruinen! Hodně štěstí a ať tě přízraky nedohoní.", img: "images/mount-doom-challenge/arwen.jpg" },
    { km: 740, nazev: "Bruinen", text: "Uběhl jsi další velký kus cesty a do Roklinky už je to posledních pár kilometrů! Na tomto místě se nachází brod řeky Bruinen, kde se střetli Černí Jezdci s Arwen (ve filmovém zpracování) / Glorfindelem (v knižním zpracování). Výsledek byl pro jezdce stejný, řeka Bruinen jezdce smetla, zabila jejich koně a vzala jim hmotnou podobu. Řeka byla poslední linií obrany Roklinky. Teď už vzhůru tam, do posledního domáckého sídla elfů na Východě!", img: "images/mount-doom-challenge/bruinen.jpg" },
    { km: 752, nazev: "Roklinka", text: "Vítej v Roklince! Velká kapitola tvé výpravy je za tebou. Urazil jsi už více než 750 kilometrů! Cesta do Roklinky byla kriticky nebezpečná a hobiti ji zvládli, především za pomoci Aragorna. V Roklince se rozhodlo na velké Elrondově radě všech národů o osudu Jednoho Prstenu. Utvořilo se zde Společenstvo Prstenu a celá družina vedená Gandalfem se vydala na ještě delší a nebezpečnější cestu. Gandalf měl v plánu překonat Mlžné hory průsmykem Caradhras a to je další cíl i pro tebe! Cesta bude dlouhá, tak vydrž a pokračuj dále.", img: "images/mount-doom-challenge/roklinka.jpg" },
    { km: 890, nazev: "Tábor", text: "Urazil si se Společenstvem asi 140 kilometrů jížně od Roklinky podél Mlžných hor a na tomto místě družina narazila na špehujícími Crebainy, vyšlechtěné a vyslané Sarumanem. O plánu překonat hory průsmykem Caradhras už Saruman ví, přesto nezbývá, než se o náročný přechod pokusit. Cesta od tohoto táboru až k místu na vrcholcích hor, kde Společenstvo přizná porážku je dlouhá a nezbývá, než vydržet.", img: "images/mount-doom-challenge/crebain.jpg" },    
    { km: 1010, nazev: "Caradhras", text: "Nacházíš se už více než 1000 kilometrů od Hobitína. Je to obrovský úspěch a se Společenstvem ses dostal přes bažiny, divočinu, dlouhou prašnou cestu i starodávné lesy až na vrcholky Mlžných hor. Na tomto místě Společenstvo vzdalo pokus o Caradhras a vrací se poražené zpět. Hora zvítězila a nezbývá než hledat jinou cestu. Jako další v pořadí se nabízí cesta pod horami. Zatímco ve filmové verzi se do dolů v Morii nechce především Gandalfovi, v knižní verzi odmítá touto cestou jít Aragorn, který už v Morii v minulosti byl. Ten se podvolí až vůli celého Společenstva, varuje však Gandalfa před těmito kobkami. Čeká tě teď dlouhá cesta k branám Morie. Od tohoto místa je to ještě dalších 160 kilometrů.", img: "images/mount-doom-challenge/caradhras.jpg" },
    { km: 1100, nazev: "Přepadení", text: "S Frodem a Samem jsi absolvoval už 1100 kilometrů na cestě z Hobitína. Dle knižní předlohy bylo přibližně na tomto místě Společenstvo přepadeno smečkou vlků, kteří je pronásledovali z hor. Díky Gandalfově ohni a zbraním ostatních se útok podařilo odrazit. Následovala pak rychlá cesta směrem k branám Morie, dříve než se vlci vrátí.", img: "images/mount-doom-challenge/utok.jpg" },     
    { km: 1170, nazev: "Brány Morie", text: "Ve stopách Společenstva jsi doběhl až k branám Morie! Řekni přítel a vejdi. Nikdo netušil, co se v Morii stane. Gandalf a Aragorn byli jediní členové Společenstva, kteří už toto místo dříve navštívili. U bran Morie Společenstvo přepadl bezejmenný pozorovatel z vody a v Morii je uvěznil, už nebylo cesty zpět, pouze vpřed. Následující kilometry byly pro družinu extrémně náročné. Pohyb ve tmě, v tichosti a v tísnivé atmosféře po několik dlouhých dní.", img: "images/mount-doom-challenge/brana morie.jpg" },
    { km: 1230, nazev: "Balinova hrobka", text: "Prošel jsi ve stopách družiny už 50 kilometrů tmou a náročným terénem. Tady se družina zastavila u Balinovy hrobky. Balin byl příbuzný Gimliho a zabili jej zde skřeti. Také Společenstvo bylo přepadeno, tentokrát však proti skřetům stál čaroděj Gandalf a útok byl odražen - ne však na dlouho. Společenstvo se dalo do posledního zoufalého úprku Morií k můstku, který vedl k východu z Morie.", img: "images/mount-doom-challenge/gimli.jpg" },
    { km: 1249, nazev: "Můstek", text: "Právě procházíš po můstku, kde svedl souboj Gandalf a Balrog. Při souboji se oba zřítili do propasti a následně společně prchali tmou před nepojmenovanými stvořeními, které žijí v hlubinách světa. Při finálním souboji oba padli. Gandalf byl následně poslán zpět, aby dokončil svůj úkol ve Středozemi. K východu z Morie už to máš jen kousek, hned za rohem vidíš denní světlo!", img: "images/mount-doom-challenge/gandalf vs balrog.jpg" },
    { km: 1350, nazev: "Vstup do Lothlorienu", text: "Právě vstupuješ do Lothlorienu, nejkrásnějšího elfího království Třetího věku. Společenstvo do tohoto neobyčejného lesa vstoupilo po ztrátě Gandalfa ve velmi chmurném rozpoložení. Ty si můžeš užít nádherný les se stromy Mallorny, které rostou pouze zde. Mají zlaté listy a podle toho se lesu říká Zlatý les.", img: "images/mount-doom-challenge/lorien.jpg" },
    { km: 1440, nazev: "Caras Galadhon", text: "Dorazil si do Caras Galadhon, hlavního města a pevnosti elfské říše Lothlorien, které je postavené v korunách stromů, Mallornů. Město založila Galadriel a Celeborn jako obranu proti Dol Gulduru. Společenstvo zde našlo útočiště a zotavilo se ze svých cest, ty ale pokračuješ dál. Čeká tě nejdelší část cesty a to je plavba po řece Anduině.", img: "images/mount-doom-challenge/caras galadhon.jpg" },
    { km: 1455, nazev: "Plavba", text: "Čeká tě nejdelší část tvého běhu! Start dlouhé cesty po vodním toku Anduiny. Pro Společenstvo to na elfích lodích nebyl takový problém. Ve filmovém zpracování trvala cesta pouze pár minut. Tebe ale čeká přes 400 kilometrů cesty, než doběhneš až k Argonathu a Raurorskému vodopádu.", img: "images/mount-doom-challenge/caras galadhon.jpg" },    
    { km: 1890, nazev: "Sarn Gebir", text: "Konečně se blížíš ke konci této nekonečné plavby! Legolas v těchto místech poblíž Sarn Gebiru sestřelil Nazgula, který zaútočil na Společenstvo ze vzduchu. Z dálky už slyšíš bouření velkého Raurosu.", img: "images/mount-doom-challenge/argonath.jpg" },    
    { km: 1920, nazev: "Argonath", text: "Před tebou se právě tyčí dvě monumentální sochy Aragornových vzdálených předků Isildura a Anariona (ve filmovém zpracování - Elendila). Společenstvo tudy proplulo 25. února roku 3019. Pokochej se pohledem a nyní už musíme vyrazit dál. Blíží se důležitý moment, rozdělení celého Společenstva.", img: "images/mount-doom-challenge/argonath.jpg" },
    { km: 1980, nazev: "Rozpad Společenstva", text: "Konec tvé cesty podél řeky Anduiny je tady! Urazil jsi už téměr 2000 kilometrů spolu s hobity! A právě tady, 2000 kilometrů od startu tvé cesty se Společenstvo rozpadá. Poblíž Amon Hen byl Boromir zlákán mocí Prstenu a zaplatil za to životem. Pipin a Smíšek byli zajati. Aragorn, Gimli a Legolas se je vydali zachránit. Tebe ale čeká cesta nejtěžší - následovat Froda a Sama do bludiště skal Emyn Muil a pak najít cestu do samotného Mordoru.", img: "images/mount-doom-challenge/rozpad spolecenstva.jpg" },
    { km: 2080, nazev: "Emyn Muil", text: "Právě stojíš na hranicích skalního bludiště Emyn Muil. Předtím, než vstoupíš do Mordoru se odtud musíš vymotat, tak jako Frodo a Sam. Těm se podařilo zajmout Gluma, který je ze skal dostal. Ty to musíš zvládnout sám. Mordor už je na dohled, tak to nevzdávej! ", img: "images/mount-doom-challenge/emyn muil.jpg" },
    { km: 2130, nazev: "Emyn Muil", text: "Stejně jako Frodovi, Samovi a jejich průvodci Glumovi se i tobě podařilo dostat se z bludiště Emyn Muil. Teď před sebou vidíš dlouhé širé močály, kam oko dohlédne. A za nimi? Mordor! Vydrž, cíl je stále daleko, ale už na dohled!", img: "images/mount-doom-challenge/emyn muil.jpg" },    
    { km: 2160, nazev: "Mrtvé močály", text: "Mrtvé močály jsou rozsáhlá bažinatá pustina, rozkládající se na planině Dagorlad. Zde byla v dávných dobách svedena velká bitva lidí a elfů proti Sauronovi. Ty se teď musíš těmito smradlavými močály proplést a dostat se na druhou stranu. Cesta bude dlouhá přibližně 60 kilometrů, tak si zacpi nos a utíkej!", img: "images/mount-doom-challenge/mrtve mocaly.jpg" },
    { km: 2220, nazev: "Mrtvé močály", text: "A jsi venku! Stejně jako hobitům, i tobě se podařilo dostat se z bludiště bažin. Teď už jsi na dohled k Černé Bráně do Mordoru!", img: "images/mount-doom-challenge/mrtve mocaly.jpg" },    
    { km: 2230, nazev: "Černá Brána", text: "Černá Brána, neboli Morannon je hlavní vstup do Mordoru. Díváš se na tu monumentální bránu a láká tě vejít a zamířit přímo k Hoře Osudu, ale cesty hobitů, které následuješ vedou mnohem delší a složitější cestou. Nesmíš se nechat chytit a tak stejně jako hobiti, i ty musíš zamířit dál jinou cestou - tajnější a stejně nebezpečnou.", img: "images/mount-doom-challenge/cerna brana.jpg" },
    { km: 2380, nazev: "Setkání s Faramirem", text: "Od rozpadu Společenstva jsi uběhl už 400 kilometrů přes hory a bažiny. Teď je cesta alespoň na chvíli díky přírodě jednodušší. Vešel si totiž do severního Ithilienu. Zde hobiti poprvé zahlédli Olifanty a také došlo k nedobrovolnému setkání s Faramirem.", img: "images/mount-doom-challenge/faramir.jpg" },
    { km: 2450, nazev: "Opuštění Faramira", text: "Na tomto místě, poblíž Osgiliathu se Faramir rozhodl hobity s jejich posláním propustit a tak i ty můžeš jít v jejich stopách, tentokrát už opravdu rovnou do Mordoru. Čeká tě poslední a nejtěžší část cesty.", img: "images/mount-doom-challenge/faramir2.jpg" },
    { km: 2500, nazev: "Cirith Ungol", text: "Právě se nacházíš na začátku soutěsky Cirith Ungol. Musíš po stopách hobitů vyšplhat dlouhé strmé schody a následně se vydat do hrůzostrašné jeskyně Oduly, která má pořád hlad. Samovi se podařilo Odulu odrazit hlavně díky světlu Earendil, které hobiti získali od Galadriel na pomoc.", img: "images/mount-doom-challenge/cirith ungol.jpg" },
    { km: 2540, nazev: "Únik ze soutěsky", text: "Podařilo se ti vymanit ze soutěsky Cirith Ungol, pravděpodobně té nejnebezpečnější jeskyně celé Středozemě! Otřep si pavučiny, Hora Osudu a tvůj finální cíl je už přímo před tebou! Bohužel, stejně jako hobitům, i tobě teď brání v průchodu k sopce armáda skřetů. Nasaď si skřetí zbroj a čeká tě poslední část zoufalé cesty - dlooouhý pochod plání Gorgoroth.", img: "images/mount-doom-challenge/xxxx.jpg" },
    { km: 2740, nazev: "Pláň Gorgoroth", text: "Ušel si už 200 nekonečných kilometrů plání Gorgoroth. Vzduch je jen štiplavý dým, všude okolo skřeti, ostré skály a nebezpečí. Hora Osudu leží před tebou, posledních 120 kilometrů. Teď už to nemůžeš vzdát! Je neuvěřitelné, jakou vzdálenost museli ještě Frodo se Samem ujít Mordorem, než se konečně dostali do cíle.", img: "images/mount-doom-challenge/xxxx.jpg" },            
    { km: 2863, nazev: "Mount Doom", text: "Dokázal jsi to! Přešel jsi z Hobitína až do Mordoru. 2863 kilometrů nebezpečí a strastí máš za sebou! Zasloužíš si největší uznání, pokořil jsi tuto výzvu.", img: "images/mount-doom-challenge/mount doom.jpg" }
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
    
    // Protože SVG mapa je nastavená na šířku 2087 a výšku 1221, převedeme souřadnice na procenta okna
    let panacekLeft = (bodPanacka.x / 2087) * 100;
    let panacekTop = (bodPanacka.y / 1221) * 100;

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
        
        let teckaLeft = (bodMista.x / 2087) * 100;
        let teckaTop = (bodMista.y / 1221) * 100;
        
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
        let stareKm = nabehanoKm; 
        
        nabehanoKm += pridaneKm; 
        localStorage.setItem(unikatniKlic, nabehanoKm); 
        polickoKm.value = ""; 
        aktualizujStatistiky(); 

        // KONTROLA DOSAŽENÍ NOVÉHO MÍSTA
        for (let i = 0; i < seznamMist.length; i++) {
            let misto = seznamMist[i];
            
            if (stareKm < misto.km && nabehanoKm >= misto.km) {
                // Místo abychom okno hned otevřeli, jen ho zařadíme do čekárny!
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

// --- FUNKCE PRO VYSKAKOVACÍ OKNO ----------------
// --- FUNKCE PRO VYVOLÁVÁNÍ Z FRONTY ---
function zobrazDalsiOdmenu() {
    if (frontaOdmen.length > 0) {
        // .shift() vezme první položku ve frontě, smaže ji odtam a vrátí nám její číslo
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

// --- ZOOMOVÁNÍ MAPY ---
let urovenZoomu = 100; // Základní velikost v procentech
const mapaZoomovana = document.getElementById("mapa-zoomovana");

document.getElementById("zoom-in-btn").addEventListener("click", function() {
    urovenZoomu += 30; // Přiblížíme o 30 %
    // Maximální přiblížení (např. 300 %)
    if (urovenZoomu > 300) urovenZoomu = 300; 
    mapaZoomovana.style.width = urovenZoomu + "%";
});

document.getElementById("zoom-out-btn").addEventListener("click", function() {
    urovenZoomu -= 20; // Oddálíme o 30 %
    // Záchranná brzda, ať mapu nezmenšíme do neviditelna
    if (urovenZoomu < 100) urovenZoomu = 100; 
    mapaZoomovana.style.width = urovenZoomu + "%";
});