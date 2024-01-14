async function setAPI(input1) {
    let API = 0;
    let APInumber = 0;
    if (input1.SO2 != '0') {
        const SO2 = parseInt(input1.SO2);
        API = API + SO2;
        APInumber = APInumber + 1;
    }
    if (input1.NO2 != '0') {
        const NO2 = parseInt(input1.NO2);
        API = API + NO2;
        APInumber = APInumber + 1;
    }
    if (input1.PM25 != '0') {
        const PM25 = parseInt(input1.PM25);
        API = API + PM25;
        APInumber = APInumber + 1;
    }
    if (input1.O3 != '0') {
        const O3 = parseInt(input1.O3);
        API = API + O3;
        APInumber = APInumber + 1;
    }
    if (input1.PM10 != '0') {
        const PM10 = parseInt(input1.PM10);
        API = API + PM10;
        APInumber = APInumber + 1;
    }
    let APIaverage = API / APInumber;
    let APIindex = APIaverage.toFixed(1);
    return APIindex
}

async function getAPI(input) {
    const response = await fetch("https://api.erg.ic.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json");
    const apidata = await response.json();
    //barking
    const barking = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    barking.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[0].Species[0]["@AirQualityIndex"];
    barking.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[0].Species[1]["@AirQualityIndex"];
    barking.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[1].Species[1]["@AirQualityIndex"];
    barking.AQI = setAPI(barking);
    if (input == "Barking") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = barking.AQI;
    }
    //barnet
    const barnet = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    barnet.AQI = setAPI(barnet);
    if (input == "Barnet") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = barnet.AQI;
    }
    //bexley
    const bexley = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    bexley.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[0]["@AirQualityIndex"];
    bexley.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[1]["@AirQualityIndex"];
    bexley.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[2]["@AirQualityIndex"];
    bexley.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[3]["@AirQualityIndex"];
    bexley.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[2].Species[2]["@AirQualityIndex"];
    bexley.AQI = setAPI(bexley);
    if (input == "Bexley") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = bexley.AQI;
    }
    //brent
    const brent = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    brent.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[1]["@AirQualityIndex"];
    brent.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[2]["@AirQualityIndex"];
    brent.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[3]["@AirQualityIndex"];
    brent.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[1].Species[0]["@AirQualityIndex"];
    brent.AQI = setAPI(brent);
    if (input == "Brent") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = brent.AQI;
    }
    //bromley
    const bromley = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    bromley.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[0]["@AirQualityIndex"];
    bromley.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[1]["@AirQualityIndex"];
    bromley.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[2]["@AirQualityIndex"];
    bromley.AQI = setAPI(bromley);
    if (input == "Bromley") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = bromley.AQI;
    }
    //camden
    const camden = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    camden.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[0]["@AirQualityIndex"];
    camden.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[1]["@AirQualityIndex"];
    camden.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[2]["@AirQualityIndex"];
    camden.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[3]["@AirQualityIndex"];
    camden.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[4]["@AirQualityIndex"];
    camden.AQI = setAPI(camden);
    if (input == "Camden") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = camden.AQI;
    }
    //city
    const city = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    city.AQI = setAPI(city);
    if (input == "City of London") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = city.AQI;
    }
    //croydon
    const croydon = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    croydon.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[1].Species["@AirQualityIndex"];
    croydon.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[2].Species["@AirQualityIndex"];
    croydon.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[3].Species[1]["@AirQualityIndex"];
    croydon.AQI = setAPI(croydon);
    if (input == "Croydon") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = croydon.AQI;
    }
    //ealing
    const ealing = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    ealing.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[8].Site[1].Species[0]["@AirQualityIndex"];
    ealing.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[8].Site[2].Species[1]["@AirQualityIndex"];
    ealing.AQI = setAPI(ealing);
    if (input == "Ealing") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = ealing.AQI;
    }
    //enfield
    const enfield = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    enfield.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[9].Site[0].Species["@AirQualityIndex"];
    enfield.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[9].Site[2].Species[1]["@AirQualityIndex"];
    enfield.AQI = setAPI(enfield);
    if (input == "Enfield") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = enfield.AQI;
    }
    //greenwich
    const greenwich = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    greenwich.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[0]["@AirQualityIndex"];
    greenwich.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[1]["@AirQualityIndex"];
    greenwich.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[2]["@AirQualityIndex"];
    greenwich.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[7].Species[4]["@AirQualityIndex"];
    greenwich.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[3].Species[1]["@AirQualityIndex"];
    greenwich.AQI = setAPI(greenwich);
    if (input == "Greenwich") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = greenwich.AQI;
    }
    //hackney
    const hackney = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    hackney.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[0]["@AirQualityIndex"];
    hackney.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[1]["@AirQualityIndex"];
    hackney.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[2]["@AirQualityIndex"];
    hackney.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[3]["@AirQualityIndex"];
    hackney.AQI = setAPI(hackney);
    if (input == "Hackney") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = hackney.AQI;
    }
    //hammersmith
    const hammersmith = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    hammersmith.AQI = setAPI(hammersmith);
    if (input == "Hammersmith") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = hammersmith.AQI;
    }

    //haringey
    const haringey = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    haringey.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[13].Site[1].Species[0]["@AirQualityIndex"];
    haringey.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[13].Site[1].Species[1]["@AirQualityIndex"];
    haringey.AQI = setAPI(haringey);
    if (input == "Haringey") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = haringey.AQI;
    }
    //harrow
    const harrow = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    harrow.AQI = setAPI(harrow);
    if (input == "Harrow") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = harrow.AQI;
    }

    //havering
    const havering = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    havering.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[1].Species[0]["@AirQualityIndex"];
    havering.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[1].Species[1]["@AirQualityIndex"];
    havering.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[0].Species[2]["@AirQualityIndex"];
    havering.AQI = setAPI(havering);
    if (input == "Havering") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = havering.AQI;
    }

    //hillingdon
    const hillingdon = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    hillingdon.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[0]["@AirQualityIndex"];
    hillingdon.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[1]["@AirQualityIndex"];
    hillingdon.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[2]["@AirQualityIndex"];
    hillingdon.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[3]["@AirQualityIndex"];
    hillingdon.AQI = setAPI(hillingdon);
    if (input == "Hillingdon") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = hillingdon.AQI;
    }

    //hounslow
    const hounslow = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    hounslow.AQI = setAPI(hounslow);
    if (input == "Hounslow") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = hounslow.AQI;
    }

    //islington
    const islington = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    islington.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[18].Site[0].Species[0]["@AirQualityIndex"];
    islington.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[18].Site[0].Species[1]["@AirQualityIndex"];
    islington.AQI = setAPI(islington);
    if (input == "Islington") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = islington.AQI;
    }

    //kc
    const kc = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    kc.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[0]["@AirQualityIndex"];
    kc.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[1]["@AirQualityIndex"];
    kc.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[2]["@AirQualityIndex"];
    kc.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[1].Species[0]["@AirQualityIndex"];
    kc.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[1].Species[1]["@AirQualityIndex"];
    kc.AQI = setAPI(kc);
    if (input == "Kensington and Chelsea") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = kc.AQI;
    }

    //kingston
    const kingston = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    kingston.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[0].Species[0]["@AirQualityIndex"];
    kingston.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[1].Species[1]["@AirQualityIndex"];
    kingston.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[0].Species[1]["@AirQualityIndex"];
    kingston.AQI = setAPI(kingston);
    if (input == "Kingston") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = kingston.AQI;
    }

    //lambeth
    const lambeth = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    lambeth.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[0]["@AirQualityIndex"];
    lambeth.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[1]["@AirQualityIndex"];
    lambeth.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[2]["@AirQualityIndex"];
    lambeth.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[1].Species[1]["@AirQualityIndex"];
    lambeth.AQI = setAPI(lambeth);
    if (input == "Lambeth") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = lambeth.AQI;
    }

    //lewisham
    const lewisham = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    lewisham.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[0]["@AirQualityIndex"];
    lewisham.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[1]["@AirQualityIndex"];
    lewisham.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[2]["@AirQualityIndex"];
    lewisham.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[3]["@AirQualityIndex"];
    lewisham.AQI = setAPI(lewisham);
    if (input == "Lewisham") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = lewisham.AQI;
    }

    //merton
    const merton = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    merton.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[23].Site[1].Species["@AirQualityIndex"];
    merton.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[23].Site[0].Species["@AirQualityIndex"];
    merton.AQI = setAPI(merton);
    if (input == "Merton") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = merton.AQI;
    }

    //newham
    const newham = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    newham.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[0]["@AirQualityIndex"];
    newham.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[1]["@AirQualityIndex"];
    newham.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[2]["@AirQualityIndex"];
    newham.AQI = setAPI(newham);
    if (input == "Newham") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = newham.AQI;
    }
    //redbridge
    const redbridge = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    redbridge.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[0]["@AirQualityIndex"];
    redbridge.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[1]["@AirQualityIndex"];
    redbridge.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[2]["@AirQualityIndex"];
    redbridge.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[3]["@AirQualityIndex"];
    redbridge.AQI = setAPI(redbridge);
    if (input == "Redbridge") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = redbridge.AQI;
    }

    //richmond
    const richmond = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    richmond.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[0].Species[0]["@AirQualityIndex"];
    richmond.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[1].Species[1]["@AirQualityIndex"];
    richmond.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[0].Species[1]["@AirQualityIndex"];
    richmond.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[2].Species[1]["@AirQualityIndex"];
    richmond.AQI = setAPI(richmond);
    if (input == "Richmond") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = richmond.AQI;
    }

    //southwark
    const southwark = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    southwark.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[0]["@AirQualityIndex"];
    southwark.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[1]["@AirQualityIndex"];
    southwark.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[2]["@AirQualityIndex"];
    southwark.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[3]["@AirQualityIndex"];
    southwark.AQI = setAPI(southwark);
    if (input == "Southwark") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = southwark.AQI;
    }

    //sutton
    const sutton = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    sutton.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[0].Species[0]["@AirQualityIndex"];
    sutton.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[0].Species[1]["@AirQualityIndex"];
    sutton.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[1].Species[1]["@AirQualityIndex"];
    sutton.AQI = setAPI(sutton);
    if (input == "Sutton") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = sutton.AQI;
    }

    //towerhamlet
    const towerhamlet = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    towerhamlet.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[0]["@AirQualityIndex"];
    towerhamlet.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[1]["@AirQualityIndex"];
    towerhamlet.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[2]["@AirQualityIndex"];
    towerhamlet.AQI = setAPI(towerhamlet);
    if (input == "Tower Hamlets") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = towerhamlet.AQI;
    }

    //waltham
    const waltham = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    waltham.AQI = setAPI(waltham);
    if (input == "Waltham Forest") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = waltham.AQI;
    }

    //wandsworth
    const wandsworth = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    wandsworth.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[0]["@AirQualityIndex"];
    wandsworth.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[1]["@AirQualityIndex"];
    wandsworth.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[1].Species[1]["@AirQualityIndex"];
    wandsworth.AQI = setAPI(wandsworth);
    if (input == "Wandsworth") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = wandsworth.AQI;
    }

    //westminster
    const westminster = {'SO2': '0', 'NO2': '0', 'O3': '0', 'PM10': '0', 'PM25': '0', 'AQI': '0'};
    westminster.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[0]["@AirQualityIndex"];
    westminster.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[1]["@AirQualityIndex"];
    westminster.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[2]["@AirQualityIndex"];
    westminster.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[3]["@AirQualityIndex"];
    westminster.AQI = setAPI(westminster);
    if (input == "Westminster") {
        var areaAQI = document.getElementById('AQInumber')
        areaAQI.innerText = westminster.AQI;
    }
}

// Update area name and AQI
var areaname = document.getElementById('areaname');
const areatag = localStorage.getItem('userarea');
areaname.innerText = areatag;
console.log(getAPI(areatag));


Notification.requestPermission().then((permission)=>{
        if(permission !== "granted"){
            alert("You need to allow permissions to receive warnings and dosage reminders!")
        }
    }
)

