// Initialize and add the map
      function initMap() {
        // The location of Uluru
        const sakhir = { lat: 26.03, lng: 50.51 };
        const hungaroring = { lat: 47.581, lng: 19.25 };
        const imola = { lat: 44.344, lng: 11.714 };
        const portimao = { lat: 37.231, lng: -8.628 };
        const catalunya = { lat: 41.568, lng: 2.256 };
        const monteCarlo = { lat: 43.735, lng: 7.421 };
        const baku = { lat: 40.372, lng: 49.853 };
        const paulRicard = { lat: 43.252, lng: 5.79 };
        const rbr = { lat: 47.22, lng: 14.764 };
        const silverstone = { lat: 52.072, lng: -1.014 };
        const zandvoort = { lat: 52.389, lng: 4.541 };
        const monza = { lat: 45.619, lng: 9.284 };
        const sochi = { lat: 43.409, lng: 39.968 };
        const istanbul = { lat: 40.955, lng: 29.409 };
        const austin = { lat: 30.133, lng: -97.637 };
        const ciudad = { lat: 19.405, lng: -99.093 };
        const interlagos = { lat: -23.702, lng: -46.699 };
        const jeddah = { lat: 21.632, lng: 39.104 };
        const yasMarina = { lat: 24.469, lng: 54.605 };
        const losail = { lat: 25.487, lng: 51.451 };
        const spa = { lat: 50.437, lng: 5.971 };


        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 2,
          center: hungaroring,
        });

        const bahrein = new google.maps.Marker({
          position: sakhir,
          map: map,
          title: "Bahrain",
        });

        const bahreinInfo ="The Bahrain Grand Prix, currently officially known as the Gulf Air Bahrain Grand Prix for sponsorship reasons, is a Formula One motor racing event in Bahrain. The first race took place at the Bahrain International Circuit on 4 April 2004. It made history as the first Formula One Grand Prix to be held in the Middle East, and was given the award for the 'Best Organised Grand Prix' by the FIA. The race has usually been the third race of the Formula One calendar. However, in the 2006 season, Bahrain swapped places with the traditional opener, the Australian Grand Prix, which was pushed back to avoid a clash with the Commonwealth Games. In 2010, Bahrain staged the opening race of the 2010 season and the cars drove the full 6.299 km (3.914 mi) 'Endurance Circuit' to celebrate F1's 'diamond jubilee'. In 2021, the Bahrain Grand Prix was the season opener again due to the 2021 Australian Grand Prix having to be postponed due to the COVID-19 pandemic."
        
        


        bahrein.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Bahrain International"
            document.getElementById("track-image").src = "https://motorsportguides.com/wp-content/uploads/2019/02/bahrain-international-circuit-aerial.jpeg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=bahreinInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Bahrain_Circuit.png.transform/9col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp5.412 km <br>Laps:&nbsp57 <br>Lap Record:&nbsp1:31.447 Pedro de la Rosa(2005)"
            document.getElementById("track-name").scrollIntoView()
        });

        const hungary = new google.maps.Marker({
          position: hungaroring,
          map: map,
          title: "Hungaroring",
        });

        const hungaryInfo = "The Hungaroring is a motorsport racetrack in Mogyoród, Hungary where the Formula One Hungarian Grand Prix is held. In 1986, it became the location of the first Formula One Grand Prix behind the Iron Curtain. Bernie Ecclestone wanted a race in the USSR, but a Hungarian friend recommended Budapest. The Hungaroring, situated in the small village of Mogyoród, Hungary, has proudly hosted Formula 1's Hungarian Grand Prix since 1986.This tight and twisty 2.72-mile circuit earns its nickname of 'Monaco without the buildings', and as a result overtaking is quite difficult, but spectacular when a driver pulls it off. <br> <br>Formula 1 holds the Hungarian Grand Prix during the middle of summer, and that only adds to the unique character of this venue.Usually a track becomes faster over the race weekend as it's 'rubbered in'. But this doesn't always happen at the Hungaroring because of how dry and dusty the region is during that time of the year.In fact, it took until 2006 for us to see the first wet Hungarian Grand Prix.The current track has 14 corners. Turn 4 is named after Nigel Mansell due to him famously losing a wheel there during the 1987 event, while Turn 11 is named after Jean Alesi due to the big crash he had at that curve during qualifying for the 1995 Hungarian Grand Prix. According to a survey put together by the national tourism office of Hungary, Mogyoród ranks third among Hungarian destinations visited by tourists, behind the Danube Bend area and Lake Balaton, but ahead of Budapest. The circuit has FIA Grade 1 license."


        hungary.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Hungaroring"
            document.getElementById("track-image").src = "https://hungarytoday.hu/wp-content/uploads/2017/07/hungaroring-track-jo.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=hungaryInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png.transform/7col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp4.381 km <br>Laps:&nbsp70 <br>Lap Record:&nbsp1:16.627 Lewis Hamilton(2020)"
            document.getElementById("track-name").scrollIntoView()
        });

        const belgium = new google.maps.Marker({
          position: spa,
          map: map,
          title: "Spa-Francorchamps"
        });

        const belgiumInfo = "The Circuit de Spa-Francorchamps is one of the most iconic race tracks on the Formula 1 calendar. Based in the small municipality of Stavelot, this track has hosted almost every Belgian Grand Prix since 1983, missing only 1984, 2003 and 2006.Throughout its history Spa has undergone several design changes, but by far the most notable was in 1979 when it was cut from a 8.76-mile circuit to its current length of 4.32 miles. In the process this track went from using public roads to becoming a permanent racing facility with 20 corners.<br><br>Spa is seen as one of the ultimate tests of a driver. In particular the Eau Rouge and Raidillon corner combination is one of the most spectacular sights in Formula 1, especially when the cars are launched through there at full throttle.And as if the circuit itself wasn't difficult enough, Spa has a habit of producing very unpredictable weather. Sometimes it can be raining at one part of the circuit, but dry and sunny at another part.Spa's current contract to host the Belgian Grand Prix runs until the end of 2021."


        belgium.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Spa-Francorchamps"
            document.getElementById("track-image").src = "https://www.spa-francorchamps.be/sites/default/files/image/thumbnail_2020circuitaerien_paysage.jpeg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=belgiumInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Belgium_Circuit.png.transform/7col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp7.004 km <br>Laps:&nbsp44 <br>Lap Record:&nbsp1:46.286 Valtteri Bottas(2018)"
            document.getElementById("track-name").scrollIntoView()
        });

        const italy1 = new google.maps.Marker({
          position: imola,
          map: map,
          title:"Imola"
        });

        const imolaInfo = "The Emilia Romagna Grand Prix was a new name on the Formula 1 calendar in 2020, but its host track has a long history in the sport.The Autodromo Internazionale Enzo e Dino Ferrari, more commonly known as Imola, is a 3.050-mile track, consisting of 17 turns based in the Italian town of Imola, 25 miles east of Bologna.As for where the race gets its name from, well simply Emilia Romagna is the region that the track is based in.Unlike most major international circuits Imola runs in an anti-clockwise direction, with its official name designed as a tribute to Ferrari's founder Enzo Ferrari, and his son Alfredo Ferrari who died in 1956 at the age of 24.<br><br>It's no surprise then that in previous visits to the circuit Ferrari fans have flooded through the gates for their home race.Imola played host to the 1980 Italian Grand Prix, and then the San Marino Grand Prix from 1981 to 2006.The track has undergone several alterations over the years, with the current layout being in place since 2008.2020 was the first F1 race to take place on the new layout and it is scheduled to return on the second race weekend of the 2021 calendar.<br><br>It is a much safer circuit in modern times and holds an FIA Grade One licence. Sadly Imola will always remembered for the death of Ayrton Senna in 1994 when he crashed at the Tamburello corner which after that tragedy was never driven flat out again. Instead, it was reduced to a 4th gear left-right sweeper, and a gravel trap was added to the limited space on the outside of the corner.Roland Ratzenberger had also died the day before in qualifying after a sickening high-speed crash at the Villeneuve corner. That was also reduced to a 4th-gear bend with gravel added around the outside."


        italy1.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Imola"
            document.getElementById("track-image").src = "https://www.formula1.com/content/dam/fom-website/manual/Misc/2020/New-Races/DJI_0560.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=imolaInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Emilia_Romagna_Circuit.png.transform/7col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp4.959 km <br>Laps:&nbsp53 <br>Lap Record:&nbsp1:15.484 Lewis Hamilton(2020)"
            document.getElementById("track-name").scrollIntoView()
        });

        const portugal = new google.maps.Marker({
          position: portimao,
          map: map,
          title:"Portimao"
        });

        const portugalInfo = "The Portuguese Grand Prix will return to the Formula 1 calendar in 2021 as the Algarve International Circuit in Portimao hosts only its second race in the sport. Its inaugural race came in 2020 after it was drafted in to the schedule as part of the reshuffle amid the coronavirus outbreak. When the 2021 provisional calendar was released, Portugal was absent but it was announced in February that it would again form part of the schedule, slotting into the third race weekend of the season. Based in the town of Portimao, Faro in southern Portugal, this 2.915-mile track, featuring 14 turns, was part of a €195 million project which also includes a karting track, technology park, five-star hotel, sports complex and apartments.<br><br>Construction of the circuit was completed in October 2008 and it was homologated by the FIA on October 13. Then, some twelve years later, the Algarve International Circuit finally made its Formula 1 debut. The track, which draws comparisons to Spa and the old Nurburgring due to its constantly undulating nature, did host a test for a group of F1 teams in 2009. Of course 2020 was not the first time that Formula 1 has contested a Portuguese Grand Prix, far from it. The first Portuguese Grand Prix was held all the way back in 1951, with Estoril staging the most recent event in 1996 with Jacques Villeneuve emerging victorious. The legendary Ayrton Senna won his first Formula 1 race at the 1985 Portuguese Grand Prix in what was a wet-weather masterclass around the Estoril circuit."


        portugal.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Algarve International"
            document.getElementById("track-image").src = "https://e0.365dm.com/20/10/2048x1152/skysports-portimao-portugal_5143652.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=portugalInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Portugal_Circuit.png.transform/7col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 4.684 km <br>Laps:&nbsp66 <br>Lap Record:&nbsp1:18.750 Lewis Hamilton(2020)"
            document.getElementById("track-name").scrollIntoView()
        });

        const spain = new google.maps.Marker({
          position: catalunya,
          map: map,
          title:"Catalunya"
        });

        const spainInfo = "Pedralbes, Jarama, Montjuic and Jerez were the first initial venues to host the Spanish Grand Prix as part of an official Formula 1 World Championship but, the Circuit de Catalunya has been the sole home of Formula 1 racing ever since 1991. The Circuit de Catalunya is located just outside of Barcelona and is a purpose-built track used across a huge range of racing disciplines. MotoGP and the FIA World Rallycross Championship are two of the other most high-profile series to race here and it was also used as a venue for the 1992 Olympics.It is widely regarded as an excellent all-rounder, with the track characteristics putting both the power and aerodynamic efficiency of Formula 1 cars under scrutiny with a mixture of high-speed sections and a tricky technical section. <br><br>It is one of the predominant reasons why pre-season testing also takes place at the Circuit de Catalunya.Given the track's long-standing history with Formula 1, there are plenty of tales to be told that involve this historic venue. There were doubts over whether the race would be a part of the 2020 and 2021 campaign, but deals for both were agreed, though there are no current plans announced for its future. The Circuit de Catalunya features 16 corners and comes in at 4.655km long in distance. The venue represents home races for two-time World Champion Fernando Alonso and Carlos Sainz."


        spain.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Circuit De Catalunya"
            document.getElementById("track-image").src = "https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/31444-Circuit_de_Barcelona-Catalunya_F1_Experiences-a63f398b216c5d083c19a757a896255f.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=spainInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png.transform/7col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 4.655 km <br>Laps:&nbsp66 <br>Lap Record:&nbsp1:18.149 Max Verstappen(2021)"
            document.getElementById("track-name").scrollIntoView()
        });


        const monaco = new google.maps.Marker({
          position: monteCarlo,
          map: map,
        });

        const monacoInfo = "Arguably the most iconic stop on the Formula 1 calendar, the Monaco Grand Prix around the streets of Monte Carlo has been a staple of the Formula 1 calendar since 1950, and missing one race since 1954 due to the global outbreak of COVID-19in 2020. Featuring 19 turns this street circuit is 2.074 miles of pure adrenaline as drivers must thread their cars with precision through the tight bends. <br><br>Over the years we have seen many of occasions where judgement is out by just that fraction, with the end result commonly being race-ending damage. Alongside the Indianapolis 500 and 24 Hours of Le Mans, the Monaco Grand Prix forms what is known as the 'Triple Crown' of motorsport, an achievement two-time Formula 1 World Champion Fernando Alonso has been chasing for years. It's a good job that this event survives through the sheer spectacle of it, because when it comes to racing, overtaking is rarely seen. When an overtake is launched, it commonly involves the banging of wheels.For several drivers Monte Carlo is also a race around the area they call home."


        monaco.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Circuit De Monaco"
            document.getElementById("track-image").src = "https://media.gq-magazine.co.uk/photos/60a5163572e426530a83d163/master/pass/190521_AlexAlbon_HP.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=monacoInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Monoco_Circuit.png.transform/5col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 3.337 km <br>Laps:&nbsp78 <br>Lap Record:&nbsp1:12.909 Hamilton(2021)"
            document.getElementById("track-name").scrollIntoView()
        });

        const azerbaijan = new google.maps.Marker({
          position: baku,
          map: map,
        });

        const azerbaijanInfo = "Described as one of the fastest races on the Formula 1 calendar, Baku has quickly established itself as a favourite among drivers and fans alike. The street circuit only hosted its first race in 2016, then known as the European Grand Prix, but as of the following year it became the Azerbaijan Grand Prix and it has taken its place on the calendar ever since, until its cancellation in 2020 due to the COVID-19 outbreak. 2021 will see its return, though. <br><br>As one of the longest tracks on the calendar, with a length of 6.003km and 20 turns, Baku offers just about everything you want from a circuit, with a mixture of tight corners and open high-speed straights, including a 2.2km stretch heading into Turn 1. Drivers get to experience the historic city's character as they make their way through the medieval centre of Baku, navigating their way anti-clockwise around the track, alongside the promenade of the Caspian Sea. With harsh braking points and blind corners, drivers need to be on full alert as this track has very little room for error. Despite the race still being very much in its infancy, it has not been short of action in its four years in Formula 1. Supporters will be delighted at the prospect of seeing it return in 2021."


        azerbaijan.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Baku City Circuit"
            document.getElementById("track-image").src = "https://caspiannews.com/media/caspian_news/all_original_photos/1512994271_8972282_1512994066_7379339405773552.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=azerbaijanInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Baku_Circuit.png.transform/5col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 6.003 km <br>Laps:&nbsp51 <br>Lap Record:&nbsp1:43.009 Charles Leclerc(2019)"
            document.getElementById("track-name").scrollIntoView()
        });

        const france = new google.maps.Marker({
          position: paulRicard,
          map: map,
        });

        const franceInfo = "The French Grand Prix makes its return on the eighth race weekend of the 2021 season after being one of many races in the 2020 calendar to be cancelled due to COVID-19. Circuit Paul Ricard, opened in 1970, is no stranger to Formula 1 but, until 2018, it had not been used as a grand prix venue since Alain Prost’s victory back in 1990. The revamped circuit has FIA Grade 1 listing but in order to achieve that it had to comply with the rules, meaning Formula 1 cars race on the 5.8km version of the track that features a chicane on the north side of the Mistral Straight. <br><br>Circuit Paul Ricard is located in the small commune of Le Castellet in South East France. The population is just under 4,000 and the village is surrounded by vineyards. On six occasions (1971, 1975, 1976, 1978, 1980 and 1989) the winner at Paul Ricard went on to win the World Championship in the same year. In fact, Ronnie Peterson (1973 and 1974) and René Arnoux (1982) are the only drivers to win at Paul Ricard who never won the World Championship. There are a variety of layouts which can be used at Circuit Paul Ricard, but since its return to the F1 calendar in 2018 there have been many critics regarding the quality of racing at the track, none more so than in 2019. Current managing director of the French Grand Prix Éric Boullier confirmed that changes to the layout are coming. Circuit Paul Ricard currently holds a contract to host the French Grand Prix until at least 2022."


        france.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Circuit Paul Ricard"
            document.getElementById("track-image").src = "https://www.bandoltourisme.fr/wp-content/uploads/2021/05/Sans-titre-2-1200x675.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=franceInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/France_Circuit.png.transform/5col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 5.842 km <br>Laps:&nbsp53 <br>Lap Record:&nbsp1:32.740 Sebastian Vettel(2019)"
            document.getElementById("track-name").scrollIntoView()
        });

        const austria = new google.maps.Marker({
          position: rbr,
          map: map,
        });

        const austriaInfo = "The Österreichringhe, the home of the Austrian Grand Prix, became a staple of the Formula 1 calendar in 1970. It ran until 1987 and was then absent for a decade before returning until 2003. Another 10-year absence followed and, having been bought and rebuilt by Red Bull, it returned to the calendar in 2014. The Red Bull Ring, as it's now known, is located in the small city of Spielberg, surrounded by the Styrian mountains. Alongside F1, it also currently hosts a MotoGP race and has often done so for the DTM season.<br><br>In the 70s and 80s, it was considered one of Formula 1's most exciting and dangerous circuits due to the elevation changes, fast corners and small run-off areas. Safety concerns were a factor in its removal from the calendar in 1987, and when it returned, it had been hugely rebuilt by Hermann Tilke to address this. Red Bull then made further changes when they bought it, carrying out a £60million renovation. There have been no Austrian drivers to call it their home race since its 2014 return, but it is considered just that for Red Bull, and they've enjoyed considerable success there, winning in 2018 and 2019. The ring's current layout is 4.3km long and contains nine turns, with the race going on for 71 laps. Niki Lauda is currently the only Austrian to have won there in an official Formula 1 championship race, doing so in 1984."


        austria.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Red Bull Ring"
            document.getElementById("track-image").src = "https://www.roadracingworld.com/wp-content/uploads/2020/08/Red-Bull-Ring_1597396110-e1597396165262.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=austriaInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Styria_Circuit.png.transform/5col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 4.318 km <br>Laps:&nbsp71 <br>Lap Record:&nbsp1:05.619 Carlos Sainz(2020)"
            document.getElementById("track-name").scrollIntoView()
        });

        const uk = new google.maps.Marker({
          position: silverstone,
          map: map,
        });

        const ukInfo = "A British Grand Prix has been on the Formula 1 calendar since the inaugural season in 1950, and Silverstone is its current home having hosted the first ever Formula One Grand Prix that year. Located in the village of Silverstone in Northamptonshire, England, this 3.66-mile circuit regularly attracts a crowd rivaled by very few other venues on the Formula 1 calendar, and in 2019 Silverstone topped the attendance charts for a race weekend. <br><br>Max Verstappen holds the lap record after setting a 1:27.097 in the 2020 race, while Sir Lewis Hamilton's 1:24.303 to secure pole for that race is the outright lap record for the current layout which has been in use since 2011. The British Grand Prix at Silverstone is an event steeped in tradition, but it's a circuit which has on several times come close to losing its grand prix since it became a permanent part of the calendar in 1987. It had been agreed that Silverstone would host the British Grand Prix until 2009, at which point it would return to Donington. However, the Donington Park leaseholders, Donington Ventures Leisure, went into administration and the race continued to be held at Silverstone. Once again the race was under threat though come 2019 with no new deal in place after the event. But a new five-year contract for Silverstone was announced to keep it on the F1 calendar."


        uk.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Silverstone"
            document.getElementById("track-image").src = "https://populous.com/wp-content/uploads/2018/01/POP_07_3037_00_3037_Silverstone_Exterior_Day1_DarrenHeath_FullRights.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=ukInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png.transform/5col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 5.891 km <br>Laps:&nbsp52 <br>Lap Record:&nbsp1:27.097 Max Verstappen(2020)"
            document.getElementById("track-name").scrollIntoView()
        });

        const netherlands = new google.maps.Marker({
          position: zandvoort,
          map: map,
        });

        const netherlandsInfo = "Zandvoort returned to the Formula 1 calendar for 2021 - but not the Zandvoort that we all remembered.For years now the Dutch fans have been bringing the party atmosphere to Formula 1 in support of their guy Max Verstappen, and now finally they have a race on home soil again. The Netherlands has a population of 17.5 million, and the municipality of Zandvoort serves as one of the country's major beach resorts. It has a population of around 17,000. Ahead of its Formula 1 return Circuit Zandvoort underwent a major transformation. <br><br>The biggest of those changes being the introduction of two banked corners. The now 4.252 km-track has introduced banking to the iconic Hugenholtzbocht corner, while Arie Luyendijkbocht, the last corner of the lap, now features banking at 19 degrees, making it twice as steep as the banking seen at Indianapolis. The circuit features 13 turns, and the firm in charge of redesigning the track, Dromo Circuit Design, said they wanted to emulate Eau Rouge and Raidillon at Spa, and Silverstone's fast-paced sweep of Maggots and Becketts as the fastest F1 cars to date are sent thundering around a new and improved Zandvoort."


        netherlands.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Circuit Zandvoort"
            document.getElementById("track-image").src = "https://www.holland.com/upload_mm/c/8/5/77882_fullimage_aerial%20image%20of%20circuit%20zandvoort%20in%20the%20dunes%20formaat%201600%20%C2%A9%20donaldb%20via%20shutterstock.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=netherlandsInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Great_Britain_Circuit.png.transform/5col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 4.259 km <br>Laps:&nbsp72 <br>Lap Record:&nbsp1:11.097 Lewis Hamilton(2021)"
            document.getElementById("track-name").scrollIntoView()
        });

        const italy2 = new google.maps.Marker({
          position: monza,
          map: map,
        });

        const italy2Info = "The Autodromo Nazionale di Monza, based north of Milan, is one of Formula 1's most iconic circuits. Except for 1980, Monza has hosted every Formula 1 Italian Grand Prix since the series began in 1950. This 3.6-mile track with 11 turns is one which demands commitment and speed from drivers, and most of the lap is taken at full throttle thanks to the long straights and sweeping corners. <br><br>While the V6 turbo-hybrid engines are not a patch on the beasts that preceded them, F1 cars will still reach speeds of over 220mph around Monza. And, as if the track isn't demanding enough, the 'tifosi' watching on supporting their beloved Ferrari are not afraid to let their voices be heard. It comes as little surprise then that Monza remains one of the most dangerous F1 tracks. Over the years the circuit has claimed the lives of 52 drivers and 35 spectators. Following a one-year contract extension, the Italian Grand Prix at Monza is now signed for the F1 calendar until 2025."


        italy2.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Autodromo Nazionale Monza"
            document.getElementById("track-image").src = "https://matraxlubricants.com/wp-content/uploads/2019/09/lo.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=italy2Info
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Italy_Circuit.png.transform/5col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 5.793 km <br>Laps:&nbsp53 <br>Lap Record:&nbsp1:21.046 Rubens Barrichello(2004)"
            document.getElementById("track-name").scrollIntoView()
        });

        const russia = new google.maps.Marker({
          position: sochi,
          map: map,
        });

        const russiaInfo = "The Sochi Autodrom is a Formula 1 track based in the Black Sea resort town of Sochi in Krasnodar Krai, Russia. It was officially opened in 2014, running around the former complex of the 2014 Winter Olympic Games, and has hosted the Russian Grand Prix every year since. That race marked the start of Sochi's seven-year contract, before a new five-year deal was struck in 2017. At 3.634 miles and comprising of 18 turns, it is the fourth-longest circuit on the F1 calendar behind Spa, Baku and Silverstone. <br><br>It is a track which has been very kind to Mercedes with them winning every Russian Grand Prix since 2014, Sir Lewis Hamilton has taken four of those, with Nico Rosberg and Valtteri Bottas maintaining Mercedes' dominance of Sochi. But only two drivers have grandstands named after them here, those individuals being Daniil Kvyat and Vitaly Petrov. The Sochi Autodrom has, however, proved underwhelming for some fans due to a lack of overtaking opportunities, and there has been talk of the Russian Grand Prix moving away from Sochi in the future."


        russia.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Sochi Autodrom"
            document.getElementById("track-image").src = "https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/30832-F1_Experience_Russia_2018_Saturday_002-1-dd4896b26c133388476a33dd46eb65dd.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=russiaInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Russia_Circuit.png.transform/7col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 5.848 km <br>Laps:&nbsp53 <br>Lap Record:&nbsp1:35.761 Lewis Hamilton(2019)"
            document.getElementById("track-name").scrollIntoView()
        });

        const turkey = new google.maps.Marker({
          position: istanbul,
          map: map,
        });

        const turkeyInfo = "Istanbul Park has hosted the Formula 1 Turkish Grand Prix since it first appeared on the calendar in 2005. The track is based in the municipality of Tuzla, Istanbul. It's a 3.317-mile anticlockwise circuit designed by Hermann Tilke and consists of 14 turns. The Turkish Grand Prix held what looked set to be its last Formula 1 race in 2011, but the event returned to the 2020 calendar after a nine-year absence as part of the rescheduled Formula 1 season. Tilke may not always be the most popular track designer for some fans, but few would disagree that Istanbul Park is his finest work. <br><br>Described as 'the best race track in the world' by former Formula 1 boss Bernie Ecclestone, the venue features one of the most beloved corners in the world of motorsport, that being Turn 8, or 'Diabolica' as it is nicknamed. The corner is a fast, sweeping corner with four apexes, similar to one of the multi-apex sections of the old Nürburgring. Spectators and drivers alike have compared Turn 8 to legendary corners such as Spa's Eau Rouge and Suzuka's 130R. The track has a capacity for 150,000 spectators, whilst the two-floor paddock buildings, of which the the upper floors serve as hospitality areas, provide space for another 5,000 people."


        turkey.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Istanbul Park"
            document.getElementById("track-image").src = "https://idsb.tmgrup.com.tr/ly/uploads/images/2020/11/08/70501.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=turkeyInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Russia_Circuit.png.transform/7col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 5.338 km <br>Laps:&nbsp58 <br>Lap Record:&nbsp1:24.770 Juan Pablo Montoya(2005)"
            document.getElementById("track-name").scrollIntoView()
        });

        const usa = new google.maps.Marker({
          position: austin,
          map: map,
        });

        const usaInfo = "The Circuit of the Americas, located in Austin, Texas, brought the United States Grand Prix back to Formula 1 in 2012 and it has since become one of the calendar's most exciting events, both on and off-track. Featuring just over three miles of elevation changes, tight corners, sweeping sections and overtaking opportunities aplenty, few tracks in the sport provide better wheel-to-wheel racing than COTA. This was immediately clear in its first race as Lewis Hamilton and Sebastian Vettel fought a titanic battle for the win, with the Brit coming out on top. The last-gasp action was equally as thrilling in 2017 as Max Verstappen pulled off an opportunistic - but ultimately illegal - move on Kimi Raikkonen to take P3 on the final lap before being handed a five-second penalty for corner-cutting. <br><br>Perhaps the most memorable race came in 2015 when Hamilton clinched his third World Championship after passing team-mate Nico Rosberg late-on thanks to a mistake from the German. The fireworks contained after the chequered flag, with Rosberg throwing his P2 baseball cap back at Hamilton in the cool-down room. As well as having one of the best tracks, the United States Grand Prix also has one of the best atmospheres on the calendar, with thousands -268,000 in 2019, to be precise - of passionate fans filling the grandstands each year."


        usa.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Circuit Of The Americas"
            document.getElementById("track-image").src = "https://cdn.racingnews365.com/transforms/default/2021/Leclerc/3854216/210020-usa-gp-fp-report_101d7b8599c0cc599ee16e9637ccc19e.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=usaInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/USA_Circuit.png.transform/8col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 5.513 km <br>Laps:&nbsp56 <br>Lap Record:&nbsp1:36.169 Charles Leclerc(2019)"
            document.getElementById("track-name").scrollIntoView()
        });

        const mexico = new google.maps.Marker({
          position: ciudad,
          map: map,
        });

        const mexicoInfo = "Despite only making its return to the Formula 1 calendar in 2015, the Autódromo Hermanos Rodríguez has a rich history in Formula 1 with a Mexican Grand Prix stretching all the way back to the 1960s. Initially appearing in 1962 as a non-championship event, the Mexican Grand Prix joined Formula 1's World Championship the following year, but it wasn't until 1986 that the event moved to the Autódromo Hermanos Rodríguez where it remained until dropping off the schedule after 1992. <br><br>Hermann Tilke set about renovating the venue for Formula 1's return in 2015, with the alterations making this a 2.674-mile circuit consisting of 17 turns. Based in Mexico City, the venue is named after the racing drivers Ricardo and Pedro Rodríguez. It's situated within the public park of the Magdalena Mixhuca Sports City in southeast Mexico City. The venue can hold up to 110,000 fans, and its stadium section when full serves as a spectacle of the Formula 1 calendar."


        mexico.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Autodromo Hermanos Rodriguez"
            document.getElementById("track-image").src = "https://www.eluniversal.com.mx/sites/default/files/2021/03/26/autodromo.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=mexicoInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png.transform/8col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 4.304 km <br>Laps:&nbsp71 <br>Lap Record:&nbsp1:17.774 Valtteri Bottas(2021)"
            document.getElementById("track-name").scrollIntoView()
        });

        const brazil = new google.maps.Marker({
          position: interlagos,
          map: map,
        });

        const brazilInfo = "The Autódromo José Carlos Pace, more commonly referred to as Interlagos to reflect the area where it's based, is one of the longest-serving and most iconic venues on the Formula calendar. Ever since 1990 this famous venue has hosted a Brazilian Grand Prix, missing only 2020 due to the global coronavirus pandemic. <br><br>After doubts over the future of this venue and a possible switch to a new venue in Rio de Janeiro suggested, Interlagos's future was saved by a new deal until 2025, with the event becoming known as the Sao Paulo Grand Prix. Consisting of 15 turns, Interlagos is a technically challenging 2.677-mile circuit, where the weather is famous for changing in the blink of an eye and making an already tricky circuit even more demanding of a driver's ability. Since 2004 Interlagos has served as one of the latter races in a Formula 1 season, and over the years has served up many classic title-deciders."


        brazil.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Autódromo José Carlos Pace"
            document.getElementById("track-image").src = "http://maxf1.net/wp-content/uploads/2014/04/brazil_profil.jpg?x78659"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=brazilInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Mexico_Circuit.png.transform/8col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 4.309 km <br>Laps:&nbsp71 <br>Lap Record:&nbsp1:10.540 Valtteri Bottas(2018)"
            document.getElementById("track-name").scrollIntoView()
        });

        const saudi = new google.maps.Marker({
          position: jeddah,
          map: map,
        });

        const saudiInfo = "In 2021 Formula 1 makes its first visit to the Arab nation of Saudi Arabia. The drivers now have a new night-time street circuit to master. The plan is for the event to move to a new venue in the future, with the track to be built as part of a massive entertainment city in Qiddiya. But for now it is the streets of Jeddah which welcome Formula 1 to Saudi Arabia, with experienced Formula 1 track designer Hermann Tilke brought in to handle the design of the track which will run along the banks of the Red Sea."


        saudi.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Jeddah Corniche Circuit"
            document.getElementById("track-image").src = "https://cdn-1.motorsport.com/images/amp/YpN5oJ30/s6/jeddah-street-circuit-overview.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=saudiInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Saudi_Arabia_Circuit.png.transform/5col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 6.174 km <br>Laps:&nbsp50 <br>Lap Record:&nbsp1:30.734 Lewis Hamilton (2021)"
            document.getElementById("track-name").scrollIntoView()
        });

        const uae = new google.maps.Marker({
          position: yasMarina,
          map: map,
        });

         const uaeInfo = "Since the first ever Abu Dhabi Grand Prix in 2009, the Yas Marina Circuit has proudly hosted this annual stop on the Formula 1 calendar. Yas Marina is a purpose-build track for the event, designed by Hermann Tilke, running for 3.451 miles and consisting of 21 turns. It also regularly hosts F2 races and the end-of-season young driver tests for Formula 1. This unique circuit is based on Yas Island, a popular leisure island and one of the top tourism projects in Abu Dhabi. The spectacular Ferrari World is just a stone's throw from Yas Marina Circuit and is a popular shot for the TV cameras on aerial footage of the track. <br><br>The Abu Dhabi Grand Prix is also like no other event since it's held as a day-night race with floodlights used from the start to ensure a seamless transition from daytime to darkness. Since 2009 Sir Lewis Hamilton has proven to be the king of Yas Marina, taking victory on a record five occasions, whilst Sebastian Vettel is the only other driver to win more that once at this circuit with three victories. Who will ever forget the 2010 Abu Dhabi Grand Prix when Fernando Alonso and Mark Webber got stuck behind the Renault of Vitaly Petrov, allowing Vettel to race to victory and his first Drivers' Championship. Over the years the Abu Dhabi Grand Prix has settled into the position of being Formula 1's season-ending event."


        uae.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Yas Marina"
            document.getElementById("track-image").src = "https://maxf1.net/wp-content/uploads/2014/04/abudabi_profil.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=uaeInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png.transform/5col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 5.281 km <br>Laps:&nbsp58 <br>Lap Record:&nbsp1:39.283 Lewis Hamilton(2019)"
            document.getElementById("track-name").scrollIntoView()
        });

        const qatar = new google.maps.Marker({
          position: losail,
          map: map,
        });

        const qatarInfo = "Formula 1 gained not one, but two new Middle Eastern races for 2021 with Qatar joining the Formula 1 calendar for the first time. With the Covid pandemic still causing issues internationally, Qatar stepped in to replace the cancelled 2021 Australian Grand Prix, meaning the drivers have a new twilight race to contest. Losail International Circuit was named as the venue for the first ever Qatar Grand Prix, with the country in addition signing a 10-year deal starting from 2023 to host Formula 1 action."


        qatar.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Losail International Circuit"
            document.getElementById("track-image").src = "https://i.guim.co.uk/img/media/6e7a35bf22087e45e08858bb68480027f890a9f5/0_163_3500_2100/master/3500.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=246e3711e5975d76dc60d8f903c4ac26"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=qatarInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.png.transform/5col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 5.38 km <br>Laps:&nbsp57 <br>Lap Record:&nbsp1:23.196 Max Verstappen(2021)"
            document.getElementById("track-name").scrollIntoView()
        });
      }
