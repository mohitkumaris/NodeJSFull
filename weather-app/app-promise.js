
/*
It makes xmlhttprequest from browser to server.

 */
const axios=require('axios');
const yargs=require('yargs');

var geocodeUrl='https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia';

axios.get(geocodeUrl).then((response)=>{


     let Latitude=response.data.results[0].geometry.location.lat;
     let Longitute=response.data.results[0].geometry.location.lng;

     let weatherUrl=`https://api.darksky.net/forecast/8d1efa12a529bd88104f1aad272eb990/${Latitude},${Longitute}`

    axios.get(weatherUrl).then((response)=>{

        console.log(response.data.currently.temperature);
    }).catch((errorweather)=>{

        console.log(errorweather);

    });

}).catch((error)=>{
          console.log(error);
});
