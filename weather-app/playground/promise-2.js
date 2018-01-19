var request=require('request')

var geoCodeAddress=(address)=>{

    return new Promise((resolve,reject)=>{

        request({

            url:`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            json:true

        },(error,response,body)=>{
            if(error){

                reject(error);
            }
            else {
                resolve(body.results[0].geometry.location.lat)
            }
        });

    });

};

geoCodeAddress(1301).then((latitude)=>{
    console.log(latitude)
}
).catch((errorMessage)=>{
    console.log(errorMessage);
});