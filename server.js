
const express=require('express');

var app=express();
const port=process.env.PORT || 4949;
// Its uses middleware.
app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{

    var date= new Date().toString();
    console.log(`Date : ${date} for request:${req.method}`)
next();
});

app.get('/',(req,res)=>{

    res.send({

        name:'mohit',
        age:33
    })
});

app.get('/about',(req,res)=>{

    res.send({

        about:'about page',

    })
});


app.listen(port,()=>{
    console.log('Server is up and running.')
});