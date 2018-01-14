
'use strict'

const  fs= require('fs');

fs.appendFile('greetings.txt','Hello world',function (err) {

    if(err){
        console.log('There is some error');
    }
     console.log('File is created with some entry');
});