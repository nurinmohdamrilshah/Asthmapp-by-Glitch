AQIdata = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0'};
function handleButtonClick(selectedButtonId) {
    // Remove 'highlight' class from all buttons
    var buttons = document.querySelectorAll('.yourareabtn');
    buttons.forEach(function (button) {
        button.classList.remove('active');
    });

    // Add 'active' class to the clicked button
    var selectedButton = document.getElementById(selectedButtonId);
    selectedButton.classList.add('active');

    // Add your existing setmap function calls here

}
//for clearing data display
function clear(){
    //barking
    const Barking = document.getElementById('barking');
    Barking.src = "./public/londonmaps/Barking_white.png";
    //barnet
    const Barnet = document.getElementById('barnet');
    Barnet.src = "./public/londonmaps/barnet_white.png"
    //bexley
    const Bexley = document.getElementById('bexley');
    Bexley.src = "./public/londonmaps/bexley_white.png";
    //brent
    const Brent = document.getElementById('brent');
    Brent.src = "./public/londonmaps/brent_white.png";
    //bromley
    const Bromley = document.getElementById('bromley');
    Bromley.src = "./public/londonmaps/bromley_white.png";
    //camden
    const Camden = document.getElementById('camden');
    Camden.src = "./public/londonmaps/camden_white.png";
    //city
    const City = document.getElementById('city');
    City.src = "./public/londonmaps/city_white.png";
    //croydon
    const Croydon = document.getElementById('croydon');
    Croydon.src = "./public/londonmaps/croydon_white.png";
    //ealing
    const Ealing = document.getElementById('ealing');
    Ealing.src = "./public/londonmaps/ealing_white.png";
    //enfield
    const Enfield = document.getElementById('enfield');
    Enfield.src = "./public/londonmaps/enfield_white.png";
    //greenwich
    const Greenwich = document.getElementById('greenwich');
    Greenwich.src = "./public/londonmaps/greenwich_white.png";
    //hackney
    const Hackney = document.getElementById('hackney');
    Hackney.src = "./public/londonmaps/hackney_white.png";
    //hammersmith
    const Hammersmith = document.getElementById('hammersmith');
    Hammersmith.src = "./public/londonmaps/hammersmith_white.png";
    //haringey
    const Haringey = document.getElementById('haringey');
    Haringey.src = "./public/londonmaps/Haringey_white.png";
    //harrow
    const Harrow = document.getElementById('harrow');
    Harrow.src = "./public/londonmaps/harrow_white.png";
    //havering
    const Havering = document.getElementById('havering');
    Havering.src = "./public/londonmaps/Havering_white.png";
    //hillingdon
    const Hillingdon = document.getElementById('hillingdon');
    Hillingdon.src = "./public/londonmaps/hillingdon_white.png";
    //hounslow
    const Hounslow = document.getElementById('hounslow');
    Hounslow.src = "./public/londonmaps/hounslow_white.png";
    //islington
    const Islington = document.getElementById('islington');
    Islington.src = "./public/londonmaps/islington_white.png";
    //kc
    const KC = document.getElementById('kc');
    KC.src = "./public/londonmaps/kc_white.png";
    //kingston
    const Kingston = document.getElementById('kingston');
    Kingston.src = "./public/londonmaps/kingston_white.png";
    //lambeth
    const Lambeth = document.getElementById('lambeth');
    Lambeth.src = "./public/londonmaps/lambeth_white.png";
    //lewisham
    const Lewisham = document.getElementById('lewisham');
    Lewisham.src = "./public/londonmaps/lewisham_white.png";
    //merton
    const Merton = document.getElementById('merton');
    Merton.src = "./public/londonmaps/merton_white.png";
    //newham
    const Newham = document.getElementById('newham');
    Newham.src = "./public/londonmaps/newham_white.png";
    //redbridge
    const Redbridge = document.getElementById('redbridge');
    Redbridge.src = "./public/londonmaps/redbridge_white.png";
    //richmond
    const Richmond = document.getElementById('richmond');
    Richmond.src = "./public/londonmaps/richmond_white.png";
    //southwark
    const Southwark = document.getElementById('southwark');
    Southwark.src = "./public/londonmaps/southwark_white.png";
    //sutton
    const Sutton = document.getElementById('sutton');
    Sutton.src = "./public/londonmaps/sutton_white.png";
    //towerhamlet
    const Towerhamlet = document.getElementById('towerhamlet');
    Towerhamlet.src = "./public/londonmaps/towerhamlet_white.png";
    //waltham forest
    const Waltham = document.getElementById('walthamforest');
    Waltham.src = "./public/londonmaps/walthamforest_white.png";
    //wandsworth
    const Wandsworth = document.getElementById('wandsworth');
    Wandsworth.src = "./public/londonmaps/wandsworth_white.png";
    //westminster
    const Westminster = document.getElementById('westminster');
    Westminster.src = "./public/londonmaps/westminster_white.png";

}
//for SO2 data display
async function setmapSO2() {
    handleButtonClick('SO2')
    const response = await fetch("https://api.erg.ic.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json");
    const apidata = await response.json();
    clear();
    //barking
    const barking = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(barking) == 1 || parseInt(barking) == 2 || parseInt(barking) == 3) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_green.png";
    } else if (parseInt(barking) == 4 || parseInt(barking) == 5 || parseInt(barking) == 6) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_orange.png";
    } else if (parseInt(barking) == 7 || parseInt(barking) == 8 || parseInt(barking) == 9 || parseInt(barking) == 10) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_red.png";
    }
    //barnet
    const imgsrcbarnet = document.getElementById('barnet');
    imgsrcbarnet.src = "./public/londonmaps/barnet_white.png";
    //bexley
    const bexley = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[2].Species[2]["@AirQualityIndex"];
    if (parseInt(bexley) == 1 || parseInt(bexley) == 2 || parseInt(bexley) == 3) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_green.png";
    } else if (parseInt(bexley) == 4 || parseInt(bexley) == 5 || parseInt(bexley) == 6) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_orange.png";
    } else if (parseInt(bexley) == 7 || parseInt(bexley) == 8 || parseInt(bexley) == 9 || parseInt(bexley) == 10) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_red.png";
    }
    //brent
    const imgsrcbrent = document.getElementById('brent');
    imgsrcbrent.src = "./public/londonmaps/brent_white.png";
    //bromley
    const imgsrcbromley = document.getElementById('bromley');
    imgsrcbromley.src = "./public/londonmaps/bromley_white.png";
    //camden
    const camden = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[4]["@AirQualityIndex"];
    if (parseInt(camden) == 1 || parseInt(camden) == 2 || parseInt(camden) == 3) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_green.png";
    } else if (parseInt(camden) == 4 || parseInt(camden) == 5 || parseInt(camden) == 6) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_orange.png";
    } else if (parseInt(camden) == 7 || parseInt(camden) == 8 || parseInt(camden) == 9 || parseInt(camden) == 10) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_red.png";
    }
    //city
    const imgsrccity = document.getElementById('city');
    imgsrccity.src = "./public/londonmaps/city_white.png";
    //croydon
    const imgsrccroydon = document.getElementById('croydon');
    imgsrccroydon.src = "./public/londonmaps/croydon_white.png";
    //ealing
    const imgsrcealing = document.getElementById('ealing');
    imgsrcealing.src = "./public/londonmaps/ealing_white.png";
    //enfield
    const imgsrcenfield = document.getElementById('enfield');
    imgsrcenfield.src = "./public/londonmaps/enfield_white.png";
    //greenwich
    const greenwich = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[7].Species[4]["@AirQualityIndex"];
    if (parseInt(greenwich) == 1 || parseInt(greenwich) == 2 || parseInt(greenwich) == 3) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_green.png";
    } else if (parseInt(greenwich) == 4 || parseInt(greenwich) == 5 || parseInt(greenwich) == 6) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_orange.png";
    } else if (parseInt(greenwich) == 7 || parseInt(greenwich) == 8 || parseInt(greenwich) == 9 || parseInt(greenwich) == 10) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_red.png";
    }
    //hackney
    const imgsrchackney = document.getElementById('hackney');
    imgsrchackney.src = "./public/londonmaps/hackney_white.png";
    //hammersmith
    const imgsrchammersmith = document.getElementById('hammersmith');
    imgsrchammersmith.src = "./public/londonmaps/hammersmith_white.png";
    //haringey
    const imgsrcharingey = document.getElementById('haringey');
    imgsrcharingey.src = "./public/londonmaps/Haringey_white.png";
    //harrow
    const imgsrcharrow = document.getElementById('harrow');
    imgsrcharrow.src = "./public/londonmaps/harrow_white.png";
    //havering
    const imgsrchavering = document.getElementById('havering');
    imgsrchavering.src = "./public/londonmaps/Havering_white.png";
    //hillingdon
    const imgsrchillingdon = document.getElementById('hillingdon');
    imgsrchillingdon.src = "./public/londonmaps/hillingdon_white.png";
    //hounslow
    const imgsrchounslow = document.getElementById('hounslow');
    imgsrchounslow.src = "./public/londonmaps/hounslow_white.png";
    //islington
    const imgsrcislington = document.getElementById('islington');
    imgsrcislington.src = "./public/londonmaps/islington_white.png";
    //kc
    const kc = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(kc) == 1 || parseInt(kc) == 2 || parseInt(kc) == 3) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_green.png";
    } else if (parseInt(kc) == 4 || parseInt(kc) == 5 || parseInt(kc) == 6) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_orange.png";
    } else if (parseInt(kc) == 7 || parseInt(kc) == 8 || parseInt(kc) == 9 || parseInt(kc) == 10) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_red.png";
    }
    //kingston
    const imgsrckingston = document.getElementById('kingston');
    imgsrckingston.src = "./public/londonmaps/kingston_white.png";
    //lambeth
    const lambeth = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(lambeth) == 1 || parseInt(lambeth) == 2 || parseInt(lambeth) == 3) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_green.png";
    } else if (parseInt(lambeth) == 4 || parseInt(lambeth) == 5 || parseInt(lambeth) == 6) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_orange.png";
    } else if (parseInt(lambeth) == 7 || parseInt(lambeth) == 8 || parseInt(lambeth) == 9 || parseInt(lambeth) == 10) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_red.png";
    }
    //lewisham
    const imgsrclewisham = document.getElementById('lewisham');
    imgsrclewisham.src = "./public/londonmaps/lewisham_white.png";
    //merton
    const imgsrcmerton = document.getElementById('merton');
    imgsrcmerton.src = "./public/londonmaps/merton_white.png";
    //newham
    const imgsrcnewham = document.getElementById('newham');
    imgsrcnewham.src = "./public/londonmaps/newham_white.png";
    //redbridge
    const imgsrcredbridge = document.getElementById('redbridge');
    imgsrcredbridge.src = "./public/londonmaps/redbridge_white.png";
    //richmond
    const imgsrcrichmond = document.getElementById('richmond');
    imgsrcrichmond.src = "./public/londonmaps/richmond_white.png";
    //southwark
    const imgsrcsouthwark = document.getElementById('southwark');
    imgsrcsouthwark.src = "./public/londonmaps/southwark_white.png";
    //sutton
    const imgsrcsutton = document.getElementById('sutton');
    imgsrcsutton.src = "./public/londonmaps/sutton_white.png";
    //towerhamlet
    const imgsrctowerhamlet = document.getElementById('towerhamlet');
    imgsrctowerhamlet.src = "./public/londonmaps/towerhamlet_white.png";
    //walthamforest
    const imgsrcwaltham = document.getElementById('walthamforest');
    imgsrcwaltham.src = "./public/londonmaps/walthamforest_white.png";
    //westminster
    const imgsrcwestminster = document.getElementById('westminster');
    imgsrcwestminster.src = "./public/londonmaps/westminster_white.png";

}


//for NO2 reading display
async function setmapNO2(){
    handleButtonClick('NO2')
    const response = await fetch("https://api.erg.ic.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json");
    const apidata = await response.json();
    clear();
    //barking
    const barkingNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(barkingNO2) == 1 || parseInt(barkingNO2) == 2 || parseInt(barkingNO2) ==3){
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_green.png";
    } else if (parseInt(barkingNO2) == 4 || parseInt(barkingNO2) == 5 || parseInt(barkingNO2) ==6) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_orange.png";
    } else if (parseInt(barkingNO2) == 7 || parseInt(barkingNO2) == 8 || parseInt(barkingNO2) ==9 || parseInt(barkingNO2) == 10) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_red.png";
    }
    //barnet
    const imgsrcbarnet = document.getElementById('barnet');
    imgsrcbarnet.src = "./public/londonmaps/barnet_white.png";
    //bexley
    const bexleyNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(bexleyNO2) == 1 || parseInt(bexleyNO2) == 2 || parseInt(bexleyNO2) ==3){
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_green.png";
    } else if (parseInt(bexleyNO2) == 4 || parseInt(bexleyNO2) == 5 || parseInt(bexleyNO2) ==6) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_orange.png";
    } else if (parseInt(bexleyNO2) == 7 || parseInt(bexleyNO2) == 8 || parseInt(bexleyNO2) ==9 || parseInt(bexleyNO2) == 10) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_red.png";
    }
    //brent
    const brentNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(brentNO2) == 1 || parseInt(brentNO2) == 2 || parseInt(brentNO2) ==3){
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_green.png";
    } else if (parseInt(brentNO2) == 4 || parseInt(brentNO2) == 5 || parseInt(brentNO2) ==6) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_orange.png";
    } else if (parseInt(brentNO2) == 7 || parseInt(brentNO2) == 8 || parseInt(brentNO2) ==9 || parseInt(brentNO2) == 10) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_red.png";
    }
    //bromley
    const bromleyNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[0]["@AirQualityIndex"];
    if (parseInt(bromleyNO2) == 1 || parseInt(bromleyNO2) == 2 || parseInt(bromleyNO2) ==3){
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_green.png";
    } else if (parseInt(bromleyNO2) == 4 || parseInt(bromleyNO2) == 5 || parseInt(bromleyNO2) ==6) {
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_orange.png";
    } else if (parseInt(bromleyNO2) == 7 || parseInt(bromleyNO2) == 8 || parseInt(bromleyNO2) ==9 || parseInt(bromleyNO2) == 10) {
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_red.png";
    }
    //camden
    const camdenNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(camdenNO2) == 1 || parseInt(camdenNO2) == 2 || parseInt(camdenNO2) ==3){
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_green.png";
    } else if (parseInt(camdenNO2) == 4 || parseInt(camdenNO2) == 5 || parseInt(camdenNO2) ==6) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_orange.png";
    } else if (parseInt(camdenNO2) == 7 || parseInt(camdenNO2) == 8 || parseInt(camdenNO2) ==9 || parseInt(camdenNO2) == 10) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_red.png";
    }
    //city
    const imgsrccity = document.getElementById('city');
    imgsrccity.src = "./public/londonmaps/city_white.png";
    //croydon
    const croydonNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[0].Species["@AirQualityIndex"];
    if (parseInt(croydonNO2) == 1 || parseInt(croydonNO2) == 2 || parseInt(croydonNO2) ==3){
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_green.png";
    } else if (parseInt(croydonNO2) == 4 || parseInt(croydonNO2) == 5 || parseInt(croydonNO2) ==6) {
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_orange.png";
    } else if (parseInt(croydonNO2) == 7 || parseInt(croydonNO2) == 8 || parseInt(croydonNO2) ==9 || parseInt(croydonNO2) == 10) {
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_red.png";
    }
    //ealing
    const ealingNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[8].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(ealingNO2) == 1 || parseInt(ealingNO2) == 2 || parseInt(ealingNO2) ==3){
        const imgsrc6 = document.getElementById("ealing");
        imgsrc6.src = "./public/londonmaps/ealing_green.png";
    } else if (parseInt(ealingNO2) == 4 || parseInt(ealingNO2) == 5 || parseInt(ealingNO2) ==6) {
        const imgsrc6 = document.getElementById("ealing");
        imgsrc6.src = "./public/londonmaps/ealing_orange.png";
    } else if (parseInt(ealingNO2) == 7 || parseInt(ealingNO2) == 8 || parseInt(ealingNO2) ==9 || parseInt(ealingNO2) == 10) {
        const imgsrc6 = document.getElementById("ealing");
        imgsrc6.src = "./public/londonmaps/ealing_red.png";
    }
    //enfield
    const enfieldNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[9].Site[0].Species["@AirQualityIndex"];
    if (parseInt(enfieldNO2) == 1 || parseInt(enfieldNO2) == 2 || parseInt(enfieldNO2) ==3){
        const imgsrc7 = document.getElementById("enfield");
        imgsrc7.src = "./public/londonmaps/enfield_green.png";
    } else if (parseInt(enfieldNO2) == 4 || parseInt(enfieldNO2) == 5 || parseInt(enfieldNO2) ==6) {
        const imgsrc7 = document.getElementById("enfield");
        imgsrc7.src = "./public/londonmaps/enfield_orange.png";
    } else if (parseInt(enfieldNO2) == 7 || parseInt(enfieldNO2) == 8 || parseInt(enfieldNO2) ==9 || parseInt(enfieldNO2) == 10) {
        const imgsrc7 = document.getElementById("enfield");
        imgsrc7.src = "./public/londonmaps/enfield_red.png";
    }
    //greenwich
    const greenwichNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[0]["@AirQualityIndex"];
    if (parseInt(greenwichNO2) == 1 || parseInt(greenwichNO2) == 2 || parseInt(greenwichNO2) ==3){
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_green.png";
    } else if (parseInt(greenwichNO2) == 4 || parseInt(greenwichNO2) == 5 || parseInt(greenwichNO2) ==6) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_orange.png";
    } else if (parseInt(greenwichNO2) == 7 || parseInt(greenwichNO2) == 8 || parseInt(greenwichNO2) ==9 || parseInt(greenwichNO2) == 10) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_red.png";
    }
    //hackney
    const hackneyNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[0]["@AirQualityIndex"];
    if (parseInt(hackneyNO2) == 1 || parseInt(hackneyNO2) == 2 || parseInt(hackneyNO2) ==3){
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_green.png";
    } else if (parseInt(hackneyNO2) == 4 || parseInt(hackneyNO2) == 5 || parseInt(hackneyNO2) ==6) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_orange.png";
    } else if (parseInt(hackneyNO2) == 7 || parseInt(hackneyNO2) == 8 || parseInt(hackneyNO2) ==9 || parseInt(hackneyNO2) == 10) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_red.png";
    }
    //hammersmith
    const imgsrchammersmith = document.getElementById('hammersmith');
    imgsrchammersmith.src = "./public/londonmaps/hammersmith_white.png";
    //haringey
    const haringeyNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[13].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(haringeyNO2) == 1 || parseInt(haringeyNO2) == 2 || parseInt(haringeyNO2) ==3){
        const imgsrc10 = document.getElementById("haringey");
        imgsrc10.src = "./public/londonmaps/Haringey_green.png";
    } else if (parseInt(haringeyNO2) == 4 || parseInt(haringeyNO2) == 5 || parseInt(haringeyNO2) ==6) {
        const imgsrc10 = document.getElementById("haringey");
        imgsrc10.src = "./public/londonmaps/Haringey_orange.png";
    } else if (parseInt(haringeyNO2) == 7 || parseInt(haringeyNO2) == 8 || parseInt(haringeyNO2) ==9 || parseInt(haringeyNO2) == 10) {
        const imgsrc10 = document.getElementById("haringey");
        imgsrc10.src = "./public/londonmaps/Haringey_red.png";
    }
    //harrow
    const imgsrcharrow = document.getElementById('harrow');
    imgsrcharrow.src = "./public/londonmaps/harrow_white.png";
    //havering
    const haveringNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(haveringNO2) == 1 || parseInt(haveringNO2) == 2 || parseInt(haveringNO2) ==3){
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_green.png";
    } else if (parseInt(haveringNO2) == 4 || parseInt(haveringNO2) == 5 || parseInt(haveringNO2) ==6) {
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_orange.png";
    } else if (parseInt(haveringNO2) == 7 || parseInt(haveringNO2) == 8 || parseInt(haveringNO2) ==9 || parseInt(haveringNO2) == 10) {
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_red.png";
    }
    //hillingdon
    const hillingdonNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(hillingdonNO2) == 1 || parseInt(hillingdonNO2) == 2 || parseInt(hillingdonNO2) ==3){
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_green.png";
    } else if (parseInt(hillingdonNO2) == 4 || parseInt(hillingdonNO2) == 5 || parseInt(hillingdonNO2) ==6) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_orange.png";
    } else if (parseInt(hillingdonNO2) == 7 || parseInt(hillingdonNO2) == 8 || parseInt(hillingdonNO2) ==9 || parseInt(hillingdonNO2) == 10) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_red.png";
    }
    //hounslow
    const imgsrchounslow = document.getElementById('hounslow');
    imgsrchounslow.src = "./public/londonmaps/hounslow_white.png"
    //islington
    const islingtonNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[18].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(islingtonNO2) == 1 || parseInt(islingtonNO2) == 2 || parseInt(islingtonNO2) ==3){
        const imgsrc13 = document.getElementById("islington");
        imgsrc13.src = "./public/londonmaps/islington_green.png";
    } else if (parseInt(islingtonNO2) == 4 || parseInt(islingtonNO2) == 5 || parseInt(islingtonNO2) ==6) {
        const imgsrc13 = document.getElementById("islington");
        imgsrc13.src = "./public/londonmaps/islington_orange.png";
    } else if (parseInt(islingtonNO2) == 7 || parseInt(islingtonNO2) == 8 || parseInt(islingtonNO2) ==9 || parseInt(islingtonNO2) == 10) {
        const imgsrc13 = document.getElementById("islington");
        imgsrc13.src = "./public/londonmaps/islington_red.png";
    }
    //kc
    const kcNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(kcNO2) == 1 || parseInt(kcNO2) == 2 || parseInt(kcNO2) ==3){
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_green.png";
    } else if (parseInt(kcNO2) == 4 || parseInt(kcNO2) == 5 || parseInt(kcNO2) ==6) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_orange.png";
    } else if (parseInt(kcNO2) == 7 || parseInt(kcNO2) == 8 || parseInt(kcNO2) ==9 || parseInt(kcNO2) == 10) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_red.png";
    }
    //kingston
    const kingstonNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(kingstonNO2) == 1 || parseInt(kingstonNO2) == 2 || parseInt(kingstonNO2) ==3){
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_green.png";
    } else if (parseInt(kingstonNO2) == 4 || parseInt(kingstonNO2) == 5 || parseInt(kingstonNO2) ==6) {
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_orange.png";
    } else if (parseInt(kingstonNO2) == 7 || parseInt(kingstonNO2) == 8 || parseInt(kingstonNO2) ==9 || parseInt(kingstonNO2) == 10) {
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_red.png";
    }
    //lambeth
    const lambethNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(lambethNO2) == 1 || parseInt(lambethNO2) == 2 || parseInt(lambethNO2) ==3){
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_green.png";
    } else if (parseInt(lambethNO2) == 4 || parseInt(lambethNO2) == 5 || parseInt(lambethNO2) ==6) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_orange.png";
    } else if (parseInt(lambethNO2) == 7 || parseInt(lambethNO2) == 8 || parseInt(lambethNO2) ==9 || parseInt(lambethNO2) == 10) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_red.png";
    }
    //lewisham
    const lewishamNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(lewishamNO2) == 1 || parseInt(lewishamNO2) == 2 || parseInt(lewishamNO2) ==3){
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_green.png";
    } else if (parseInt(lewishamNO2) == 4 || parseInt(lewishamNO2) == 5 || parseInt(lewishamNO2) ==6) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_orange.png";
    } else if (parseInt(lewishamNO2) == 7 || parseInt(lewishamNO2) == 8 || parseInt(lewishamNO2) ==9 || parseInt(lewishamNO2) == 10) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_red.png";
    }
    //merton
    const mertonNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[23].Site[1].Species["@AirQualityIndex"];
    if (parseInt(mertonNO2) == 1 || parseInt(mertonNO2) == 2 || parseInt(mertonNO2) ==3){
        const imgsrc18 = document.getElementById("merton");
        imgsrc18.src = "./public/londonmaps/merton_green.png";
    } else if (parseInt(mertonNO2) == 4 || parseInt(mertonNO2) == 5 || parseInt(mertonNO2) ==6) {
        const imgsrc18 = document.getElementById("merton");
        imgsrc18.src = "./public/londonmaps/merton_orange.png";
    } else if (parseInt(mertonNO2) == 7 || parseInt(mertonNO2) == 8 || parseInt(mertonNO2) ==9 || parseInt(mertonNO2) == 10) {
        const imgsrc18 = document.getElementById("merton");
        imgsrc18.src = "./public/londonmaps/merton_red.png";
    }
    //newham
    const newhamNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(newhamNO2) == 1 || parseInt(newhamNO2) == 2 || parseInt(newhamNO2) ==3){
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_green.png";
    } else if (parseInt(newhamNO2) == 4 || parseInt(newhamNO2) == 5 || parseInt(newhamNO2) ==6) {
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_orange.png";
    } else if (parseInt(newhamNO2) == 7 || parseInt(newhamNO2) == 8 || parseInt(newhamNO2) ==9 || parseInt(newhamNO2) == 10) {
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_red.png";
    }
    //redbridge
    const redbridgeNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(redbridgeNO2) == 1 || parseInt(redbridgeNO2) == 2 || parseInt(redbridgeNO2) ==3){
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_green.png";
    } else if (parseInt(redbridgeNO2) == 4 || parseInt(redbridgeNO2) == 5 || parseInt(redbridgeNO2) ==6) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_orange.png";
    } else if (parseInt(redbridgeNO2) == 7 || parseInt(redbridgeNO2) == 8 || parseInt(redbridgeNO2) ==9 || parseInt(redbridgeNO2) == 10) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_red.png";
    }
    //richmond
    const richmondNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(richmondNO2) == 1 || parseInt(richmondNO2) == 2 || parseInt(richmondNO2) ==3){
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_green.png";
    } else if (parseInt(richmondNO2) == 4 || parseInt(richmondNO2) == 5 || parseInt(richmondNO2) ==6) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_orange.png";
    } else if (parseInt(richmondNO2) == 7 || parseInt(richmondNO2) == 8 || parseInt(richmondNO2) ==9 || parseInt(richmondNO2) == 10) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_red.png";
    }
    //southwark
    const southwarkNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(southwarkNO2) == 1 || parseInt(southwarkNO2) == 2 || parseInt(southwarkNO2) ==3){
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_green.png";
    } else if (parseInt(southwarkNO2) == 4 || parseInt(southwarkNO2) == 5 || parseInt(southwarkNO2) ==6) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_orange.png";
    } else if (parseInt(southwarkNO2) == 7 || parseInt(southwarkNO2) == 8 || parseInt(southwarkNO2) ==9 || parseInt(southwarkNO2) == 10) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_red.png";
    }
    //sutton
    const suttonNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(suttonNO2) == 1 || parseInt(suttonNO2) == 2 || parseInt(suttonNO2) ==3){
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_green.png";
    } else if (parseInt(suttonNO2) == 4 || parseInt(suttonNO2) == 5 || parseInt(suttonNO2) ==6) {
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_orange.png";
    } else if (parseInt(suttonNO2) == 7 || parseInt(suttonNO2) == 8 || parseInt(suttonNO2) ==9 || parseInt(suttonNO2) == 10) {
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_red.png";
    }
    //towerhamlet
    const towerhamletNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(towerhamletNO2) == 1 || parseInt(towerhamletNO2) == 2 || parseInt(towerhamletNO2) ==3){
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_green.png";
    } else if (parseInt(towerhamletNO2) == 4 || parseInt(towerhamletNO2) == 5 || parseInt(towerhamletNO2) ==6) {
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_orange.png";
    } else if (parseInt(towerhamletNO2) == 7 || parseInt(towerhamletNO2) == 8 || parseInt(towerhamletNO2) ==9 || parseInt(towerhamletNO2) == 10) {
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_red.png";
    }
    //waltham
    const imgsrcwaltham = document.getElementById('walthamforest');
    imgsrcwaltham.src = "./public/londonmaps/walthamforest_white.png";
    //wandsworth
    const wandsworthNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(wandsworthNO2) == 1 || parseInt(wandsworthNO2) == 2 || parseInt(wandsworthNO2) ==3){
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_green.png";
    } else if (parseInt(wandsworthNO2) == 4 || parseInt(wandsworthNO2) == 5 || parseInt(wandsworthNO2) ==6) {
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_orange.png";
    } else if (parseInt(wandsworthNO2) == 7 || parseInt(wandsworthNO2) == 8 || parseInt(wandsworthNO2) ==9 || parseInt(wandsworthNO2) == 10) {
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_red.png";
    }
    //westminster
    const westminsterNO2 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[0]["@AirQualityIndex"];
    if (parseInt(westminsterNO2) == 1 || parseInt(westminsterNO2) == 2 || parseInt(westminsterNO2) ==3){
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_green.png";
    } else if (parseInt(westminsterNO2) == 4 || parseInt(westminsterNO2) == 5 || parseInt(westminsterNO2) ==6) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_orange.png";
    } else if (parseInt(westminsterNO2) == 7 || parseInt(westminsterNO2) == 8 || parseInt(westminsterNO2) ==9 || parseInt(haringeyNO2) == 10) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_red.png";
    }


}

//for O3 data display
async function setmapO3(){
    handleButtonClick('O3')
    const response = await fetch("https://api.erg.ic.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json");
    const apidata = await response.json();
    clear();
    //barking
    const imgsrcbarking = document.getElementById('barking');
    imgsrcbarking.src = "./public/londonmaps/Barking_white.png";
    //barnet
    const imgsrcbarnet = document.getElementById('barnet');
    imgsrcbarnet.src = "./public/londonmaps/barnet_white.png";
    //bexley
    const bexleyO3 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(bexleyO3) == 1 || parseInt(bexleyO3) == 2 || parseInt(bexleyO3) ==3){
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_green.png";
    } else if (parseInt(bexleyO3) == 4 || parseInt(bexleyO3) == 5 || parseInt(bexleyO3) ==6) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_orange.png";
    } else if (parseInt(bexleyO3) == 7 || parseInt(bexleyO3) == 8 || parseInt(bexleyO3) ==9 || parseInt(bexleyO3) == 10) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_red.png";
    }
    //brent
    const brentO3 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(brentO3) == 1 || parseInt(brentO3) == 2 || parseInt(brentO3) ==3){
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_green.png";
    } else if (parseInt(brentO3) == 4 || parseInt(brentO3) == 5 || parseInt(brentO3) ==6) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_orange.png";
    } else if (parseInt(brentO3) == 7 || parseInt(brentO3) == 8 || parseInt(brentO3) ==9 || parseInt(brentO3) == 10) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_red.png";
    }
    //bromley
    const imgsrcbromley = document.getElementById('bromley');
    imgsrcbromley.src = "./public/londonmaps/bromley_white.png";
    //camden
    const camdenO3 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(camdenO3) == 1 || parseInt(camdenO3) == 2 || parseInt(camdenO3) ==3){
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_green.png";
    } else if (parseInt(camdenO3) == 4 || parseInt(camdenO3) == 5 || parseInt(camdenO3) ==6) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_orange.png";
    } else if (parseInt(camdenO3) == 7 || parseInt(camdenO3) == 8 || parseInt(camdenO3) ==9 || parseInt(camdenO3) == 10) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_red.png";
    }
    //city
    const imgsrccity = document.getElementById('city');
    imgsrccity.src = "./public/londonmaps/city_white.png";
    //croydon
    const imgsrccroydon = document.getElementById('croydon');
    imgsrccroydon.src = "./public/londonmaps/croydon_white.png";
    //ealing
    const imgsrcealing = document.getElementById('ealing');
    imgsrcealing.src = "./public/londonmaps/ealing_white.png";
    //enfield
    const imgsrcenfield = document.getElementById('enfield');
    imgsrcenfield.src = "./public/londonmaps/enfield_white.png";
    //greenwich
    const greenwichO3 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[3].Species[1]["@AirQualityIndex"];
    if (parseInt(greenwichO3) == 1 || parseInt(greenwichO3) == 2 || parseInt(greenwichO3) ==3){
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_green.png";
    } else if (parseInt(greenwichO3) == 4 || parseInt(greenwichO3) == 5 || parseInt(greenwichO3) ==6) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_orange.png";
    } else if (parseInt(greenwichO3) == 7 || parseInt(greenwichO3) == 8 || parseInt(greenwichO3) ==9 || parseInt(greenwichO3) == 10) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_red.png";
    }
    //hackney
    const hackneyO3 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[1]["@AirQualityIndex"];
    if (parseInt(hackneyO3) == 1 || parseInt(hackneyO3) == 2 || parseInt(hackneyO3) ==3){
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_green.png";
    } else if (parseInt(hackneyO3) == 4 || parseInt(hackneyO3) == 5 || parseInt(hackneyO3) ==6) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_orange.png";
    } else if (parseInt(hackneyO3) == 7 || parseInt(hackneyO3) == 8 || parseInt(hackneyO3) ==9 || parseInt(hackneyO3) == 10) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_red.png";
    }
    //hammersmith
    const imgsrchammersmith = document.getElementById('hammersmith');
    imgsrchammersmith.src = "./public/londonmaps/hammersmith_white.png";
    //haringey
    const haringeyO3 = apidata.HourlyAirQualityIndex.LocalAuthority[13].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(haringeyO3) == 1 || parseInt(haringeyO3) == 2 || parseInt(haringeyO3) ==3){
        const imgsrc10 = document.getElementById("haringey");
        imgsrc10.src = "./public/londonmaps/Haringey_green.png";
    } else if (parseInt(haringeyO3) == 4 || parseInt(haringeyO3) == 5 || parseInt(haringeyO3) ==6) {
        const imgsrc10 = document.getElementById("haringey");
        imgsrc10.src = "./public/londonmaps/Haringey_orange.png";
    } else if (parseInt(haringeyO3) == 7 || parseInt(haringeyO3) == 8 || parseInt(haringeyO3) ==9 || parseInt(haringeyO3) == 10) {
        const imgsrc10 = document.getElementById("haringey");
        imgsrc10.src = "./public/londonmaps/Haringey_red.png";
    }
    //harrow
    const imgsrcharrow = document.getElementById('harrow');
    imgsrcharrow.src = "./public/londonmaps/harrow_white.png";
    //havering
    const imgsrchavering = document.getElementById('havering');
    imgsrchavering.src = "./public/londonmaps/Havering_white.png";
    //hillingdon
    const hillingdonO3 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(hillingdonO3) == 1 || parseInt(hillingdonO3) == 2 || parseInt(hillingdonO3) ==3){
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_green.png";
    } else if (parseInt(hillingdonO3) == 4 || parseInt(hillingdonO3) == 5 || parseInt(hillingdonO3) ==6) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_orange.png";
    } else if (parseInt(hillingdonO3) == 7 || parseInt(hillingdonO3) == 8 || parseInt(hillingdonO3) ==9 || parseInt(hillingdonO3) == 10) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_red.png";
    }
    //hounslow
    const imgsrchounslow = document.getElementById('hounslow');
    imgsrchounslow.src = "./public/londonmaps/hounslow_white.png"
    //islington
    const imgsrcislington = document.getElementById('islington');
    imgsrcislington.src = "./public/londonmaps/islington_white.png";
    //kc
    const kcO3 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(kcO3) == 1 || parseInt(kcO3) == 2 || parseInt(kcO3) ==3){
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_green.png";
    } else if (parseInt(kcO3) == 4 || parseInt(kcO3) == 5 || parseInt(kcO3) ==6) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_orange.png";
    } else if (parseInt(kcO3) == 7 || parseInt(kcO3) == 8 || parseInt(kcO3) ==9 || parseInt(kcO3) == 10) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_red.png";
    }
    //kingston
    const imgsrckingston = document.getElementById('kingston');
    imgsrckingston.src = "./public/londonmaps/kingston_white.png";
    //lambeth
    const imgsrclambeth = document.getElementById('lambeth');
    imgsrclambeth.src = "./public/londonmaps/lambeth_white.png";
    //lewisham
    const lewishamO3 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(lewishamO3) == 1 || parseInt(lewishamO3) == 2 || parseInt(lewishamO3) ==3){
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_green.png";
    } else if (parseInt(lewishamO3) == 4 || parseInt(lewishamO3) == 5 || parseInt(lewishamO3) ==6) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_orange.png";
    } else if (parseInt(lewishamO3) == 7 || parseInt(lewishamO3) == 8 || parseInt(lewishamO3) ==9 || parseInt(lewishamO3) == 10) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_red.png";
    }
    //merton
    const imgsrcmerton = document.getElementById('merton');
    imgsrcmerton.src = "./public/londonmaps/merton_white.png";
    //newham
    const imgsrcnewham = document.getElementById('newham');
    imgsrcnewham.src = "./public/londonmaps/newham_white.png";
    //redbridge
    const redbridgeO3 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(redbridgeO3) == 1 || parseInt(redbridgeO3) == 2 || parseInt(redbridgeO3) ==3){
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_green.png";
    } else if (parseInt(redbridgeO3) == 4 || parseInt(redbridgeO3) == 5 || parseInt(redbridgeO3) ==6) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_orange.png";
    } else if (parseInt(redbridgeO3) == 7 || parseInt(redbridgeO3) == 8 || parseInt(redbridgeO3) ==9 || parseInt(redbridgeO3) == 10) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_red.png";
    }
    //richmond
    const richmondO3 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(richmondO3) == 1 || parseInt(richmondO3) == 2 || parseInt(richmondO3) ==3){
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_green.png";
    } else if (parseInt(richmondO3) == 4 || parseInt(richmondO3) == 5 || parseInt(richmondO3) ==6) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_orange.png";
    } else if (parseInt(richmondO3) == 7 || parseInt(richmondO3) == 8 || parseInt(richmondO3) ==9 || parseInt(richmondO3) == 10) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_red.png";
    }
    //southwark
    const southwarkO3 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(southwarkO3) == 1 || parseInt(southwarkO3) == 2 || parseInt(southwarkO3) ==3){
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_green.png";
    } else if (parseInt(southwarkO3) == 4 || parseInt(southwarkO3) == 5 || parseInt(southwarkO3) ==6) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_orange.png";
    } else if (parseInt(southwarkO3) == 7 || parseInt(southwarkO3) == 8 || parseInt(southwarkO3) ==9 || parseInt(southwarkO3) == 10) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_red.png";
    }
    //sutton
    const imgsrcsutton = document.getElementById('sutton');
    imgsrcsutton.src = "./public/londonmaps/sutton_white.png";
    //towerhamlet
    const imgsrctowerhamlet = document.getElementById('towerhamlet');
    imgsrctowerhamlet.src = "./public/londonmaps/towerhamlet_white.png";
    //waltham
    const imgsrcwaltham = document.getElementById('walthamforest');
    imgsrcwaltham.src = "./public/londonmaps/walthamforest_white.png";
    //wandsworth
    const wandsworthO3 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(wandsworthO3) == 1 || parseInt(wandsworthO3) == 2 || parseInt(wandsworthO3) ==3){
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_green.png";
    } else if (parseInt(wandsworthO3) == 4 || parseInt(wandsworthO3) == 5 || parseInt(wandsworthO3) ==6) {
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_orange.png";
    } else if (parseInt(wandsworthO3) == 7 || parseInt(wandsworthO3) == 8 || parseInt(wandsworthO3) ==9 || parseInt(wandsworthO3) == 10) {
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_red.png";
    }
    //westminster
    const westminsterO3 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(westminsterO3) == 1 || parseInt(westminsterO3) == 2 || parseInt(westminsterO3) ==3){
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_green.png";
    } else if (parseInt(westminsterO3) == 4 || parseInt(westminsterO3) == 5 || parseInt(westminsterO3) ==6) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_orange.png";
    } else if (parseInt(westminsterO3) == 7 || parseInt(westminsterO3) == 8 || parseInt(westminsterO3) ==9 || parseInt(haringeyO3) == 10) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_red.png";
    }


}

//for PM10 data display
async function setmapPM10(){
    handleButtonClick('PM10')
    const response = await fetch("https://api.erg.ic.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json");
    const apidata = await response.json();
    clear();
    //barking
    const barkingPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(barkingPM10) == 1 || parseInt(barkingPM10) == 2 || parseInt(barkingPM10) ==3){
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_green.png";
    } else if (parseInt(barkingPM10) == 4 || parseInt(barkingPM10) == 5 || parseInt(barkingPM10) ==6) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_orange.png";
    } else if (parseInt(barkingPM10) == 7 || parseInt(barkingPM10) == 8 || parseInt(barkingPM10) ==9 || parseInt(barkingPM10) == 10) {
        const imgsrc = document.getElementById("barking");
        imgsrc.src = "./public/londonmaps/Barking_red.png";
    }
    //barnet
    const imgsrcbarnet = document.getElementById('barnet');
    imgsrcbarnet.src = "./public/londonmaps/barnet_white.png";
    //bexley
    const bexleyPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(bexleyPM10) == 1 || parseInt(bexleyPM10) == 2 || parseInt(bexleyPM10) ==3){
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_green.png";
    } else if (parseInt(bexleyPM10) == 4 || parseInt(bexleyPM10) == 5 || parseInt(bexleyPM10) ==6) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_orange.png";
    } else if (parseInt(bexleyPM10) == 7 || parseInt(bexleyPM10) == 8 || parseInt(bexleyPM10) ==9 || parseInt(bexleyPM10) == 10) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_red.png";
    }
    //brent
    const brentPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(brentPM10) == 1 || parseInt(brentPM10) == 2 || parseInt(brentPM10) ==3){
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_green.png";
    } else if (parseInt(brentPM10) == 4 || parseInt(brentPM10) == 5 || parseInt(brentPM10) ==6) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_orange.png";
    } else if (parseInt(brentPM10) == 7 || parseInt(brentPM10) == 8 || parseInt(brentPM10) ==9 || parseInt(brentPM10) == 10) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_red.png";
    }
    //bromley
    const bromleyPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[1]["@AirQualityIndex"];
    if (parseInt(bromleyPM10) == 1 || parseInt(bromleyPM10) == 2 || parseInt(bromleyPM10) ==3){
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_green.png";
    } else if (parseInt(bromleyPM10) == 4 || parseInt(bromleyPM10) == 5 || parseInt(bromleyPM10) ==6) {
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_orange.png";
    } else if (parseInt(bromleyPM10) == 7 || parseInt(bromleyPM10) == 8 || parseInt(bromleyPM10) ==9 || parseInt(bromleyPM10) == 10) {
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_red.png";
    }
    //camden
    const camdenPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(camdenPM10) == 1 || parseInt(camdenPM10) == 2 || parseInt(camdenPM10) ==3){
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_green.png";
    } else if (parseInt(camdenPM10) == 4 || parseInt(camdenPM10) == 5 || parseInt(camdenPM10) ==6) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_orange.png";
    } else if (parseInt(camdenPM10) == 7 || parseInt(camdenPM10) == 8 || parseInt(camdenPM10) ==9 || parseInt(camdenPM10) == 10) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_red.png";
    }
    //city
    const imgsrccity = document.getElementById('city');
    imgsrccity.src = "./public/londonmaps/city_white.png";
    //croydon
    const croydonPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[3].Species[1]["@AirQualityIndex"];
    if (parseInt(croydonPM10) == 1 || parseInt(croydonPM10) == 2 || parseInt(croydonPM10) ==3){
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_green.png";
    } else if (parseInt(croydonPM10) == 4 || parseInt(croydonPM10) == 5 || parseInt(croydonPM10) ==6) {
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_orange.png";
    } else if (parseInt(croydonPM10) == 7 || parseInt(croydonPM10) == 8 || parseInt(croydonPM10) ==9 || parseInt(croydonPM10) == 10) {
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_red.png";
    }
    //ealing
    const ealingPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[8].Site[2].Species[1]["@AirQualityIndex"];
    if (parseInt(ealingPM10) == 1 || parseInt(ealingPM10) == 2 || parseInt(ealingPM10) ==3){
        const imgsrc6 = document.getElementById("ealing");
        imgsrc6.src = "./public/londonmaps/ealing_green.png";
    } else if (parseInt(ealingPM10) == 4 || parseInt(ealingPM10) == 5 || parseInt(ealingPM10) ==6) {
        const imgsrc6 = document.getElementById("ealing");
        imgsrc6.src = "./public/londonmaps/ealing_orange.png";
    } else if (parseInt(ealingPM10) == 7 || parseInt(ealingPM10) == 8 || parseInt(ealingPM10) ==9 || parseInt(ealingPM10) == 10) {
        const imgsrc6 = document.getElementById("ealing");
        imgsrc6.src = "./public/londonmaps/ealing_red.png";
    }
    //enfield
    const enfieldPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[9].Site[2].Species[1]["@AirQualityIndex"];
    if (parseInt(enfieldPM10) == 1 || parseInt(enfieldPM10) == 2 || parseInt(enfieldPM10) ==3){
        const imgsrc7 = document.getElementById("enfield");
        imgsrc7.src = "./public/londonmaps/enfield_green.png";
    } else if (parseInt(enfieldPM10) == 4 || parseInt(enfieldPM10) == 5 || parseInt(enfieldPM10) ==6) {
        const imgsrc7 = document.getElementById("enfield");
        imgsrc7.src = "./public/londonmaps/enfield_orange.png";
    } else if (parseInt(enfieldPM10) == 7 || parseInt(enfieldPM10) == 8 || parseInt(enfieldPM10) ==9 || parseInt(enfieldPM10) == 10) {
        const imgsrc7 = document.getElementById("enfield");
        imgsrc7.src = "./public/londonmaps/enfield_red.png";
    }
    //greenwich
    const greenwichPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[1]["@AirQualityIndex"];
    if (parseInt(greenwichPM10) == 1 || parseInt(greenwichPM10) == 2 || parseInt(greenwichPM10) ==3){
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_green.png";
    } else if (parseInt(greenwichPM10) == 4 || parseInt(greenwichPM10) == 5 || parseInt(greenwichPM10) ==6) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_orange.png";
    } else if (parseInt(greenwichPM10) == 7 || parseInt(greenwichPM10) == 8 || parseInt(greenwichPM10) ==9 || parseInt(greenwichPM10) == 10) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_red.png";
    }
    //hackney
    const hackneyPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[2]["@AirQualityIndex"];
    if (parseInt(hackneyPM10) == 1 || parseInt(hackneyPM10) == 2 || parseInt(hackneyPM10) ==3){
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_green.png";
    } else if (parseInt(hackneyPM10) == 4 || parseInt(hackneyPM10) == 5 || parseInt(hackneyPM10) ==6) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_orange.png";
    } else if (parseInt(hackneyPM10) == 7 || parseInt(hackneyPM10) == 8 || parseInt(hackneyPM10) ==9 || parseInt(hackneyPM10) == 10) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_red.png";
    }
    //hammersmith
    const imgsrchammersmith = document.getElementById('hammersmith');
    imgsrchammersmith.src = "./public/londonmaps/hammersmith_white.png";
    //haringey
    const imgsrcharingey = document.getElementById('haringey');
    imgsrcharingey.src = "./public/londonmaps/Haringey_white.png";
    //harrow
    const imgsrcharrow = document.getElementById('harrow');
    imgsrcharrow.src = "./public/londonmaps/harrow_white.png";
    //havering
    const haveringPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(haveringPM10) == 1 || parseInt(haveringPM10) == 2 || parseInt(haveringPM10) ==3){
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_green.png";
    } else if (parseInt(haveringPM10) == 4 || parseInt(haveringPM10) == 5 || parseInt(haveringPM10) ==6) {
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_orange.png";
    } else if (parseInt(haveringPM10) == 7 || parseInt(haveringPM10) == 8 || parseInt(haveringPM10) ==9 || parseInt(haveringPM10) == 10) {
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_red.png";
    }
    //hillingdon
    const hillingdonPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[2]["@AirQualityIndex"];
    if (parseInt(hillingdonPM10) == 1 || parseInt(hillingdonPM10) == 2 || parseInt(hillingdonPM10) ==3){
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_green.png";
    } else if (parseInt(hillingdonPM10) == 4 || parseInt(hillingdonPM10) == 5 || parseInt(hillingdonPM10) ==6) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_orange.png";
    } else if (parseInt(hillingdonPM10) == 7 || parseInt(hillingdonPM10) == 8 || parseInt(hillingdonPM10) ==9 || parseInt(hillingdonPM10) == 10) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_red.png";
    }
    //hounslow
    const imgsrchounslow = document.getElementById('hounslow');
    imgsrchounslow.src = "./public/londonmaps/hounslow_white.png"
    //islington
    const islingtonPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[18].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(islingtonPM10) == 1 || parseInt(islingtonPM10) == 2 || parseInt(islingtonPM10) ==3){
        const imgsrc13 = document.getElementById("islington");
        imgsrc13.src = "./public/londonmaps/islington_green.png";
    } else if (parseInt(islingtonPM10) == 4 || parseInt(islingtonPM10) == 5 || parseInt(islingtonPM10) ==6) {
        const imgsrc13 = document.getElementById("islington");
        imgsrc13.src = "./public/londonmaps/islington_orange.png";
    } else if (parseInt(islingtonPM10) == 7 || parseInt(islingtonPM10) == 8 || parseInt(islingtonPM10) ==9 || parseInt(islingtonPM10) == 10) {
        const imgsrc13 = document.getElementById("islington");
        imgsrc13.src = "./public/londonmaps/islington_red.png";
    }
    //kc
    const kcPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[1].Species[0]["@AirQualityIndex"];
    if (parseInt(kcPM10) == 1 || parseInt(kcPM10) == 2 || parseInt(kcPM10) ==3){
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_green.png";
    } else if (parseInt(kcPM10) == 4 || parseInt(kcPM10) == 5 || parseInt(kcPM10) ==6) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_orange.png";
    } else if (parseInt(kcPM10) == 7 || parseInt(kcPM10) == 8 || parseInt(kcPM10) ==9 || parseInt(kcPM10) == 10) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_red.png";
    }
    //kingston
    const kingstonPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(kingstonPM10) == 1 || parseInt(kingstonPM10) == 2 || parseInt(kingstonPM10) ==3){
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_green.png";
    } else if (parseInt(kingstonPM10) == 4 || parseInt(kingstonPM10) == 5 || parseInt(kingstonPM10) ==6) {
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_orange.png";
    } else if (parseInt(kingstonPM10) == 7 || parseInt(kingstonPM10) == 8 || parseInt(kingstonPM10) ==9 || parseInt(kingstonPM10) == 10) {
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_red.png";
    }
    //lambeth
    const lambethPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(lambethPM10) == 1 || parseInt(lambethPM10) == 2 || parseInt(lambethPM10) ==3){
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_green.png";
    } else if (parseInt(lambethPM10) == 4 || parseInt(lambethPM10) == 5 || parseInt(lambethPM10) ==6) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_orange.png";
    } else if (parseInt(lambethPM10) == 7 || parseInt(lambethPM10) == 8 || parseInt(lambethPM10) ==9 || parseInt(lambethPM10) == 10) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_red.png";
    }
    //lewisham
    const lewishamPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(lewishamPM10) == 1 || parseInt(lewishamPM10) == 2 || parseInt(lewishamPM10) ==3){
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_green.png";
    } else if (parseInt(lewishamPM10) == 4 || parseInt(lewishamPM10) == 5 || parseInt(lewishamPM10) ==6) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_orange.png";
    } else if (parseInt(lewishamPM10) == 7 || parseInt(lewishamPM10) == 8 || parseInt(lewishamPM10) ==9 || parseInt(lewishamPM10) == 10) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_red.png";
    }
    //merton
    const mertonPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[23].Site[0].Species["@AirQualityIndex"];
    if (parseInt(mertonPM10) == 1 || parseInt(mertonPM10) == 2 || parseInt(mertonPM10) ==3){
        const imgsrc18 = document.getElementById("merton");
        imgsrc18.src = "./public/londonmaps/merton_green.png";
    } else if (parseInt(mertonPM10) == 4 || parseInt(mertonPM10) == 5 || parseInt(mertonPM10) ==6) {
        const imgsrc18 = document.getElementById("merton");
        imgsrc18.src = "./public/londonmaps/merton_orange.png";
    } else if (parseInt(mertonPM10) == 7 || parseInt(mertonPM10) == 8 || parseInt(mertonPM10) ==9 || parseInt(mertonPM10) == 10) {
        const imgsrc18 = document.getElementById("merton");
        imgsrc18.src = "./public/londonmaps/merton_red.png";
    }
    //newham
    const newhamPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(newhamPM10) == 1 || parseInt(newhamPM10) == 2 || parseInt(newhamPM10) ==3){
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_green.png";
    } else if (parseInt(newhamPM10) == 4 || parseInt(newhamPM10) == 5 || parseInt(newhamPM10) ==6) {
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_orange.png";
    } else if (parseInt(newhamPM10) == 7 || parseInt(newhamPM10) == 8 || parseInt(newhamPM10) ==9 || parseInt(newhamPM10) == 10) {
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_red.png";
    }
    //redbridge
    const redbridgePM10 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[2]["@AirQualityIndex"];
    if (parseInt(redbridgePM10) == 1 || parseInt(redbridgePM10) == 2 || parseInt(redbridgePM10) ==3){
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_green.png";
    } else if (parseInt(redbridgePM10) == 4 || parseInt(redbridgePM10) == 5 || parseInt(redbridgePM10) ==6) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_orange.png";
    } else if (parseInt(redbridgePM10) == 7 || parseInt(redbridgePM10) == 8 || parseInt(redbridgePM10) ==9 || parseInt(redbridgePM10) == 10) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_red.png";
    }
    //richmond
    const richmondPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(richmondPM10) == 1 || parseInt(richmondPM10) == 2 || parseInt(richmondPM10) ==3){
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_green.png";
    } else if (parseInt(richmondPM10) == 4 || parseInt(richmondPM10) == 5 || parseInt(richmondPM10) ==6) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_orange.png";
    } else if (parseInt(richmondPM10) == 7 || parseInt(richmondPM10) == 8 || parseInt(richmondPM10) ==9 || parseInt(richmondPM10) == 10) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_red.png";
    }
    //southwark
    const southwarkPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[2]["@AirQualityIndex"];
    if (parseInt(southwarkPM10) == 1 || parseInt(southwarkPM10) == 2 || parseInt(southwarkPM10) ==3){
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_green.png";
    } else if (parseInt(southwarkPM10) == 4 || parseInt(southwarkPM10) == 5 || parseInt(southwarkPM10) ==6) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_orange.png";
    } else if (parseInt(southwarkPM10) == 7 || parseInt(southwarkPM10) == 8 || parseInt(southwarkPM10) ==9 || parseInt(southwarkPM10) == 10) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_red.png";
    }
    //sutton
    const suttonPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(suttonPM10) == 1 || parseInt(suttonPM10) == 2 || parseInt(suttonPM10) ==3){
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_green.png";
    } else if (parseInt(suttonPM10) == 4 || parseInt(suttonPM10) == 5 || parseInt(suttonPM10) ==6) {
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_orange.png";
    } else if (parseInt(suttonPM10) == 7 || parseInt(suttonPM10) == 8 || parseInt(suttonPM10) ==9 || parseInt(suttonPM10) == 10) {
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_red.png";
    }
    //towerhamlet
    const towerhamletPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(towerhamletPM10) == 1 || parseInt(towerhamletPM10) == 2 || parseInt(towerhamletPM10) ==3){
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_green.png";
    } else if (parseInt(towerhamletPM10) == 4 || parseInt(towerhamletPM10) == 5 || parseInt(towerhamletPM10) ==6) {
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_orange.png";
    } else if (parseInt(towerhamletPM10) == 7 || parseInt(towerhamletPM10) == 8 || parseInt(towerhamletPM10) ==9 || parseInt(towerhamletPM10) == 10) {
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_red.png";
    }
    //waltham
    const imgsrcwaltham = document.getElementById('walthamforest');
    imgsrcwaltham.src = "./public/londonmaps/walthamforest_white.png";
    //wandsworth
    const wandsworthPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(wandsworthPM10) == 1 || parseInt(wandsworthPM10) == 2 || parseInt(wandsworthPM10) ==3){
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_green.png";
    } else if (parseInt(wandsworthPM10) == 4 || parseInt(wandsworthPM10) == 5 || parseInt(wandsworthPM10) ==6) {
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_orange.png";
    } else if (parseInt(wandsworthPM10) == 7 || parseInt(wandsworthPM10) == 8 || parseInt(wandsworthPM10) ==9 || parseInt(wandsworthPM10) == 10) {
        const imgsrc25 = document.getElementById("wandsworth");
        imgsrc25.src = "./public/londonmaps/wandsworth_red.png";
    }
    //westminster
    const westminsterPM10 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(westminsterPM10) == 1 || parseInt(westminsterPM10) == 2 || parseInt(westminsterPM10) ==3){
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_green.png";
    } else if (parseInt(westminsterPM10) == 4 || parseInt(westminsterPM10) == 5 || parseInt(westminsterPM10) ==6) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_orange.png";
    } else if (parseInt(westminsterPM10) == 7 || parseInt(westminsterPM10) == 8 || parseInt(westminsterPM10) ==9 || parseInt(westminsterPM10) == 10) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_red.png";
    }


}


//for PM2.5 data display
async function setmapPM25(){
    handleButtonClick('PM2.5')
    const response = await fetch("https://api.erg.ic.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json");
    const apidata = await response.json();
    clear();
    //barking
    const imgsrcbarking = document.getElementById('barking');
    imgsrcbarking.src = "./public/londonmaps/Barking_white.png";
    //barnet
    const imgsrcbarnet = document.getElementById('barnet');
    imgsrcbarnet.src = "./public/londonmaps/barnet_white.png";
    //bexley
    const bexleyPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[3]["@AirQualityIndex"];
    if (parseInt(bexleyPM25) == 1 || parseInt(bexleyPM25) == 2 || parseInt(bexleyPM25) ==3){
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_green.png";
    } else if (parseInt(bexleyPM25) == 4 || parseInt(bexleyPM25) == 5 || parseInt(bexleyPM25) ==6) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_orange.png";
    } else if (parseInt(bexleyPM25) == 7 || parseInt(bexleyPM25) == 8 || parseInt(bexleyPM25) ==9 || parseInt(bexleyPM25) == 10) {
        const imgsrc1 = document.getElementById("bexley");
        imgsrc1.src = "./public/londonmaps/bexley_red.png";
    }
    //brent
    const brentPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[3]["@AirQualityIndex"];
    if (parseInt(brentPM25) == 1 || parseInt(brentPM25) == 2 || parseInt(brentPM25) ==3){
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_green.png";
    } else if (parseInt(brentPM25) == 4 || parseInt(brentPM25) == 5 || parseInt(brentPM25) ==6) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_orange.png";
    } else if (parseInt(brentPM25) == 7 || parseInt(brentPM25) == 8 || parseInt(brentPM25) ==9 || parseInt(brentPM25) == 10) {
        const imgsrc2 = document.getElementById("brent");
        imgsrc2.src = "./public/londonmaps/brent_red.png";
    }
    //bromley
    const bromleyPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[2]["@AirQualityIndex"];
    if (parseInt(bromleyPM25) == 1 || parseInt(bromleyPM25) == 2 || parseInt(bromleyPM25) ==3){
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_green.png";
    } else if (parseInt(bromleyPM25) == 4 || parseInt(bromleyPM25) == 5 || parseInt(bromleyPM25) ==6) {
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_orange.png";
    } else if (parseInt(bromleyPM25) == 7 || parseInt(bromleyPM25) == 8 || parseInt(bromleyPM25) ==9 || parseInt(bromleyPM25) == 10) {
        const imgsrc3 = document.getElementById("bromley");
        imgsrc3.src = "./public/londonmaps/bromley_red.png";
    }
    //camden
    const camdenPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[3]["@AirQualityIndex"];
    if (parseInt(camdenPM25) == 1 || parseInt(camdenPM25) == 2 || parseInt(camdenPM25) ==3){
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_green.png";
    } else if (parseInt(camdenPM25) == 4 || parseInt(camdenPM25) == 5 || parseInt(camdenPM25) ==6) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_orange.png";
    } else if (parseInt(camdenPM25) == 7 || parseInt(camdenPM25) == 8 || parseInt(camdenPM25) ==9 || parseInt(camdenPM25) == 10) {
        const imgsrc4 = document.getElementById("camden");
        imgsrc4.src = "./public/londonmaps/camden_red.png";
    }
    //city
    const imgsrccity = document.getElementById('city');
    imgsrccity.src = "./public/londonmaps/city_white.png";
    //croydon
    const croydonPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[2].Species["@AirQualityIndex"];
    if (parseInt(croydonPM25) == 1 || parseInt(croydonPM25) == 2 || parseInt(croydonPM25) ==3){
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_green.png";
    } else if (parseInt(croydonPM25) == 4 || parseInt(croydonPM25) == 5 || parseInt(croydonPM25) ==6) {
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_orange.png";
    } else if (parseInt(croydonPM25) == 7 || parseInt(croydonPM25) == 8 || parseInt(croydonPM25) ==9 || parseInt(croydonPM25) == 10) {
        const imgsrc5 = document.getElementById("croydon");
        imgsrc5.src = "./public/londonmaps/croydon_red.png";
    }
    //ealing
    const imgsrcealing = document.getElementById('ealing');
    imgsrcealing.src = "./public/londonmaps/ealing_white.png";
    //enfield
    const imgsrcenfield = document.getElementById('enfield');
    imgsrcenfield.src = "./public/londonmaps/enfield_white.png";
    //greenwich
    const greenwichPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[2]["@AirQualityIndex"];
    if (parseInt(greenwichPM25) == 1 || parseInt(greenwichPM25) == 2 || parseInt(greenwichPM25) ==3){
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_green.png";
    } else if (parseInt(greenwichPM25) == 4 || parseInt(greenwichPM25) == 5 || parseInt(greenwichPM25) ==6) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_orange.png";
    } else if (parseInt(greenwichPM25) == 7 || parseInt(greenwichPM25) == 8 || parseInt(greenwichPM25) ==9 || parseInt(greenwichPM25) == 10) {
        const imgsrc8 = document.getElementById("greenwich");
        imgsrc8.src = "./public/londonmaps/greenwich_red.png";
    }
    //hackney
    const hackneyPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[3]["@AirQualityIndex"];
    if (parseInt(hackneyPM25) == 1 || parseInt(hackneyPM25) == 2 || parseInt(hackneyPM25) ==3){
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_green.png";
    } else if (parseInt(hackneyPM25) == 4 || parseInt(hackneyPM25) == 5 || parseInt(hackneyPM25) ==6) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_orange.png";
    } else if (parseInt(hackneyPM25) == 7 || parseInt(hackneyPM25) == 8 || parseInt(hackneyPM25) ==9 || parseInt(hackneyPM25) == 10) {
        const imgsrc9 = document.getElementById("hackney");
        imgsrc9.src = "./public/londonmaps/hackney_red.png";
    }
    //hammersmith
    const imgsrchammersmith = document.getElementById('hammersmith');
    imgsrchammersmith.src = "./public/londonmaps/hammersmith_white.png";
    //haringey
    const imgsrcharingey = document.getElementById('haringey');
    imgsrcharingey.src = "./public/londonmaps/Haringey_white.png";
    //harrow
    const imgsrcharrow = document.getElementById('harrow');
    imgsrcharrow.src = "./public/londonmaps/harrow_white.png";
    //havering
    const haveringPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(haveringPM25) == 1 || parseInt(haveringPM25) == 2 || parseInt(haveringPM25) ==3){
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_green.png";
    } else if (parseInt(haveringPM25) == 4 || parseInt(haveringPM25) == 5 || parseInt(haveringPM25) ==6) {
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_orange.png";
    } else if (parseInt(haveringPM25) == 7 || parseInt(haveringPM25) == 8 || parseInt(haveringPM25) ==9 || parseInt(haveringPM25) == 10) {
        const imgsrc11 = document.getElementById("havering");
        imgsrc11.src = "./public/londonmaps/Havering_red.png";
    }
    //hillingdon
    const hillingdonPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[3]["@AirQualityIndex"];
    if (parseInt(hillingdonPM25) == 1 || parseInt(hillingdonPM25) == 2 || parseInt(hillingdonPM25) ==3){
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_green.png";
    } else if (parseInt(hillingdonPM25) == 4 || parseInt(hillingdonPM25) == 5 || parseInt(hillingdonPM25) ==6) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_orange.png";
    } else if (parseInt(hillingdonPM25) == 7 || parseInt(hillingdonPM25) == 8 || parseInt(hillingdonPM25) ==9 || parseInt(hillingdonPM25) == 10) {
        const imgsrc12 = document.getElementById("hillingdon");
        imgsrc12.src = "./public/londonmaps/hillingdon_red.png";
    }
    //hounslow
    const imgsrchounslow = document.getElementById('hounslow');
    imgsrchounslow.src = "./public/londonmaps/hounslow_white.png"
    //islington
    const imgsrcislington = document.getElementById('islington');
    imgsrcislington.src = "./public/londonmaps/islington_white.png";
    //kc
    const kcPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(kcPM25) == 1 || parseInt(kcPM25) == 2 || parseInt(kcPM25) ==3){
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_green.png";
    } else if (parseInt(kcPM25) == 4 || parseInt(kcPM25) == 5 || parseInt(kcPM25) ==6) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_orange.png";
    } else if (parseInt(kcPM25) == 7 || parseInt(kcPM25) == 8 || parseInt(kcPM25) ==9 || parseInt(kcPM25) == 10) {
        const imgsrc14 = document.getElementById("kc");
        imgsrc14.src = "./public/londonmaps/kc_red.png";
    }
    //kingston
    const kingstonPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[0].Species[1]["@AirQualityIndex"];
    if (parseInt(kingstonPM25) == 1 || parseInt(kingstonPM25) == 2 || parseInt(kingstonPM25) ==3){
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_green.png";
    } else if (parseInt(kingstonPM25) == 4 || parseInt(kingstonPM25) == 5 || parseInt(kingstonPM25) ==6) {
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_orange.png";
    } else if (parseInt(kingstonPM25) == 7 || parseInt(kingstonPM25) == 8 || parseInt(kingstonPM25) ==9 || parseInt(kingstonPM25) == 10) {
        const imgsrc15 = document.getElementById("kingston");
        imgsrc15.src = "./public/londonmaps/kingston_red.png";
    }
    //lambeth
    const lambethPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(lambethPM25) == 1 || parseInt(lambethPM25) == 2 || parseInt(lambethPM25) ==3){
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_green.png";
    } else if (parseInt(lambethPM25) == 4 || parseInt(lambethPM25) == 5 || parseInt(lambethPM25) ==6) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_orange.png";
    } else if (parseInt(lambethPM25) == 7 || parseInt(lambethPM25) == 8 || parseInt(lambethPM25) ==9 || parseInt(lambethPM25) == 10) {
        const imgsrc16 = document.getElementById("lambeth");
        imgsrc16.src = "./public/londonmaps/lambeth_red.png";
    }
    //lewisham
    const lewishamPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[3]["@AirQualityIndex"];
    if (parseInt(lewishamPM25) == 1 || parseInt(lewishamPM25) == 2 || parseInt(lewishamPM25) ==3){
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_green.png";
    } else if (parseInt(lewishamPM25) == 4 || parseInt(lewishamPM25) == 5 || parseInt(lewishamPM25) ==6) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_orange.png";
    } else if (parseInt(lewishamPM25) == 7 || parseInt(lewishamPM25) == 8 || parseInt(lewishamPM25) ==9 || parseInt(lewishamPM25) == 10) {
        const imgsrc17 = document.getElementById("lewisham");
        imgsrc17.src = "./public/londonmaps/lewisham_red.png";
    }
    //merton
    const imgsrcmerton = document.getElementById('merton');
    imgsrcmerton.src = "./public/londonmaps/merton_white.png";
    //newham
    const newhamPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(newhamPM25) == 1 || parseInt(newhamPM25) == 2 || parseInt(newhamPM25) ==3){
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_green.png";
    } else if (parseInt(newhamPM25) == 4 || parseInt(newhamPM25) == 5 || parseInt(newhamPM25) ==6) {
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_orange.png";
    } else if (parseInt(newhamPM25) == 7 || parseInt(newhamPM25) == 8 || parseInt(newhamPM25) ==9 || parseInt(newhamPM25) == 10) {
        const imgsrc19 = document.getElementById("newham");
        imgsrc19.src = "./public/londonmaps/newham_red.png";
    }
    //redbridge
    const redbridgePM25 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[3]["@AirQualityIndex"];
    if (parseInt(redbridgePM25) == 1 || parseInt(redbridgePM25) == 2 || parseInt(redbridgePM25) ==3){
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_green.png";
    } else if (parseInt(redbridgePM25) == 4 || parseInt(redbridgePM25) == 5 || parseInt(redbridgePM25) ==6) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_orange.png";
    } else if (parseInt(redbridgePM25) == 7 || parseInt(redbridgePM25) == 8 || parseInt(redbridgePM25) ==9 || parseInt(redbridgePM25) == 10) {
        const imgsrc20 = document.getElementById("redbridge");
        imgsrc20.src = "./public/londonmaps/redbridge_red.png";
    }
    //richmond
    const richmondPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[2].Species[1]["@AirQualityIndex"];
    if (parseInt(richmondPM25) == 1 || parseInt(richmondPM25) == 2 || parseInt(richmondPM25) ==3){
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_green.png";
    } else if (parseInt(richmondPM25) == 4 || parseInt(richmondPM25) == 5 || parseInt(richmondPM25) ==6) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_orange.png";
    } else if (parseInt(richmondPM25) == 7 || parseInt(richmondPM25) == 8 || parseInt(richmondPM25) ==9 || parseInt(richmondPM25) == 10) {
        const imgsrc21 = document.getElementById("richmond");
        imgsrc21.src = "./public/londonmaps/richmond_red.png";
    }
    //southwark
    const southwarkPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[3]["@AirQualityIndex"];
    if (parseInt(southwarkPM25) == 1 || parseInt(southwarkPM25) == 2 || parseInt(southwarkPM25) ==3){
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_green.png";
    } else if (parseInt(southwarkPM25) == 4 || parseInt(southwarkPM25) == 5 || parseInt(southwarkPM25) ==6) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_orange.png";
    } else if (parseInt(southwarkPM25) == 7 || parseInt(southwarkPM25) == 8 || parseInt(southwarkPM25) ==9 || parseInt(southwarkPM25) == 10) {
        const imgsrc22 = document.getElementById("southwark");
        imgsrc22.src = "./public/londonmaps/southwark_red.png";
    }
    //sutton
    const suttonPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[1].Species[1]["@AirQualityIndex"];
    if (parseInt(suttonPM25) == 1 || parseInt(suttonPM25) == 2 || parseInt(suttonPM25) ==3){
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_green.png";
    } else if (parseInt(suttonPM25) == 4 || parseInt(suttonPM25) == 5 || parseInt(suttonPM25) ==6) {
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_orange.png";
    } else if (parseInt(suttonPM25) == 7 || parseInt(suttonPM25) == 8 || parseInt(suttonPM25) ==9 || parseInt(suttonPM25) == 10) {
        const imgsrc23 = document.getElementById("sutton");
        imgsrc23.src = "./public/londonmaps/sutton_red.png";
    }
    //towerhamlet
    const towerhamletPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[2]["@AirQualityIndex"];
    if (parseInt(towerhamletPM25) == 1 || parseInt(towerhamletPM25) == 2 || parseInt(towerhamletPM25) ==3){
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_green.png";
    } else if (parseInt(towerhamletPM25) == 4 || parseInt(towerhamletPM25) == 5 || parseInt(towerhamletPM25) ==6) {
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_orange.png";
    } else if (parseInt(towerhamletPM25) == 7 || parseInt(towerhamletPM25) == 8 || parseInt(towerhamletPM25) ==9 || parseInt(towerhamletPM25) == 10) {
        const imgsrc24 = document.getElementById("towerhamlet");
        imgsrc24.src = "./public/londonmaps/towerhamlet_red.png";
    }
    //waltham
    const imgsrcwaltham = document.getElementById('walthamforest');
    imgsrcwaltham.src = "./public/londonmaps/walthamforest_white.png";
    //wandsworth
    const imgsrcwandsworth = document.getElementById('wandsworth');
    imgsrcwandsworth.src = "./public/londonmaps/wandsworth_white.png";
    //westminster
    const westminsterPM25 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[3]["@AirQualityIndex"];
    if (parseInt(westminsterPM25) == 1 || parseInt(westminsterPM25) == 2 || parseInt(westminsterPM25) ==3){
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_green.png";
    } else if (parseInt(westminsterPM25) == 4 || parseInt(westminsterPM25) == 5 || parseInt(westminsterPM25) ==6) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_orange.png";
    } else if (parseInt(westminsterPM25) == 7 || parseInt(westminsterPM25) == 8 || parseInt(westminsterPM25) ==9 || parseInt(westminsterPM25) == 10) {
        const imgsrc26 = document.getElementById("westminster");
        imgsrc26.src = "./public/londonmaps/westminster_red.png";
    }


}