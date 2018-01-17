const request=require('request');


var geoCodeAddress=(callback)=>{
request(
        {
            url:'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia',
            json:true
        },(error,response,body)=>{
            if(error){
               callback('There is some error');
            }
            else {
                 callback('',{
                     Latitude:body.results[0].geometry.location.lat,
                     Longitute:body.results[0].geometry.location.lng
                 })
            }

        }

    )

};

module.exports={
    geoCodeAddress
}

// 8d1efa12a529bd88104f1aad272eb990