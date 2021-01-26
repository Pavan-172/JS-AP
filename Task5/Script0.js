var requestCountryData = new XMLHttpRequest();

requestCountryData.open('GET', 'https://restcountries.eu/rest/v2/all',true);

requestCountryData.send();

requestCountryData.onload = function(){
    
    var  countryData= JSON.parse(this.response);   
    
    for(i=0;i<countryData.length;i++){
        try{
        var countryName = countryData[i].name;
        var latLong = countryData[i].latlng;
        if(latLong.length === 0) 
        throw new Error("Lat Long not found");
        //sending Country name and location to weather data api
        weatherData(countryName, ...latLong);
        }
        catch(e){
            console.log('Invalid data country: ' + countryName + ' ' + e.message);
        }
    }
}

//function to get current temperature
var weatherData = function(name, lat , lng){

    var apiKey = '67f8cca25a8841a76ee7e1d792e8bfe8';
    var url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;
   
    var requestWeatherData = new XMLHttpRequest();
    
    requestWeatherData.open('GET', url ,true);

    requestWeatherData.send();
 
    requestWeatherData.onload = function(){

        try{
        var countryWeatherData = JSON.parse(this.response);
        console.log(`${name} : ${countryWeatherData.main.temp}`);
        }

        catch(e){
            console.log('Invalid API ' + name);
        }
    }

    
    

}