function avrgNO2(borough){
    let i = 0;
    let len = borough.length;
    let NO2 = 0;
    let NO2number = 0;
    for(; i<len; i++){
        if (borough[i].NO2 != '0'){
            const NO2value = parseInt(borough[i].NO2);
            NO2 = NO2 + NO2value;
            NO2number = NO2number + 1;
        }
    }
    let NO2average = NO2/NO2number;
    let NO2index = NO2average.toFixed(1);
    return NO2index
}
function avrgSO2(borough){
    let i = 0;
    let len = borough.length;
    let SO2 = 0;
    let SO2number = 0;
    for(; i<len; i++){
        if (borough[i].SO2 != '0'){
            const SO2value = parseInt(borough[i].SO2);
            SO2 = SO2 + SO2value;
            SO2number = SO2number + 1;
        }
    }
    let SO2average = SO2/SO2number;
    let SO2index = SO2average.toFixed(1);
    return SO2index
}
function avrgO3(borough){
    let i = 0;
    let len = borough.length;
    let O3 = 0;
    let O3number = 0;
    for(; i<len; i++){
        if (borough[i].O3 != '0'){
            const O3value = parseInt(borough[i].O3);
            O3 = O3 + O3value;
            O3number = O3number + 1;
        }
    }
    let O3average = O3/O3number;
    let O3index = O3average.toFixed(1);
    return O3index
}
function avrgPM10(borough){
    let i = 0;
    let len = borough.length;
    let PM10 = 0;
    let PM10number = 0;
    for(; i<len; i++){
        if (borough[i].PM10 != '0'){
            const PM10value = parseInt(borough[i].PM10);
            PM10 = PM10 + PM10value;
            PM10number = PM10number + 1;
        }
    }
    let PM10average = PM10/PM10number;
    let PM10index = PM10average.toFixed(1);
    return PM10index
}
function avrgPM25(borough){
    let i = 0;
    let len = borough.length;
    let PM25 = 0;
    let PM25number = 0;
    for(; i<len; i++){
        if (borough[i].PM25 != '0'){
            const PM25value = parseInt(borough[i].PM25);
            PM25 = PM25 + PM25value;
            PM25number = PM25number + 1;
        }
    }
    let PM25average = PM25/PM25number;
    let PM25index = PM25average.toFixed(1);
    return PM25index
}
function avrgAQI(borough){
    let i = 0;
    let len = borough.length;
    let AQI = 0;
    let AQInumber = 0;
    for(; i<len; i++){
        if (borough[i].AQI != '0' && borough[i].AQI != 'NaN'){
            const AQIvalue = parseInt(borough[i].AQI);
            AQI = AQI + AQIvalue;
            AQInumber = AQInumber + 1;
        }
    }
    let AQIaverage = AQI/AQInumber;
    let AQIindex = AQIaverage.toFixed(1);
    return AQIindex
}
//setAPI gets the values of the pollutants in the area into an average API
function setAPI(input1){
    let API = 0;
    let APInumber = 0;
    if (input1.SO2 != '0'){
        const SO2 = parseInt(input1.SO2);
        API = API + SO2;
        APInumber = APInumber + 1;
    }
    if (input1.NO2 != '0'){
        const NO2 = parseInt(input1.NO2);
        API = API + NO2;
        APInumber = APInumber + 1;
    }
    if (input1.PM25 != '0'){
        const PM25 = parseInt(input1.PM25);
        API = API + PM25;
        APInumber = APInumber + 1;
    }
    if (input1.O3 != '0'){
        const O3 = parseInt(input1.O3);
        API = API + O3;
        APInumber = APInumber + 1;
    }
    if (input1.PM10 != '0'){
        const PM10 = parseInt(input1.PM10);
        API = API + PM10;
        APInumber = APInumber + 1;
    }
    let APIaverage = API/APInumber;
    let APIindex = APIaverage.toFixed(1);
    return APIindex
}
async function setlocation(input){
    const response = await fetch("https://api.erg.ic.ac.uk/AirQuality/Hourly/MonitoringIndex/GroupName=London/Json");
    const apidata = await response.json();
    //barking
    const barking = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    barking.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[0].Species[0]["@AirQualityIndex"];
    barking.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[0].Species[1]["@AirQualityIndex"];
    barking.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[0].Site[1].Species[1]["@AirQualityIndex"];
    barking.AQI = setAPI(barking);
    if (input =="Barking"){
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Barking";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = barking.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = barking.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = barking.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = barking.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = barking.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = barking.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }
    //barnet
    const barnet = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    barnet.AQI = setAPI(barnet);
    if (input =="Barnet"){
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Barnet";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = barnet.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = barnet.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = barnet.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = barnet.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = barnet.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = barnet.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }
    //bexley
    const bexley = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    bexley.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[0]["@AirQualityIndex"];
    bexley.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[1]["@AirQualityIndex"];
    bexley.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[2]["@AirQualityIndex"];
    bexley.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[0].Species[3]["@AirQualityIndex"];
    bexley.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[2].Site[2].Species[2]["@AirQualityIndex"];
    bexley.AQI =  setAPI(bexley);
    if (input =="Bexley") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Bexley";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = bexley.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = bexley.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = bexley.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = bexley.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = bexley.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = bexley.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }
    //brent
    const brent = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    brent.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[1]["@AirQualityIndex"];
    brent.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[2]["@AirQualityIndex"];
    brent.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[0].Species[3]["@AirQualityIndex"];
    brent.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[3].Site[1].Species[0]["@AirQualityIndex"];
    brent.AQI = setAPI(brent);
    if (input =="Brent") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Brent";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = brent.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = brent.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = brent.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = brent.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = brent.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = brent.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }
    //bromley
    const bromley = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    bromley.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[0]["@AirQualityIndex"];
    bromley.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[1]["@AirQualityIndex"];
    bromley.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[4].Site.Species[2]["@AirQualityIndex"];
    bromley.AQI = setAPI(bromley);
    if (input =="Bromley") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Bromley";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = bromley.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = bromley.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = bromley.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = bromley.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = bromley.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = bromley.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }
    //camden
    const camden = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    camden.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[0]["@AirQualityIndex"];
    camden.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[1]["@AirQualityIndex"];
    camden.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[2]["@AirQualityIndex"];
    camden.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[3]["@AirQualityIndex"];
    camden.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[5].Site[0].Species[4]["@AirQualityIndex"];
    camden.AQI = setAPI(camden);
    if (input =="Camden") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Camden";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = camden.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = camden.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = camden.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = camden.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = camden.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = camden.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }
    //city
    const city = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    city.AQI = setAPI(city);
    if (input =="City of London") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "City of London";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = city.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = city.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = city.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = city.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = city.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = city.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }
    //croydon
    const croydon = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    croydon.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[1].Species["@AirQualityIndex"];
    croydon.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[2].Species["@AirQualityIndex"];
    croydon.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[7].Site[3].Species[1]["@AirQualityIndex"];
    croydon.AQI = setAPI(croydon);
    if (input =="Croydon") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Croydon";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = croydon.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = croydon.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = croydon.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = croydon.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = croydon.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = croydon.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }
    //ealing
    const ealing = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    ealing.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[8].Site[1].Species[0]["@AirQualityIndex"];
    ealing.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[8].Site[2].Species[1]["@AirQualityIndex"];
    ealing.AQI = setAPI(ealing);
    if (input =="Ealing") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Ealing";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = ealing.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = ealing.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = ealing.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = ealing.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = ealing.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = ealing.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }
    //enfield
    const enfield = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    enfield.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[9].Site[0].Species["@AirQualityIndex"];
    enfield.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[9].Site[2].Species[1]["@AirQualityIndex"];
    enfield.AQI = setAPI(enfield);
    if (input =="Enfield") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Enfield";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = enfield.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = enfield.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = enfield.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = enfield.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = enfield.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = enfield.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }
    //greenwich
    const greenwich = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    greenwich.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[0]["@AirQualityIndex"];
    greenwich.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[1]["@AirQualityIndex"];
    greenwich.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[2].Species[2]["@AirQualityIndex"];
    greenwich.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[7].Species[4]["@AirQualityIndex"];
    greenwich.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[10].Site[3].Species[1]["@AirQualityIndex"];
    greenwich.AQI = setAPI(greenwich);
    if (input =="Greenwich") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Greenwich";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = greenwich.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = greenwich.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = greenwich.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = greenwich.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = greenwich.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = greenwich.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }
    //hackney
    const hackney = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    hackney.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[0]["@AirQualityIndex"];
    hackney.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[1]["@AirQualityIndex"];
    hackney.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[2]["@AirQualityIndex"];
    hackney.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[11].Site.Species[3]["@AirQualityIndex"];
    hackney.AQI = setAPI(hackney);
    if (input =="Hackney") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Hackney";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = hackney.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = hackney.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = hackney.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = hackney.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = hackney.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = hackney.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }
    //hammersmith
    const hammersmith = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    hammersmith.AQI = setAPI(hammersmith);
    if (input =="Hammersmith") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Hammersmith";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = hammersmith.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = hammersmith.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = hammersmith.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = hammersmith.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = hammersmith.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = hammersmith.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //haringey
    const haringey = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    haringey.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[13].Site[1].Species[0]["@AirQualityIndex"];
    haringey.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[13].Site[1].Species[1]["@AirQualityIndex"];
    haringey.AQI = setAPI(haringey);
    if (input =="Haringey") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Haringey";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = haringey.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = haringey.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = haringey.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = haringey.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = haringey.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = haringey.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }
    //harrow
    const harrow = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    harrow.AQI = setAPI(harrow);
    if (input =="Harrow") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Harrow";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = harrow.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = harrow.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = harrow.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = harrow.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = harrow.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = harrow.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //havering
    const havering = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    havering.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[1].Species[0]["@AirQualityIndex"];
    havering.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[1].Species[1]["@AirQualityIndex"];
    havering.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[15].Site[0].Species[2]["@AirQualityIndex"];
    havering.AQI = setAPI(havering);
    if (input =="Havering") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Havering";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = havering.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = havering.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = havering.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = havering.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = havering.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = havering.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //hillingdon
    const hillingdon = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    hillingdon.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[0]["@AirQualityIndex"];
    hillingdon.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[1]["@AirQualityIndex"];
    hillingdon.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[2]["@AirQualityIndex"];
    hillingdon.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[16].Site[1].Species[3]["@AirQualityIndex"];
    hillingdon.AQI = setAPI(hillingdon);
    if (input =="Hillingdon") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Hillingdon";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = hillingdon.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = hillingdon.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = hillingdon.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = hillingdon.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = hillingdon.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = hillingdon.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //hounslow
    const hounslow = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    hounslow.AQI = setAPI(hounslow);
    if (input =="Hounslow") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Hounslow";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = hounslow.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = hounslow.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = hounslow.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = hounslow.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = hounslow.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = hounslow.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //islington
    const islington = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    islington.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[18].Site[0].Species[0]["@AirQualityIndex"];
    islington.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[18].Site[0].Species[1]["@AirQualityIndex"];
    islington.AQI = setAPI(islington);
    if (input =="Islington") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Islington";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = islington.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = islington.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = islington.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = islington.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = islington.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = islington.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //kc
    const kc = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    kc.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[0]["@AirQualityIndex"];
    kc.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[1]["@AirQualityIndex"];
    kc.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[0].Species[2]["@AirQualityIndex"];
    kc.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[1].Species[0]["@AirQualityIndex"];
    kc.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[19].Site[1].Species[1]["@AirQualityIndex"];
    kc.AQI = setAPI(kc);
    if (input =="Kensington and Chelsea") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Kensington & Chelsea";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = kc.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = kc.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = kc.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = kc.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = kc.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = kc.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //kingston
    const kingston = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    kingston.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[0].Species[0]["@AirQualityIndex"];
    kingston.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[1].Species[1]["@AirQualityIndex"];
    kingston.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[20].Site[0].Species[1]["@AirQualityIndex"];
    kingston.AQI = setAPI(kingston);
    if (input =="Kingston") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Kingston";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = kingston.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = kingston.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = kingston.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = kingston.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = kingston.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = kingston.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //lambeth
    const lambeth = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    lambeth.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[0]["@AirQualityIndex"];
    lambeth.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[1]["@AirQualityIndex"];
    lambeth.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[0].Species[2]["@AirQualityIndex"];
    lambeth.SO2 = apidata.HourlyAirQualityIndex.LocalAuthority[21].Site[1].Species[1]["@AirQualityIndex"];
    lambeth.AQI = setAPI(lambeth);
    if (input =="Lambeth") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Lambeth";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = lambeth.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = lambeth.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = lambeth.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = lambeth.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = lambeth.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = lambeth.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //lewisham
    const lewisham = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    lewisham.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[0]["@AirQualityIndex"];
    lewisham.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[1]["@AirQualityIndex"];
    lewisham.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[2]["@AirQualityIndex"];
    lewisham.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[22].Site[0].Species[3]["@AirQualityIndex"];
    lewisham.AQI = setAPI(lewisham);
    if (input =="Lewisham") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Lewisham";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = lewisham.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = lewisham.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = lewisham.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = lewisham.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = lewisham.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = lewisham.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //merton
    const merton = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    merton.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[23].Site[1].Species["@AirQualityIndex"];
    merton.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[23].Site[0].Species["@AirQualityIndex"];
    merton.AQI = setAPI(merton);
    if (input =="Merton") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Merton";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = merton.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = merton.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = merton.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = merton.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = merton.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = merton.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //newham
    const newham = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    newham.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[0]["@AirQualityIndex"];
    newham.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[1]["@AirQualityIndex"];
    newham.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[24].Site[0].Species[2]["@AirQualityIndex"];
    newham.AQI = setAPI(newham);
    if (input =="Newham") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Newham";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = newham.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = newham.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = newham.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = newham.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = newham.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = newham.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }
    //redbridge
    const redbridge = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    redbridge.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[0]["@AirQualityIndex"];
    redbridge.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[1]["@AirQualityIndex"];
    redbridge.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[2]["@AirQualityIndex"];
    redbridge.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[25].Site[1].Species[3]["@AirQualityIndex"];
    redbridge.AQI = setAPI(redbridge);
    if (input =="Redbridge") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Redbridge";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = redbridge.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = redbridge.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = redbridge.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = redbridge.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = redbridge.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = redbridge.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //richmond
    const richmond = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    richmond.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[0].Species[0]["@AirQualityIndex"];
    richmond.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[1].Species[1]["@AirQualityIndex"];
    richmond.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[0].Species[1]["@AirQualityIndex"];
    richmond.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[26].Site[2].Species[1]["@AirQualityIndex"];
    richmond.AQI = setAPI(richmond);
    if (input =="Richmond") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Richmond";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = richmond.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = richmond.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = richmond.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = richmond.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = richmond.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = richmond.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //southwark
    const southwark = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    southwark.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[0]["@AirQualityIndex"];
    southwark.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[1]["@AirQualityIndex"];
    southwark.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[2]["@AirQualityIndex"];
    southwark.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[27].Site[1].Species[3]["@AirQualityIndex"];
    southwark.AQI = setAPI(southwark);
    if (input =="Southwark") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Southwark";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = southwark.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = southwark.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = southwark.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = southwark.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = southwark.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = southwark.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //sutton
    const sutton = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    sutton.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[0].Species[0]["@AirQualityIndex"];
    sutton.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[0].Species[1]["@AirQualityIndex"];
    sutton.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[28].Site[1].Species[1]["@AirQualityIndex"];
    sutton.AQI = setAPI(sutton);
    if (input =="Sutton") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Sutton";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = sutton.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = sutton.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = sutton.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = sutton.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = sutton.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = sutton.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //towerhamlet
    const towerhamlet = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    towerhamlet.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[0]["@AirQualityIndex"];
    towerhamlet.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[1]["@AirQualityIndex"];
    towerhamlet.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[29].Site[0].Species[2]["@AirQualityIndex"];
    towerhamlet.AQI = setAPI(towerhamlet);
    if (input =="Tower Hamlets") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Tower Hamlets";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = towerhamlet.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = towerhamlet.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = towerhamlet.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = towerhamlet.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = towerhamlet.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = towerhamlet.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //waltham
    const waltham = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    waltham.AQI = setAPI(waltham);
    if (input =="Waltham Forest") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Waltham Forest";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = waltham.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = waltham.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = waltham.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = waltham.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = waltham.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = waltham.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //wandsworth
    const wandsworth = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    wandsworth.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[0]["@AirQualityIndex"];
    wandsworth.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[0].Species[1]["@AirQualityIndex"];
    wandsworth.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[31].Site[1].Species[1]["@AirQualityIndex"];
    wandsworth.AQI = setAPI(wandsworth);
    if (input =="Wandsworth") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Wandsworth";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = wandsworth.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = wandsworth.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = wandsworth.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = wandsworth.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = wandsworth.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = wandsworth.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }

    //westminster
    const westminster = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    westminster.NO2 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[0]["@AirQualityIndex"];
    westminster.O3 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[1]["@AirQualityIndex"];
    westminster.PM10 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[2]["@AirQualityIndex"];
    westminster.PM25 = apidata.HourlyAirQualityIndex.LocalAuthority[32].Site[0].Species[3]["@AirQualityIndex"];
    westminster.AQI = setAPI(westminster);
    if (input =="Westminster") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "Westminster";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = westminster.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = westminster.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = westminster.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = westminster.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = westminster.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = westminster.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI shows the average of all measured pollutants in "+ input +". 0 & Nan means no measured data"
    }
    let borough = [barking, barnet, bexley, brent, bromley, camden, city, croydon, ealing, enfield, greenwich, hackney, hammersmith, haringey, harrow, havering, hillingdon, hounslow, islington, kc, kingston, lambeth, lewisham, merton, newham, redbridge, richmond, southwark, sutton, towerhamlet, waltham, wandsworth, westminster];
    const London = {'SO2':'0','NO2':'0','O3':'0','PM10':'0','PM25':'0','AQI':'0'};
    London.SO2 = avrgSO2(borough);
    London.NO2 = avrgNO2(borough);
    London.O3 = avrgO3(borough);
    London.PM10 = avrgPM10(borough);
    London.PM25 = avrgPM25(borough);
    London.AQI = avrgAQI(borough);
    if (input =="London") {
        const titletext = document.getElementById("areaVar");
        titletext.innerText = "London";
        const NO2value = document.getElementById("NO2");
        NO2value.innerText = London.NO2;
        const SO2value = document.getElementById("SO2");
        SO2value.innerText = London.SO2;
        const O3value = document.getElementById("O3");
        O3value.innerText = London.O3;
        const PM10value = document.getElementById("PM10");
        PM10value.innerText = London.PM10;
        const PM25value = document.getElementById("PM25");
        PM25value.innerText = London.PM25;
        const APIvalue = document.getElementById("aqiindex");
        APIvalue.innerText = London.AQI;
        const insight = document.getElementById("notif");
        insight.innerText = "AQI and pollutant data shows the average of all boroughs in "+ input +". 0 & Nan means no measured data"
    }


}
setlocation('London');
const areaname = localStorage.getItem('areaname');
localStorage.clear();
setlocation(areaname);