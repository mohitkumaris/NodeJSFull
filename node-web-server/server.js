
const express=require('express');

var app=express();

// Its uses middleware.
app.use(express.static(__dirname + '/public'));


app.get('/',(req,res)=>{

    res.send({

        name:'mohit',
        age:33
    })
});

app.listen(4949,()=>{
    console.log('Server is up and running.')
});