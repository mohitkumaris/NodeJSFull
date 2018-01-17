const request=require('request');


var getWeather=(lat,longi,callback)=>{
    request(
        {
            url:`https://api.darksky.net/forecast/8d1efa12a529bd88104f1aad272eb990/${lat},${longi}`,
            json:true
        },(error,response,body)=>{
            if(error){
                callback('There is some error');

            }
            else {
              callback('',body.currently.temperature);
            }

        }

    )

};

module.exports={
    getWeather
}

// 8d1efa12a529bd88104f1aad272eb990