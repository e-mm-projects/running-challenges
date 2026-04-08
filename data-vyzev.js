// data-vyzev.js

const databazeVyzev = {
    "rim": {
        nazev: "Výzva do Říma!",
        celkoveKm: 1543,
        tridaPozadi: "pozadi-rim",      // Třída pro body
        tridaMapy: "",                  // Řím nemá speciální třídu na mapě
        mapaImg: "images/cesta-do-rima/mapa-rim.jpg",
        svgViewBox: "0 0 911 1197",
        // Zkopíruj sem tu dlouhou klikatou trasu d="..." z Říma
        svgPath: "M 550 45 L 507 95 L 454 260 L 420 300 L 418 380 L 330 399 L 253 452 L 263 486 L 260 558 L 220 703 L 250 832 L 245 928 L 255 995 L 325 1100 L 360 1170", 
        mapaSirka: 911,
        mapaVyska: 1197,
        povolitZoom: false,
        panacekHtml: "🏃‍♂️",            // V Římě běží jen emoji
        seznamMist: [
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
        ]
    },
    
    "mount-doom": {
        nazev: "Mount Doom Challenge",
        celkoveKm: 2863,
        tridaPozadi: "pozadi-doom",     // Třída pro body
        tridaMapy: "mapa-doom",         // Třída pro kontejner mapy
        mapaImg: "images/middle-earth-empty.jpg",
        svgViewBox: "0 0 2087 1221",
        // Zkopíruj sem tu dlouhou trasu z Mordoru
        svgPath: "M 360 154 L 380 205 L 450 165 L 515 185 L 550 160 L 620 135 L 680 150 L 720 185 L 860 140 L 1009 135 L 960 304 L 1020 285 L 960 319 L 925 405 L 1028 409 L 1078 460 L 1155 495 L 1180 550 L 1280 615 L 1270 660 L 1325 665 L 1310 720 L 1345 739 L 1320 815 L 1320 900 L 1420 850 L 1540 910 L 1510 940 L 1509 1050 L 1520 1110 L 1628 1100 L 1590 1000 L 1640 980 L 1690 975 L 1690 1050",
        mapaSirka: 2087,
        mapaVyska: 1221,
        povolitZoom: true,
        panacekHtml: `<img src="images/mount-doom-challenge/ikona.png" alt="Hobiti Frodo a Sam" class="panacek-ikona-doom">`,
        seznamMist: [
            { km: 1, nazev: "Hobitín", text: "Vítej dobrodruhu! Právě ses pustil na dlouhou cestu po stopách dvou hobitů - Froda a Sama. Ti společně prošli skrze celou Středozemi až k samotné Hoře Osudu, kde se jim podařilo ukončit Třetí věk Středozemě vhozením Prstenu do Hory Osudu. Vše ale začíná tady v Hobitíně. Klidném místě, nacházejícím se v Kraji. Gandalf pověřil Froda se Samem důležitým úkolem. Musí se dostat do Hůrky, do hostince U Skákavého Poníka. I když se to ale ve filmu nezdá, Hůrka je od Hobitína vzdálená přibližně 250 kilometrů, máš tedy co dělat! Následující část cesty povede z Hobitína do Studánek. Nebude to trvat dlouho!", img: `images/mount-doom-challenge/hobitin.jpg` },
            { km: 49, nazev: "Studánky", text: "Právě jsi dorazil do Studánek! Frodův dům ve Studánkách sloužil jako krytí, pro Frodův odchod, kterým chtěl zmást Hobity po prodeji Dna Pytle v Hobitíně. V knižní verzi se zde Frodo a Sam setkávají s Pipinem a Smíškem, kteří již dávno o kouzelném Prstenu vědí a přidávají se k výpravě. Hobiti už věděli, že jsou pronásledováni Černými jezdci a proto zvolili cestu skrze Starý Hvozd. Po cestě tam tě ještě čeká zastávka u sedláka Červíka.", img: "images/mount-doom-challenge/studanky.jpg" },
            { km: 102, nazev: "Pole sedláka Červíka", text: "Máš za sebou už více než 100 kilometrů cesty s Frodem a Samem! Ti se zde ve filmové verzi setkávají se Smíškem a Pipinem a od této chvíle jsou součástí výpravy. Frodo měl už odmalička hrůzu z Červíkových velkých psů. V knižní verzi se spolu Frodo a sedlák Červík usmířili. Další část výpravy už bude mnohem nebezpečnější! Cesta vede do Starého Hvozdu.", img: "images/mount-doom-challenge/sedlak cervik.jpg" },
            { km: 125, nazev: "Starý Hvozd", text: "A je to tady! Přestože se hobiti zbavili Černých jezdců pochodem přes Starý Hvozd, čeká je neméně smrtonosné nebezpečí. Starý Hvozd je zalesněné území na východ od Kraje. Věřilo se, že stromy v tomto lese byly nepřátelské a bdělé. Listí šustilo i v bezvětší a v noci se ozýval šepot. Dokonce se zde záhadně přemisťovaly pěšiny. Hobiti z Rádovska pro ochranu své země před tímto lesem vysadili podél okraje Starého hvozdu Vysoké křoví - neprostupný živý plot. Když jednou začaly stromy růst příliš blízko Vysokého křoví, hobiti jich mnoho pokáceli a spálili na Vatrové pasece, kus cesty od západního okraje lesa. Od té doby se stromy stáhly od živého plotu, ale začaly být ještě nepřátelštějští.", img: "images/mount-doom-challenge/stary hvozd.jpg" },
            { km: 147, nazev: "Dědek Vrbák", text: "Starý Hvozd je nebezpečné místo a hobiti se o tom přesvědčili na vlastní kůži právě na tomto místě. Lesem protéká řeka Opletnice a u řeky roste strom, který není tak  úplně obyčejný. Je to zlý Huorn - dědek Vrbák. Ten hobity uspal a snažil se je pohltit. Zachránil je až tajuplný Tom Bombadil svou písničkou. Následně pak hobity pozval do svého nedalekého domu. Vydrž pár dalších kilometrů a dozvíš se o Tomovi něco více!", img: "images/mount-doom-challenge/dedek vrbak.jpg" },    
            { km: 167, nazev: "Dům Toma Bombadila", text: "Máš za sebou kus cesty a první smrtelné nebezpečí s hobity. Teď jsi ale v bezpečí, vítej u Toma! Tom Bombadil byla záhadná postava žijící ve Starém hvozdě. Mluví se o něm jako o nejstarší bytosti ve Středozemi a o jeho původu není nic známo. Má ženu Zlatěnku, se kterou se hobiti potkali v jejich domě pod kopcem, na východním okraji Starého Hvozdu. Byl úzce spojen s přírodou a ve své vlastní zemi, jejíž hranice si sám vymezil. Měl nesmírnou moc, takže bez problémů dokázal porazit zlé síly dědka Vrbáka. Dokonce byl jedinou bytostí, která si nasadila Jeden prsten a nejen, že na něj neměl žádný vliv, dokonce jej nechal dočasně zmizet. Pak jej vrátil zpět polekanému Frodovi. Tom Bombadil se nestaral o vnější svět a žádné války pro něj neměly význam. Byl prostě svůj.", img: "images/mount-doom-challenge/bombadil.jpg" },
            { km: 198, nazev: "Mohylové vrchy", text: "Právě si doběhl k pradávným Mohylovým vrchům a máš za sebou bezmála 200 kilometrů putování s hobity. Ve filmové verzi vynechaná scéna, avšak jedna z nejnebezpečnějších a nejdůležitějších částí celé výpravy. Osud čtveřice hobitů visel na vlásku. Zachránil je Tom Bombadil. Hobitům následně předal mocné zbraně z mohyly, které byly vykovány za dávných časů pro boj s vládcem Angmaru. Díky této shodě okolností bylo možné o dlouhou dobu později zranit vůdce Devítky a setnout z něj proroctví, kvůli kterému jej nemohl zabít žádný člověk. (Ve filmové verzi muž).", img: "images/mount-doom-challenge/mohylove vrchy.jpg" },
            { km: 255, nazev: "Hůrka", text: "Hůrka byla místem, kde se setkávalo mnoho cestovatelů, například trpaslíci, cestující po Velké cestě mezi svými sídly v Modrých horách a na východě. Hlavním společenským centrem městečka byl vyhlášený hostinec U Skákavého poníka, patřící rodině Máselníků. Je to první (a poslední?) hospoda na tvé trase! Urazil si 250 kilometrů cesty až sem, a hobiti se zde setkávají s tajemným Chodcem, který si je získal na svou stranu a putoval s nimi dále divočinou směrem k Roklince.", img: "images/mount-doom-challenge/hurka.jpg" },
            { km: 315, nazev: "Pustina", text: "Po stopách hobitů a Aragorna putuješ dál, až k bažinám v pustině. Aragorn se snažil hlavně setřást ze stopy Černé jezdce a udržet hobity naživu. Cesta z Hůrky až do Roklinky je dlouhá téměř 500 kilometrů nebezpečnou pustinou. Na dohled už je i Amon Sul - starodávné trosky strážné věže, kam teď vedou vaše kroky.", img: "images/mount-doom-challenge/pustina.jpg" },
            { km: 380, nazev: "Amon Sul", text: "Máš za sebou už 380 kilometrů cesty od Hobitína. Z Hůrky po stopách Aragorna a hobitů divočinou jsi urazil už 125 kilometrů až ses dostal sem na Amon Sûl. Název se překládá jako Větrný vrch. Když bylo založeno Severní království - Arnor, byla tu postavena mohutná strážní věž se stejným názvem Amon Sûl, která se stala stanovištěm jednoho z palantírů. Při válce s Černokněžným králem Angmaru byla strážní věž kompletně vypálena. 3. října 3018 tu byl čaroděj Gandalf obklíčen a přepaden hlídkujícími nazgûly a unikl jim. O tři dny později byla třemi nazgûly přepadena pod vrcholkem družina hobitů vedená Aragornem. Frodo tu byl raněn morgulskou dýkou. Tebe teď čeká přes 100 kilometrů dlouhá cesta divočinou až k Poslednímu mostu", img: "images/mount-doom-challenge/amon sul.jpg" },
            { km: 596, nazev: "Poslední most", text: "Máš za sebou další velký kus cesty až k Poslednímu mostu. Je to krátký kamenný most přes řeku Mitheithel. Dále se rozpíná divočina směrem až k Roklince. Zde podle knižní předlohy Glorfindel zahnal Prstenové přízraky a nechal Aragornovi a hobitům beryl na cestě jako znamená bezpečného průchodu. Ve filmové verzi se nic z těchto událostní nestane a družina zanedlouho potká Arwen.", img: "images/mount-doom-challenge/posledni most.jpg" },
            { km: 630, nazev: "Setkání s Arwen", text: "V divočině za mostem Aragorn zoufale hledal Athelas - Králův lístek pro zpomalení otravy Froda po zásahu Morgulského meče. Družinu zde dle filmového zpracování vystopuje Arwen a Froda zachrání tím, že jej naloží na svého koně Asfalotha a uhání s ním k Roklince. Nacházíš se přibližně 630 kilometrů od Hobitína a Frodova situace zde byla opravdu kritická. Uháněj dál k brodu přes řeku Bruinen! Hodně štěstí a ať tě přízraky nedohoní.", img: "images/mount-doom-challenge/arwen.jpg" },
            { km: 740, nazev: "Bruinen", text: "Uběhl jsi další velký kus cesty a do Roklinky už je to posledních pár kilometrů! Na tomto místě se nachází brod řeky Bruinen, kde se střetli Černí Jezdci s Arwen (ve filmovém zpracování) / Glorfindelem (v knižním zpracování). Výsledek byl pro jezdce stejný, řeka Bruinen jezdce smetla, zabila jejich koně a vzala jim hmotnou podobu. Řeka byla poslední linií obrany Roklinky. Teď už vzhůru tam, do posledního domáckého sídla elfů na Východě!", img: "images/mount-doom-challenge/bruinen.jpg" },
            { km: 752, nazev: "Roklinka", text: "Vítej v Roklince! Velká kapitola tvé výpravy je za tebou. Urazil jsi už více než 750 kilometrů! Cesta do Roklinky byla kriticky nebezpečná a hobiti ji zvládli, především za pomoci Aragorna. V Roklince se rozhodlo na velké Elrondově radě všech národů o osudu Jednoho Prstenu. Utvořilo se zde Společenstvo Prstenu a celá družina vedená Gandalfem se vydala na ještě delší a nebezpečnější cestu. Gandalf měl v plánu překonat Mlžné hory průsmykem Caradhras a to je další cíl i pro tebe! Cesta bude dlouhá, tak vydrž a pokračuj dále.", img: "images/mount-doom-challenge/roklinka.jpg" },
            { km: 890, nazev: "Cesta k průsmyku", text: "Urazil si se Společenstvem asi 140 kilometrů jížně od Roklinky podél Mlžných hor a na tomto místě družina narazila na špehujícími Crebainy, vyšlechtěné a vyslané Sarumanem. O plánu překonat hory průsmykem Caradhras už Saruman ví, přesto nezbývá, než se o náročný přechod pokusit. Cesta od tohoto táboru až k místu na vrcholcích hor, kde Společenstvo přizná porážku je dlouhá a nezbývá, než vydržet.", img: "images/mount-doom-challenge/crebain.jpg" },    
            { km: 1010, nazev: "Průsmyk Caradhras", text: "Nacházíš se už více než 1000 kilometrů od Hobitína. Je to obrovský úspěch a se Společenstvem ses dostal přes bažiny, divočinu, dlouhou prašnou cestu i starodávné lesy až na vrcholky Mlžných hor. Na tomto místě Společenstvo vzdalo pokus o Caradhras a vrací se poražené zpět. Hora zvítězila a nezbývá než hledat jinou cestu. Jako další v pořadí se nabízí cesta pod horami. Zatímco ve filmové verzi se do dolů v Morii nechce především Gandalfovi, v knižní verzi odmítá touto cestou jít Aragorn, který už v Morii v minulosti byl. Ten se podvolí až vůli celého Společenstva, varuje však Gandalfa před těmito kobkami. Čeká tě teď dlouhá cesta k branám Morie. Od tohoto místa je to ještě dalších 160 kilometrů.", img: "images/mount-doom-challenge/caradhras.jpg" },
            { km: 1100, nazev: "Přepadení Společenstva", text: "S Frodem a Samem jsi absolvoval už 1100 kilometrů na cestě z Hobitína. Dle knižní předlohy bylo přibližně na tomto místě Společenstvo přepadeno smečkou vlků, kteří je pronásledovali z hor. Díky Gandalfově ohni a zbraním ostatních se útok podařilo odrazit. Následovala pak rychlá cesta směrem k branám Morie, dříve než se vlci vrátí.", img: "images/mount-doom-challenge/prepadeni.jpg" },     
            { km: 1170, nazev: "Brány Morie", text: "Ve stopách Společenstva jsi doběhl až k branám Morie! Řekni přítel a vejdi. Nikdo netušil, co se v Morii stane. Gandalf a Aragorn byli jediní členové Společenstva, kteří už toto místo dříve navštívili. U bran Morie Společenstvo přepadl bezejmenný pozorovatel z vody a v Morii je uvěznil, už nebylo cesty zpět, pouze vpřed. Následující kilometry byly pro družinu extrémně náročné. Pohyb ve tmě, v tichosti a v tísnivé atmosféře po několik dlouhých dní.", img: "images/mount-doom-challenge/brana morie.jpg" },
            { km: 1230, nazev: "Balinova hrobka", text: "Prošel jsi ve stopách družiny už 50 kilometrů tmou a náročným terénem. Tady se družina zastavila u Balinovy hrobky. Balin byl příbuzný Gimliho a zabili jej zde skřeti. Také Společenstvo bylo přepadeno, tentokrát však proti skřetům stál čaroděj Gandalf a útok byl odražen - ne však na dlouho. Společenstvo se dalo do posledního zoufalého úprku Morií k můstku, který vedl k východu z Morie.", img: "images/mount-doom-challenge/gimli.jpg" },
            { km: 1249, nazev: "Souboj na můstku", text: "Právě procházíš po můstku, kde svedl souboj Gandalf a Balrog. Při souboji se oba zřítili do propasti a následně společně prchali tmou před nepojmenovanými stvořeními, které žijí v hlubinách světa. Při finálním souboji oba padli. Gandalf byl následně poslán zpět, aby dokončil svůj úkol ve Středozemi. K východu z Morie už to máš jen kousek, hned za rohem vidíš denní světlo!", img: "images/mount-doom-challenge/gandalf vs balrog.jpg" },
            { km: 1350, nazev: "Vstup do Lothlorienu", text: "Právě vstupuješ do Lothlorienu, nejkrásnějšího elfího království Třetího věku. Společenstvo do tohoto neobyčejného lesa vstoupilo po ztrátě Gandalfa ve velmi chmurném rozpoložení. Ty si můžeš užít nádherný les se stromy Mallorny, které rostou pouze zde. Mají zlaté listy a podle toho se lesu říká Zlatý les.", img: "images/mount-doom-challenge/lorien.jpg" },
            { km: 1440, nazev: "Caras Galadhon", text: "Dorazil si do Caras Galadhon, hlavního města a pevnosti elfské říše Lothlorien, které je postavené v korunách stromů, Mallornů. Město založila Galadriel a Celeborn jako obranu proti Dol Gulduru. Společenstvo zde našlo útočiště a zotavilo se ze svých cest, ty ale pokračuješ dál. Čeká tě nejdelší část cesty a to je plavba po řece Anduině.", img: "images/mount-doom-challenge/caras galadhon.jpg" },
            { km: 1455, nazev: "Plavba po Anduině", text: "Čeká tě nejdelší část tvého běhu! Start dlouhé cesty po vodním toku Anduiny. Pro Společenstvo to na elfích lodích nebyl takový problém. Ve filmovém zpracování trvala cesta pouze pár minut. Tebe ale čeká přes 400 kilometrů cesty, než doběhneš až k Argonathu a Raurorskému vodopádu.", img: "images/mount-doom-challenge/plavba.jpg" },    
            { km: 1890, nazev: "Sarn Gebir", text: "Konečně se blížíš ke konci této nekonečné plavby! Legolas v těchto místech poblíž Sarn Gebiru sestřelil Nazgula, který zaútočil na Společenstvo ze vzduchu. Z dálky už slyšíš bouření velkého Raurosu.", img: "images/mount-doom-challenge/legolas.jpg" },    
            { km: 1920, nazev: "Argonath", text: "Před tebou se právě tyčí dvě monumentální sochy Aragornových vzdálených předků Isildura a Anariona (ve filmovém zpracování - Elendila). Společenstvo tudy proplulo 25. února roku 3019. Pokochej se pohledem a nyní už musíme vyrazit dál. Blíží se důležitý moment, rozdělení celého Společenstva.", img: "images/mount-doom-challenge/argonath.jpg" },
            { km: 1980, nazev: "Rozpad Společenstva", text: "Konec tvé cesty podél řeky Anduiny je tady! Urazil jsi už téměr 2000 kilometrů spolu s hobity! A právě tady, 2000 kilometrů od startu tvé cesty se Společenstvo rozpadá. Poblíž Amon Hen byl Boromir zlákán mocí Prstenu a zaplatil za to životem. Pipin a Smíšek byli zajati. Aragorn, Gimli a Legolas se je vydali zachránit. Tebe ale čeká cesta nejtěžší - následovat Froda a Sama do bludiště skal Emyn Muil a pak najít cestu do samotného Mordoru.", img: "images/mount-doom-challenge/rozpad spolecenstva.jpg" },
            { km: 2080, nazev: "Vstup do Emyn Muil", text: "Právě stojíš na hranicích skalního bludiště Emyn Muil. Předtím, než vstoupíš do Mordoru se odtud musíš vymotat, tak jako Frodo a Sam. Těm se podařilo zajmout Gluma, který je ze skal dostal. Ty to musíš zvládnout sám. Mordor už je na dohled, tak to nevzdávej! ", img: "images/mount-doom-challenge/emyn muil.jpg" },
            { km: 2130, nazev: "Opuštění Emyn Muil", text: "Stejně jako Frodovi, Samovi a jejich průvodci Glumovi se i tobě podařilo dostat se z bludiště Emyn Muil. Teď před sebou vidíš dlouhé širé močály, kam oko dohlédne. A za nimi? Mordor! Vydrž, cíl je stále daleko, ale už na dohled!", img: "images/mount-doom-challenge/emyn muil2.jpg" },    
            { km: 2160, nazev: "Vstup do Mrtvých močálů", text: "Mrtvé močály jsou rozsáhlá bažinatá pustina, rozkládající se na planině Dagorlad. Zde byla v dávných dobách svedena velká bitva lidí a elfů proti Sauronovi. Ty se teď musíš těmito smradlavými močály proplést a dostat se na druhou stranu. Cesta bude dlouhá přibližně 60 kilometrů, tak si zacpi nos a utíkej!", img: "images/mount-doom-challenge/mrtve mocaly.jpg" },
            { km: 2220, nazev: "Opuštění Mrtvých močálů", text: "A jsi venku! Stejně jako hobitům, i tobě se podařilo dostat se z bludiště bažin. Teď už jsi na dohled k Černé Bráně do Mordoru!", img: "images/mount-doom-challenge/mrtve mocaly2.jpg" },    
            { km: 2230, nazev: "Černá Brána", text: "Černá Brána, neboli Morannon je hlavní vstup do Mordoru. Díváš se na tu monumentální bránu a láká tě vejít a zamířit přímo k Hoře Osudu, ale cesty hobitů, které následuješ vedou mnohem delší a složitější cestou. Nesmíš se nechat chytit a tak stejně jako hobiti, i ty musíš zamířit dál jinou cestou - tajnější a stejně nebezpečnou.", img: "images/mount-doom-challenge/cerna brana.jpg" },
            { km: 2380, nazev: "Setkání s Faramirem", text: "Od rozpadu Společenstva jsi uběhl už 400 kilometrů přes hory a bažiny. Teď je cesta alespoň na chvíli díky přírodě jednodušší. Vešel si totiž do severního Ithilienu. Zde hobiti poprvé zahlédli Olifanty a také došlo k nedobrovolnému setkání s Faramirem.", img: "images/mount-doom-challenge/faramir.jpg" },
            { km: 2450, nazev: "Opuštění Faramira", text: "Na tomto místě, poblíž Osgiliathu se Faramir rozhodl hobity s jejich posláním propustit a tak i ty můžeš jít v jejich stopách, tentokrát už opravdu rovnou do Mordoru. Čeká tě poslední a nejtěžší část cesty.", img: "images/mount-doom-challenge/faramir2.jpg" },
            { km: 2500, nazev: "Cirith Ungol", text: "Právě se nacházíš na začátku soutěsky Cirith Ungol. Musíš po stopách hobitů vyšplhat dlouhé strmé schody a následně se vydat do hrůzostrašné jeskyně Oduly, která má pořád hlad. Samovi se podařilo Odulu odrazit hlavně díky světlu Earendil, které hobiti získali od Galadriel na pomoc.", img: "images/mount-doom-challenge/cirith ungol2.jpg" },
            { km: 2540, nazev: "Únik ze soutěsky", text: "Podařilo se ti vymanit ze soutěsky Cirith Ungol, pravděpodobně té nejnebezpečnější jeskyně celé Středozemě! Otřep si pavučiny, Hora Osudu a tvůj finální cíl je už přímo před tebou! Bohužel, stejně jako hobitům, i tobě teď brání v průchodu k sopce armáda skřetů. Nasaď si skřetí zbroj a čeká tě poslední část zoufalé cesty - dlooouhý pochod plání Gorgoroth.", img: "images/mount-doom-challenge/cirith ungol3.jpg" },
            { km: 2740, nazev: "Pláň Gorgoroth", text: "Ušel si už 200 nekonečných kilometrů plání Gorgoroth. Vzduch je jen štiplavý dým, všude okolo skřeti, ostré skály a nebezpečí. Hora Osudu leží před tebou, posledních 120 kilometrů. Teď už to nemůžeš vzdát! Je neuvěřitelné, jakou vzdálenost museli ještě Frodo se Samem ujít Mordorem, než se konečně dostali do cíle.", img: "images/mount-doom-challenge/gorgoroth.jpg" },            
            { km: 2863, nazev: "Mount Doom", text: "Dokázal jsi to! Přešel jsi z Hobitína až do Mordoru. 2863 kilometrů nebezpečí a strastí máš za sebou! Zasloužíš si největší uznání, pokořil jsi tuto výzvu.", img: "images/mount-doom-challenge/mount doom.jpg" }            
        ]
    },

    "bradavice": {
        nazev: "Cesta do Bradavic",
        celkoveKm: 1010,
        tridaPozadi: "pozadi-bradavice",  
        tridaMapy: "mapa-bradavice",      
        mapaImg: "images/cesta-do-bradavic/mapa-bradavice.jpg", 
        svgViewBox: "0 0 1191 1232",      
        svgPath: "M 890 1001 L 906 949 L 890 909 L 870 897 L 882 859 L 858 797 L 822 769 L 819 722 L 850 673 L 842 649 L 798 637 L 784 615 L 767 581 L 754 537 L 744 516 L 710 489 L 678 477 L 629 470 L 582 466 L 553 445 L 548 429 L 565 413 L 553 401 L 527 402 L 503 407 L 476 410 L 465 394 L 474 368 L 470 353 L 457 353 L 422 357 L 427 370",   
        mapaSirka: 1191,                  
        mapaVyska: 1232,
        povolitZoom: true,                // Povolení zoomu pro trasu
        panacekHtml: `<img src="images/cesta-do-bradavic/ikona-vlak.png" alt="Bradavický expres" class="panacek-ikona-bradavice">`,              // Tematický panáček 
        seznamMist: [
            { km: 1, nazev: "Nástupiště 9 a 3/4", text: "Prošel jsi přepážkou na King's Cross a tvoje epická cesta začíná! Bradavický expres už sice odjel, ale ty to po svých zvládneš taky. Směr sever!", img: "images/cesta-do-bradavic/nastupiste.jpg" },            
            { km: 18, typ: "zabka", nazev: "Čokoládová žabka: Arthur Weasley", text: "Zbožňuje mudlovské vynálezy, zejména zástrčky a baterie. Jeho největším snem je zjistit, jak přesně letadlo dokáže zůstat ve vzduchu.", img: "images/cesta-do-bradavic/zabky/arthur.jpg" },
            { km: 35, typ: "zabka", nazev: "Čokoládová žabka: Bellatrix Lestrange", text: "Její jméno pochází z latiny a znamená 'bojovnice', což naprosto sedí. Věrná služebnice Pána zla, která strávila 14 let v Azkabanu za kletby, ze kterých mrazí.", img: "images/cesta-do-bradavic/zabky/bellatrix.jpg" },
            { km: 52, typ: "zabka", nazev: "Čokoládová žabka: Profesor Binns", text: "Jediný učitel v Bradavicích, který je duch. Údajně usnul v křesle u krbu ve sborovně a ráno odešel učit Dějiny čar a kouzel bez svého těla.", img: "images/cesta-do-bradavic/zabky/binns.jpg" },
            { km: 69, typ: "zabka", nazev: "Čokoládová žabka: Albus Brumbál", text: "Považován za největšího kouzelníka moderní doby, který porazil Grindelwalda. Rád si pochutná na citronové zmrzlině a poslouchá komorní hudbu.", img: "images/cesta-do-bradavic/zabky/brumbal.jpg" },
            { km: 86, typ: "zabka", nazev: "Čokoládová žabka: Cedric Diggory", text: "Férový a statečný chytač mrzimorského famfrpálového týmu. Jeho smutný konec v Turnaji tří kouzelníků byl bodem zlomu pro celý kouzelnický svět.", img: "images/cesta-do-bradavic/zabky/cedric.jpg" },
            
            { km: 100, nazev: "Cambridge", text: "Máš za sebou první stovku a probíháš kolem slavné univerzity. Mudlové tu sice studují bez hůlek, ale architektura už trochu připomíná bradavické chodby.", img: "images/cesta-do-bradavic/cambridge.jpg" },
            
            { km: 120, typ: "zabka", nazev: "Čokoládová žabka: Crabbe", text: "Jeden ze dvou tupých a věrných nohsledů Draca Malfoye. Jeho záliba v jídle a touha po moci ho nakonec stála život, když nezvládl zkrotit zložár.", img: "images/cesta-do-bradavic/zabky/crabbe.jpg" },
            { km: 140, typ: "zabka", nazev: "Čokoládová žabka: Dobby", text: "Bývalý domácí skřítek rodiny Malfoyových, který získal svobodu díky obyčejné ponožce. Pro své přátele by obětoval vše a zbožňuje pletené oblečení.", img: "images/cesta-do-bradavic/zabky/dobby.jpg" },
            
            { km: 160, nazev: "Peterborough", text: "Vítej v Peterborough! Zastav se na chvíli u místní majestátní katedrály, naber dech a pokračuj dál na sever.", img: "images/cesta-do-bradavic/peterborough.jpg" },
            
            { km: 175, typ: "zabka", nazev: "Čokoládová žabka: Dolores Umbridgeová", text: "Pravděpodobně nejnenáviděnější osoba z celých Bradavic, známá svou posedlostí růžovou barvou. Je tak zlá, že ani mozkomorové na ni nemají vliv.", img: "images/cesta-do-bradavic/zabky/dolores.jpg" },
            { km: 190, typ: "zabka", nazev: "Čokoládová žabka: Draco Malfoy", text: "Ten jehož jméno rozhodně není k smíchu! Ačkoli se snažil působit jako drsný Smrtijed, v hloubi duše na ty nejhorší činy nikdy neměl žaludek.", img: "images/cesta-do-bradavic/zabky/draco.jpg" },
            { km: 210, typ: "zabka", nazev: "Čokoládová žabka: Argus Filch", text: "Školník v Bradavicích, který je moták, pochází z kouzelnické rodiny, ale nemá schopnosti. Jeho jediným životním cílem je nachytat studenty při lumpárnách.", img: "images/cesta-do-bradavic/zabky/filch.jpg" },
            { km: 230, typ: "zabka", nazev: "Čokoládová žabka: Nicolas Flamel", text: "Francouzský alchymista a jediný známý tvůrce Kamene mudrců, díky kterému žil přes 600 let. Byl to velmi blízký a dobrý přítel Albuse Brumbála.", img: "images/cesta-do-bradavic/zabky/flamel.jpg" },
            
            { km: 245, nazev: "Lincoln", text: "Lincolneshire je za tebou! Katedrála v Lincolnu posloužila při natáčení Harryho Pottera a Da Vinciho kódu. Nasaj trochu té filmové atmosféry.", img: "images/cesta-do-bradavic/lincoln.jpg" },
            
            { km: 265, typ: "zabka", nazev: "Čokoládová žabka: Fleur Delacour", text: "Šampionka Krásnohůlek, která má díky své babičce v krvi částečně vílí původ. Ačkoliv působí chladně, je nesmírně loajální a statečná.", img: "images/cesta-do-bradavic/zabky/fleur.jpg" },
            { km: 285, typ: "zabka", nazev: "Čokoládová žabka: Ginny Weasleyová", text: "Nejmladší a jediná dcera v rodině Weasleyových, která v sobě skrývá obrovskou čarodějnou sílu. Nikdo nechce schytat její ukázkové Netopýří zaklínadlo.", img: "images/cesta-do-bradavic/zabky/ginny.jpg" },
            { km: 305, typ: "zabka", nazev: "Čokoládová žabka: Godric Nebelvír", text: "Zakladatel Bradavic, který u svých studentů oceňoval statečnost a odvahu. Původní majitel Moudrého klobouku a slavného meče vykládaného rubíny.", img: "images/cesta-do-bradavic/zabky/godric.jpg" },
            
            { km: 325, nazev: "York", text: "Jsi v Yorku! Právě probíháš uličkou Shambles, která byla hlavní inspirací pro Příčnou ulici. Dávej pozor na výlohy a nekupuj zbytečně moc Bertíkových fazolek!", img: "images/cesta-do-bradavic/york.jpg" },
            
            { km: 345, typ: "zabka", nazev: "Čokoládová žabka: Goyle", text: "Druhá půlka Malfoyovy gorilí ochranky, o kterém se dá říct, že má větší svaly než mozek. Po otci podědil vlohy k černé magii a stal se Smrtijedem.", img: "images/cesta-do-bradavic/zabky/goyle.jpg" },
            { km: 365, typ: "zabka", nazev: "Čokoládová žabka: Rubeus Hagrid", text: "Poloobr a klíčník s obrovským srdcem, který má slabost pro nebezpečná 'roztomilá' zvířátka. Právě on přinesl Harrymu zprávu o tom, že je čaroděj.", img: "images/cesta-do-bradavic/zabky/hagrid.jpg" },
            
            { km: 385, nazev: "Goathland (Prasinky)", text: "Nádherná práce! Právě jsi dorazil na nádraží Goathland, které ve filmech představovalo vlakovou zastávku v Prasinkách. Už jsi skoro v polovině cesty!", img: "images/cesta-do-bradavic/goathland.jpg" },
            
            { km: 400, typ: "zabka", nazev: "Čokoládová žabka: Harry Potter", text: "Chlapec, který přežil. Je jediným známým člověkem v historii kouzelnického světa, který kdy odolal smrtící kletbě Avada Kedavra.", img: "images/cesta-do-bradavic/zabky/harry.jpg" },
            { km: 420, typ: "zabka", nazev: "Čokoládová žabka: Hedvika", text: "Harryho věrná sněžná sova, kterou dostal k jedenáctým narozeninám. Je mimořádně inteligentní a dokáže doručit dopis i bez přesného udání adresy.", img: "images/cesta-do-bradavic/zabky/hedwig.jpg" },
            { km: 440, typ: "zabka", nazev: "Čokoládová žabka: Helga z Mrzimoru", text: "Zakladatelka školy, která proslula svým kuchařským uměním. Většina tradičních bradavických receptů, které se vaří na slavnostních hostinách, pochází od ní.", img: "images/cesta-do-bradavic/zabky/helga.jpg" },
            { km: 460, typ: "zabka", nazev: "Čokoládová žabka: Hermiona Grangerová", text: "Nejšílenější knihomol v Bradavicích a nejchytřejší čarodějka svého věku. Její logické uvažování zachránilo Harrymu a Ronovi život víc než stokrát.", img: "images/cesta-do-bradavic/zabky/hermiona.jpg" },
            
            { km: 475, nazev: "Durham", text: "Polovina je za tebou! Durhamská katedrála posloužila pro natáčení bradavických nádvoří a učeben (např. učebna profesorky McGonagallové).", img: "images/cesta-do-bradavic/durham.jpg" },
            
            { km: 485, typ: "zabka", nazev: "Čokoládová žabka: Chloupek", text: "Tříhlavý pes, který hlídal dveře ke Kameni mudrců. Kdo by to byl řekl, že tak obrovskou bestii stačí jen ukolébat k spánku zvukem obyčejné flétny!", img: "images/cesta-do-bradavic/zabky/chloupek.jpg" },
            
            { km: 496, nazev: "Newcastle", text: "Probíháš přes Newcastle. Řeka Tyne tě povede dál na sever. Blížíš se k hranicím Skotska, přituhuje!", img: "images/cesta-do-bradavic/newcastle.jpg" },
            
            { km: 515, typ: "zabka", nazev: "Čokoládová žabka: Klofan", text: "Hrdý a majestátní hipogryf, který vyžaduje od každého úctu a slušnou poklonu. Věděl jsi, že místo ptačího zrní má k snídani mnohem raději čerstvé fretky?", img: "images/cesta-do-bradavic/zabky/klofan.jpg" },
            { km: 530, typ: "zabka", nazev: "Čokoládová žabka: Křivonožka", text: "Hermionin inteligentní kocour je ve skutečnosti křížencem s magickou šelmou maguárem. Dokáže okamžitě rozeznat nespolehlivé osoby nebo maskované animágy.", img: "images/cesta-do-bradavic/zabky/krivonozka.jpg" },
            
            { km: 545, nazev: "Hrad Alnwick", text: "Poznáváš to tu? Hrad Alnwick sloužil pro natáčení exteriérů Bradavic v prvních dvou filmech. Tady se Harry učil létat na koštěti. Ty ale zůstaň nohama pevně na zemi a běž dál!", img: "images/cesta-do-bradavic/alnwick.jpg" },
            
            { km: 560, typ: "zabka", nazev: "Čokoládová žabka: Viktor Krum", text: "Bulharský famfrpálový idol a jeden z nejlepších chytačů na světě. Ačkoliv působí drsně a moc toho nenamluví, je to v hloubi duše velký romantik.", img: "images/cesta-do-bradavic/zabky/krum.jpg" },
            { km: 580, typ: "zabka", nazev: "Čokoládová žabka: Zlatoslav Lockhart", text: "Pětinásobný držitel ceny Týdeníku čarodějek za nejzářivější úsměv. Jeho jedinou skutečnou dovedností ale bylo paměťové zaklínadlo, kterým kradl cizí činy.", img: "images/cesta-do-bradavic/zabky/lockhart.jpg" },
            
            { km: 595, nazev: "Berwick-upon-Tweed", text: "Nejsevernější město Anglie! Cítíš ten chladnější vzduch? Právě překračuješ hranice a oficiálně vstupuješ do Skotska.", img: "images/cesta-do-bradavic/berwick.jpg" },
            
            { km: 615, typ: "zabka", nazev: "Čokoládová žabka: Luna Lovegoodová", text: "Havraspárská studentka, která vidí tvory jako testrály nebo škrkny. I když si o ní mnozí myslí, že je blázen, je mimořádně odvážná a bystrá.", img: "images/cesta-do-bradavic/zabky/luna.jpg" },
            { km: 635, typ: "zabka", nazev: "Čokoládová žabka: Olympe Maxime", text: "Ředitelka francouzské kouzelnické školy v Krásnohůlkách. Ačkoliv to zarputile popírá a tvrdí, že má jen velké kosti, je s největší pravděpodobností poloobryně.", img: "images/cesta-do-bradavic/zabky/maxime.jpg" },
            { km: 655, typ: "zabka", nazev: "Čokoládová žabka: Merlin", text: "Nejslavnější kouzelník všech dob, který prý navštěvoval Bradavice a byl zařazen do Zmijozelu. Dnes se po něm jmenuje nejvyšší kouzelnické vyznamenání.", img: "images/cesta-do-bradavic/zabky/merlin.jpg" },
            { km: 670, typ: "zabka", nazev: "Čokoládová žabka: Minerva McGonagallová", text: "Přísná profesorka přeměňování, která se dokáže proměnit v mourovatou kočku. Nikdy si s ní nezahrávej, pokud nechceš riskovat obří ztrátu kolejních bodů.", img: "images/cesta-do-bradavic/zabky/minerva.jpg" },
            
            { km: 684, nazev: "Edinburgh", text: "Vítej v hlavním městě Skotska a místě, kde J.K. Rowlingová napsala většinu knih o Harrym Potterovi! Tohle město dýchá magií na každém rohu.", img: "images/cesta-do-bradavic/edinburgh.jpg" },
            
            { km: 700, typ: "zabka", nazev: "Čokoládová žabka: Molly Weasleyová", text: "Milující matka, jejíž vánoční pletené svetry jsou legendární. Pod jejím láskyplným úsměvem se ale skrývá nesmírně mocná a bojovná čarodějka.", img: "images/cesta-do-bradavic/zabky/molly.jpg" },
            { km: 720, typ: "zabka", nazev: "Čokoládová žabka: Nagini", text: "Voldemortův milovaný had, se kterým dokázal mluvit pomocí hadího jazyka. Její tělo sloužilo jako jeden z posledních temných viteálů.", img: "images/cesta-do-bradavic/zabky/nagini.jpg" },
            { km: 740, typ: "zabka", nazev: "Čokoládová žabka: Neville Longbottom", text: "Na první pohled zapomnětlivý kluk, který se bál i vlastního stínu. Postupem času ale našel neuvěřitelnou odvahu a vytáhl Godricův meč z Moudrého klobouku.", img: "images/cesta-do-bradavic/zabky/neville.jpg" },
            { km: 760, typ: "zabka", nazev: "Čokoládová žabka: Percy Weasley", text: "Nejambicióznější z rodiny Weasleyových, který nade vše miloval tloušťku kotlíkových den. Získal post Primuse a snil o tom, že se stane ministrem.", img: "images/cesta-do-bradavic/zabky/percy.jpg" },
            
            { km: 780, nazev: "Stirling", text: "Míjíš historický Stirling. Odsud už tě čeká ta pravá, divoká skotská vysočina (Highlands). Připrav se na kopečky!", img: "images/cesta-do-bradavic/stirling.jpg" },
            
            { km: 800, typ: "zabka", nazev: "Čokoládová žabka: Prašivka", text: "Dvanáct let žila jako obyčejná a nudná krysa u Weasleyových. Nikdo netušil, že se v ní ve skutečnosti skrývá zrádný zvěromág Peter Pettigrew.", img: "images/cesta-do-bradavic/zabky/prasivka.jpg" },
            { km: 820, typ: "zabka", nazev: "Čokoládová žabka: Profesor Quirrell", text: "Koktající profesor s fialovým turbanem na hlavě, který se bál i vlastních studentů. Jeho cesty za poznáním do Albánie se mu staly doslova osudnými.", img: "images/cesta-do-bradavic/zabky/quirrell.jpg" },
            { km: 840, typ: "zabka", nazev: "Čokoládová žabka: Regulus Black", text: "Mladší bratr Siriuse, který se původně dal ke Smrtijedům. Nakonec prozřel a obětoval svůj život, aby vyměnil jeden z Voldemortových viteálů.", img: "images/cesta-do-bradavic/zabky/regulus.jpg" },
            { km: 855, typ: "zabka", nazev: "Čokoládová žabka: Ron Weasley", text: "Harryho nejlepší kamarád, který trpí arachnofobií. Ačkoliv někdy bojuje se stíny svých sourozenců, ve statečnosti a čarodějných šachách exceluje.", img: "images/cesta-do-bradavic/zabky/ron.jpg" },
            
            { km: 870, nazev: "Crianlarich", text: "Křižovatka skotské vysočiny. Jsi obklopený horami a jezery. Magie v ovzduší houstne, cíl se blíží!", img: "images/cesta-do-bradavic/crianlarich.jpg" },
            
            { km: 885, typ: "zabka", nazev: "Čokoládová žabka: Rowena z Havraspáru", text: "Zakladatelka bradavické koleje, která si cenila intelektu nade vše. Její legendární ztracený diadém měl prý nositeli přinést ohromnou moudrost.", img: "images/cesta-do-bradavic/zabky/rowena.jpg" },
            { km: 900, typ: "zabka", nazev: "Čokoládová žabka: Salazar Zmijozel", text: "Zakladatel školy, který tvrdil, že magie by měla patřit pouze čistokrevným. Po neshodách Bradavice opustil, ale zanechal po sobě Komnatu nejvyššího tajemství.", img: "images/cesta-do-bradavic/zabky/salazar.jpg" },
            
            { km: 910, nazev: "Glencoe", text: "Zataj dech. Běžíš epickým údolím Glencoe. Tady stála Hagridova bouda a točily se tu úchvatné záběry z Vězně z Azkabanu. Posledních pár kilometrů!", img: "images/cesta-do-bradavic/glencoe.jpg" },
            
            { km: 925, typ: "zabka", nazev: "Čokoládová žabka: Sirius Black", text: "Harryho kmotr, který na sebe jako neregistrovaný zvěromág dokázal vzít podobu velkého psa. Strávil dvanáct let v Azkabanu za zločin, který nespáchal.", img: "images/cesta-do-bradavic/zabky/sirius.jpg" },
            { km: 940, typ: "zabka", nazev: "Čokoládová žabka: Severus Snape", text: "Mistr lektvarů, jehož složitá povaha skrývala největší oběť v kouzelnickém světě. Jeho Patronem byla stříbrná laň, úplně stejná, jakou měla Lily Potterová.", img: "images/cesta-do-bradavic/zabky/snape.jpg" },
            
            { km: 950, nazev: "Glenfinnan Viaduct", text: "Slyšíš to houkání? Právě běžíš pod slavným viaduktem, přes který jezdí Bradavický expres! Most má 21 oblouků a za ním už tě čeká jen cíl.", img: "images/cesta-do-bradavic/glenfinnan.jpg" },
            
            { km: 965, typ: "zabka", nazev: "Čokoládová žabka: Sybilla Trelawneyová", text: "Profesorka jasnovidectví, jejíž předpovědi znějí často jako nesmysly. Přesto nevědomky pronesla věštby, které navždy změnily dějiny kouzelnického světa.", img: "images/cesta-do-bradavic/zabky/sybilla.jpg" },
            { km: 980, typ: "zabka", nazev: "Čokoládová žabka: Tesák", text: "Hagridův obří pes, který je ale ve skutečnosti neuvěřitelný zbabělec. Při sebemenším náznaku nebezpečí vezme okamžitě do zaječích.", img: "images/cesta-do-bradavic/zabky/tesak.jpg" },
            { km: 995, typ: "zabka", nazev: "Čokoládová žabka: Voldemort", text: "Temný pán, jehož jméno se kdysi nesmělo ani vyslovit. Rozdělil svou duši do viteálů v zoufalé snaze dosáhnout nesmrtelnosti, což se mu nakonec stalo osudným.", img: "images/cesta-do-bradavic/zabky/voldemort.jpg" },
            
            { km: 1010, nazev: "Loch Shiel (Bradavice)", text: "DOKÁZAL JSI TO! Stojíš na břehu jezera Loch Shiel, které představovalo Černé jezero. V dálce už vidíš tyčit se bradavický hrad. 1010 kilometrů plných magie je za tebou!", img: "images/cesta-do-bradavic/loch-shiel.jpg" }
        ]
    },

    "dark-portal": {
        nazev: "Ze Stormwindu k Dark Portalu",
        celkoveKm: 116,
        tridaPozadi: "pozadi-wow",        
        tridaMapy: "mapa-wow",            
        mapaImg: "images/dark-portal/wow-map.png", // zkontroluj koncovku .jpg/.png
        svgViewBox: "0 0 1219 1173", // DOPLŇ SVÁ ČÍSLA
        svgPath: "M 298 95 L 341 146 L 372 158 L 389 199 L 461 223 L 513 187 L 552 168 L 542 115 L 572 89 L 606 101 L 620 139 L 620 191 L 640 227 L 576 224 L 558 212 L 535 230 L 468 255 L 379 265 L 347 239 L 316 246 L 276 243 L 232 271 L 220 288 L 169 305 L 147 299 L 106 340 L 120 375 L 142 415 L 149 448 L 203 452 L 226 447 L 221 411 L 236 371 L 227 335 L 228 303 L 291 305 L 317 338 L 404 332 L 448 306 L 504 286 L 561 300 L 604 302 L 652 299 L 723 246 L 760 217 L 806 195 L 814 142 L 852 115 L 874 90 L 883 130 L 938 130 L 958 157 L 972 133 L 1009 135 L 1028 168 L 1031 204 L 984 232 L 926 233 L 905 216 L 840 227 L 787 230 L 752 208 L 728 214 L 680 227 L 656 267 L 600 328 L 590 360 L 611 383 L 648 372 L 604 396 L 600 417 L 574 427 L 530 437 L 512 455 L 480 447 L 474 395 L 465 439 L 415 420 L 387 411 L 360 370 L 333 367 L 330 427 L 359 478 L 384 439 L 422 437 L 459 453 L 463 515 L 454 531 L 456 557 L 410 599 L 389 573 L 339 581 L 287 585 L 301 611 L 334 633 L 413 630 L 442 666 L 488 666 L 505 689 L 504 709 L 477 721 L 471 771 L 444 798 L 428 855 L 396 862 L 365 862 L 381 883 L 382 923 L 362 953 L 352 979 L 354 1027 L 347 1046 L 323 1043 L 315 1066 L 340 1057 L 385 1065 L 353 1107 L 384 1059 L 331 1053 L 350 1031 L 348 985 L 387 930 L 388 875 L 409 856 L 442 853 L 452 803 L 470 720 L 550 717 L 550 674 L 545 642 L 567 622 L 544 580 L 467 547 L 452 527 L 470 487 L 516 483 L 555 442 L 601 389 L 667 381 L 710 380 L 740 370 L 780 368 L 806 364 L 832 346 L 868 340 L 896 338 L 908 313 L 953 312 L 977 314 L 996 279 L 1012 279 L 1042 266 L 1061 266 L 1093 246 L 1127 260 L 1144 280 L 1155 311 L 1156 352 L 1158 386 L 1135 410 L 1105 412 L 1068 391 L 1038 364 L 992 359 L 952 359 L 951 371 L 956 395 L 944 416 L 940 442 L 936 470 L 900 451 L 904 480 L 898 509 L 894 540 L 927 534 L 967 510 L 1000 497 L 1016 514 L 1016 545 L 991 559 L 972 571 L 986 614",
        mapaSirka: 1219,              
        mapaVyska: 1173,              
        povolitZoom: true,             
        panacekHtml: "⚔️",
        seznamMist: [
            { 
                km: 0.1, 
                nazev: "Brány Stormwindu", 
                text: "Tvoje epická cesta začíná. Za zády necháváš monumentální sochy ve Valley of Heroes a v uších ti zní ta nejikoničtější hudba z celého Azerothu. Čas vyrazit expit!", 
                img: "images/dark-portal/stormwind.jpg" 
            },
            { 
                km: 2.1, 
                nazev: "Goldshire", 
                text: "Slavný hostinec Lion's Pride Inn. Venku se neustále někdo dueluje a uvnitř to žije. Jen radši nechoď do patra, občas se tam zjevují podivné, děsivé děti v pentagramu...", 
                img: "images/dark-portal/goldshire.jpg" 
            },
            { 
                km: 22, 
                nazev: "Sentinel Hill", 
                text: "Vstupuješ do Westfallu. Zlatá pole drancují zbláznění žací golemové a v Deadmines se skrývá Bratrstvo Defias pod vedením Edwina VanCleefa. Nenech se chytit!", 
                img: "images/dark-portal/westfall.jpg" 
            },
            { 
                km: 33.5, 
                nazev: "Lakeshire", 
                text: "Přejdi slavný (a věčně rozbitý) most přes jezero Everstill. Okolo se to hemží orky z klanu Blackrock. Možná tu někde narazíš i na legendárního Johna J. Keeshana.", 
                img: "images/dark-portal/redridge.jpg" 
            },
            { 
                km: 47.9, 
                nazev: "Darkshire", 
                text: "Duskwood. Slunce tu nesvítí, z lesa vyjí worgeni a na hřbitově straší nemrtvý Morladim. Hlavně se nepoflakuj na cestě, občas tu hlídkuje obří abominace Stitches!", 
                img: "images/dark-portal/duskwood.jpg" 
            },
            { 
                km: 60.5, 
                nazev: "Stranglethorn Vale", 
                text: "Vítej v džungli! Raptoři, panteři a maskovaní trollové na každém kroku. Z dálky slyšíš, jak Hemet Nesingwary pořádá své lovecké výpravy. A nezapomeň sbírat ztracené stránky do knihy!", 
                img: "images/dark-portal/stv.jpg" 
            },
            { 
                km: 71.69, 
                nazev: "Gurubashi Arena", 
                text: "Vstupuješ do slavné krvavé arény, kde neplatí žádná pravidla. Aliance nebo Horda, tady jde každý po každém! Každé tři hodiny se uprostřed objeví truhla s pokladem. Troufneš si pro ni?", 
                img: "images/dark-portal/gurubashi.jpg" 
            },
            { 
                km: 75.6, 
                nazev: "Booty Bay", 
                text: "Neutrální město pirátů a pašeráků, kterému vládne goblinský Baron Revilgaz. Nádherný výhled na moře a klidná zóna... dokud nezaútočíš na jiného hráče a nesesypou se na tebe drsné stráže!", 
                img: "images/dark-portal/booty.jpg" 
            },
            { 
                km: 88, 
                nazev: "Zul'Gurub", 
                text: "Zříceniny obrovského města prastarých trollů. Kdysi se tady ozývalo volání Krvavého boha Hakkara a hrdinové tu trávili týdny, aby získali bájného tygra nebo raptora. Atmosféra tu dodnes nahání husí kůži.", 
                img: "images/dark-portal/zulgurub.jpg" 
            },
            { 
                km: 95.6, 
                nazev: "Deadwind Pass", 
                text: "Z džungle jsi uhnul do mrtvého průsmyku. Všude jsou jen uschlé stromy, supi a hutná magická energie. Vysoko nad tebou se tyčí Karazhan, věž samotného Strážce Medivha. Jen proběhni a nezastavuj.", 
                img: "images/dark-portal/karazhan.jpg" 
            },
            { 
                km: 98, 
                nazev: "Swamp of Sorrows", 
                text: "Bahno, žáby a nekonečné zástupy Murloců (Mrglrlrlrmgrl!). Hluboko v bažinách leží potopený Temple of Atal'Hakkar, domov zelených draků. Vzduch tu začíná být pořádně těžký.", 
                img: "images/dark-portal/swamp.jpg" 
            },
            { 
                km: 109, 
                nazev: "Blasted Lands", 
                text: "Země spálená na troud. Nebe získalo zlověstný rudý odstín, z trhlin šlehá fel magie a všude pobíhají obří démoni. Sem se odvažují jen ti nejsilnější.", 
                img: "images/dark-portal/blasted.jpg" 
            },
            { 
                km: 116, 
                nazev: "The Dark Portal", 
                text: "Dokázal jsi to! Dosáhl jsi potřebného levelu a stojíš před gigantickým Temným portálem, který propojuje Azeroth s Outlandem. Jsi připraven? (Protože Illidan tvrdí, že nejsi!). Klobouk dolů!", 
                img: "images/dark-portal/darkportal.jpg" 
            }
        ]
    },

    "prasinky": {
        nazev: "Z Bradavic do Prasinek",
        celkoveKm: 16,
        tridaPozadi: "pozadi-prasinky",      
        tridaMapy: "mapa-prasinky",          
        mapaImg: "images/bradavice-prasinky/hogwarts2.jpg",
        svgViewBox: "0 0 837 1252",        
        svgPath: "M 566 295 L 625 343 L 632 377 L 518 453 L 505 490 L 544 509 L 613 513 L 592 556 L 529 590 L 453 628 L 442 642 L 392 660 L 397 682 L 481 707 L 489 777 L 437 804 L 380 840 L 321 899 L 257 851 L 264 811 L 237 782 L 205 783 L 169 809 L 67 894 L 72 927 L 158 894 L 200 869 L 284 923 L 312 986 L 317 1011 L 405 963 L 462 997 L 499 1025 L 579 1056 L 619 1010 L 533 711 L 649 686 L 677 638 L 687 585 L 597 550 L 509 492 L 517 455 L 634 378 L 613 333 L 570 300",
        mapaSirka: 837, 
        mapaVyska: 1252,
        povolitZoom: false,               
        panacekHtml: "🧙‍♂️",
        seznamMist: [
            { 
                km: 0.3, 
                nazev: "Hagridova bouda", 
                text: "Přebrodil ses zasněženými školními pozemky k Hagridovu srubu. Zastávka na skleničku čaje a ty nejtvrdší koláčky, co si kdy vyzkoušel. Nezapomeň taky pohladit Tesáka!", 
                img: "images/bradavice-prasinky/hagrid.jpg" 
            },
            { 
                km: 1.2, 
                nazev: "Skleníky", 
                text: "Běž prosím potichu dál, protože tady zrovna dřímají Mandragory a jestli je vzbudíš - no řekněme, že probudit obraz Siriusovi drahé maminky je oproti tomu příjemná kratochvíle.", 
                img: "images/bradavice-prasinky/skleniky.jpg" 
            },
            { 
                km: 2, 
                nazev: "Na Famfrpál!", 
                text: "Zastávka na Famfrpál! Hraje Nebelvír proti Zmijozelu! Zrovna je ale sněhová bouře a tak to vypadá, že zápas bude trvat ještě pěkně dlouho. Ty tady zmrznout nechceš, takže sis vsadil u Freda a George galeon na Nebelvír.", 
                img: "images/bradavice-prasinky/famfrpal.jpg" 
            },
            { 
                km: 4, 
                nazev: "Vrba Mlátička", 
                text: "Vrbu nech Vrbou a radši se hezky rychle kliď z cesty. Má to být přece procházka a ne boj o život! Možná se tu zastavíš na cestě zpátky...", 
                img: "images/bradavice-prasinky/vrba.jpg" 
            },
            { 
                km: 5, 
                nazev: "Prasinky", 
                text: "A seš v Prasinkách! Věděl jsi, že je to jediná čistě kouzelnická vesnice v celé Británii? Ne? Tak teď už to víš!. Po cestě jsi pěkně zmrznul, pojdme se vydat na návštěvu ke Třem Košťatům!", 
                img: "images/bradavice-prasinky/prasinky.jpg" 
            },
            { 
                km: 6, 
                nazev: "U Tří Košťat", 
                text: "Hned při vstupu tě vítá madam Rosmerta a už čepuje máslový ležák. Je to útulné místo s dřevěným nábytkem a velkým hořícím krbem. Odpočiň si po cestě z Bradavic, dej si jeden dva ležáky a nasaj atmosféru!", 
                img: "images/bradavice-prasinky/tri-kostata.jpg" 
            },
            { 
                km: 6.3, 
                nazev: "U Prasečí hlavy", 
                text: "Podivné vzezření podivné hospody s podivnými lidmi uvnitř. Dnes ale nemáš za lubem žádné lumpárny a tak tě sem nic netáhne. Hostinský vypadá nějak povědomě.", 
                img: "images/bradavice-prasinky/praseci-hlava.jpg" 
            },
            { 
                km: 7, 
                nazev: "Medový ráj", 
                text: "Sen každého milovníka sladkostí, vítej v Medovém Ráji! Tady je ten pravý humbuk, vypadá to, jakoby se sem nasáčkovala půlka hradu. Koupil sis pár krvavých lízátek a jedny Bertíkovy fazolky tisíckrát jinak. Jaká bude tvoje příchuť?", 
                img: "images/bradavice-prasinky/medovy-raj.jpg" 
            },
            { 
                km: 7.5, 
                nazev: "Soví pošta", 
                text: "Duležitý komunikační uzel. Vyber si sovu podle toho, jak rychle chceš poslat svůj dopis, zaplať a nech ji doručit svůj dopis. Dnes se tu ale jen zastavíš a prohlédneš si, jak si spokojeně houkají a čekají na dopis, který budou moci odnést!", 
                img: "images/bradavice-prasinky/sovi-posta.jpg" 
            },
            { 
                km: 10.5, 
                nazev: "Chroptící Chýše", 
                text: "Nejstrašidelnější budova v prasinkách a možná i v celé Británii! Ve skutečnosti za všechno mohl Remus Lupin, který zde našel útočiště pro své proměny ve vlkodlaka. Je zde taky tajný vchod k Vrbě mlátičce a ten využijeme! Už jsi zmrzlý dost a aspoň kousek se vyhneš vánici tam venku.", 
                img: "images/bradavice-prasinky/chroptici-chyse-background.jpg" 
            },
            { 
                km: 12.4, 
                nazev: "Vrba Mlátička", 
                text: "Zatáhni za tajný suk a jsi venku! A bez škrábnutí. Dostat se směrem z tajného vchodu tohoto mírumilovného stromu je o poznání snažší, než dovnitř.", 
                img: "images/bradavice-prasinky/vrba2.jpg" 
            },
            { 
                km: 13.4, 
                nazev: "Zapovězený les", 
                text: "Neboj se, do lesa dnes nejdeme! Počasí se trochu umoudřilo a sníh se jen pozvolna snáší k zemi. Rozhodl ses tedy pozdravit kentaura Firenzeho a jdeš se podívat, jak dopadl Famfrpál.", 
                img: "images/bradavice-prasinky/les.jpg" 
            },
            { 
                km: 13.9, 
                nazev: "Famfrpálové hřiště", 
                text: "Nebelvír naštěstí zvítězil a tak si zdvojnásobil svůj počet galeonů! Při vánici zmijozelští nepříjemně faulovali bez povšimnutí, ale Harrymu se naštěstí podařilo chytit zlatonku díky Vrónského fintě!", 
                img: "images/bradavice-prasinky/famfrpal2.jpg" 
            },
            { 
                km: 16, 
                nazev: "Bradavice", 
                text: "Oklepal si sníh z bot a došel do vstupní síně v Bradavicích, už se těšíš na vyhřátou společenskou místnost. Procházka to byla super, ale doma je doma! Naviděnou příště.", 
                img: "images/bradavice-prasinky/bradavice.jpg" 
            },
        ]
    },
}

