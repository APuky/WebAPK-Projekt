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
            document.getElementById("track-info").innerHTML="Track Length:&nbsp5.412 km <br>Laps:&nbsp57 <br>Lap Record:&nbsp1:31.447"
            document.getElementById("track-image").scrollIntoView()
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
            document.getElementById("track-info").innerHTML="Track Length:&nbsp4.381 km <br>Laps:&nbsp70 <br>Lap Record:&nbsp1:16.627"
            document.getElementById("track-image").scrollIntoView()
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
            document.getElementById("track-info").innerHTML="Track Length:&nbsp7.004 km <br>Laps:&nbsp44 <br>Lap Record:&nbsp1:46.286"
            document.getElementById("track-image").scrollIntoView()
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
            document.getElementById("track-info").innerHTML="Track Length:&nbsp4.959 km <br>Laps:&nbsp53 <br>Lap Record:&nbsp1:15.484"
            document.getElementById("track-image").scrollIntoView()
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
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 4.684 km <br>Laps:&nbsp66 <br>Lap Record:&nbsp1:18.750"
            document.getElementById("track-image").scrollIntoView()
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
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 4.655 km <br>Laps:&nbsp66 <br>Lap Record:&nbsp1:18.1.83"
            document.getElementById("track-image").scrollIntoView()
        });


        const monaco = new google.maps.Marker({
          position: monteCarlo,
          map: map,
        });

        const monacoInfo = "Pedralbes, Jarama, Montjuic and Jerez were the first initial venues to host the Spanish Grand Prix as part of an official Formula 1 World Championship but, the Circuit de Catalunya has been the sole home of Formula 1 racing ever since 1991. The Circuit de Catalunya is located just outside of Barcelona and is a purpose-built track used across a huge range of racing disciplines. MotoGP and the FIA World Rallycross Championship are two of the other most high-profile series to race here and it was also used as a venue for the 1992 Olympics.It is widely regarded as an excellent all-rounder, with the track characteristics putting both the power and aerodynamic efficiency of Formula 1 cars under scrutiny with a mixture of high-speed sections and a tricky technical section. <br><br>It is one of the predominant reasons why pre-season testing also takes place at the Circuit de Catalunya.Given the track's long-standing history with Formula 1, there are plenty of tales to be told that involve this historic venue. There were doubts over whether the race would be a part of the 2020 and 2021 campaign, but deals for both were agreed, though there are no current plans announced for its future. The Circuit de Catalunya features 16 corners and comes in at 4.655km long in distance. The venue represents home races for two-time World Champion Fernando Alonso and Carlos Sainz."


        monaco.addListener("click", () => {
          document.getElementById("track-name").innerHTML="Circuit De Catalunya"
            document.getElementById("track-image").src = "https://d2xpg1khvwxlf1.cloudfront.net/production/images/original/31444-Circuit_de_Barcelona-Catalunya_F1_Experiences-a63f398b216c5d083c19a757a896255f.jpg"
            document.getElementById("track-image").style.border="2px solid red"
            document.getElementById("track-image").style.borderRadius="45px"
            document.getElementById("track-image").style.marginBottom="20px"
            document.getElementById("track-description").innerHTML=monacoInfo
            document.getElementById("track-layout").src ="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Spain_Circuit.png.transform/7col/image.png"
            document.getElementById("track-info").innerHTML="Track Length:&nbsp 4.655 km <br>Laps:&nbsp66 <br>Lap Record:&nbsp1:18.1.83"
        });

        const azerbaijan = new google.maps.Marker({
          position: baku,
          map: map,
        });

        const france = new google.maps.Marker({
          position: paulRicard,
          map: map,
        });

        const austria = new google.maps.Marker({
          position: rbr,
          map: map,
        });

        const uk = new google.maps.Marker({
          position: silverstone,
          map: map,
        });

        const netherlands = new google.maps.Marker({
          position: zandvoort,
          map: map,
        });

        const italy2 = new google.maps.Marker({
          position: monza,
          map: map,
        });

        const russia = new google.maps.Marker({
          position: sochi,
          map: map,
        });

        const turkey = new google.maps.Marker({
          position: istanbul,
          map: map,
        });

        const usa = new google.maps.Marker({
          position: austin,
          map: map,
        });

        const mexico = new google.maps.Marker({
          position: ciudad,
          map: map,
        });

        const brazil = new google.maps.Marker({
          position: interlagos,
          map: map,
        });

        const saudi = new google.maps.Marker({
          position: jeddah,
          map: map,
        });

        const uae = new google.maps.Marker({
          position: yasMarina,
          map: map,
        });

        const qatar = new google.maps.Marker({
          position: losail,
          map: map,
        });
      }
