
const geocode=require('./geocode/geocode');
const weather=require('./weather/weather');

geocode.geoCodeAddress((error,resultsgeocode)=>{
    if(error){
        console.log(error)
    }
    else {
        //console.log(resultsgeocode);
        weather.getWeather(resultsgeocode.Latitude,resultsgeocode.Longitute,(error,resultsweather)=>{
            if(error){
                console.log(error)
            }
            else{
                console.log(resultsweather);
            }


        });
    }

});

