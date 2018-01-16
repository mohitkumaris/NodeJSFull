console.log('starting up the app');

setTimeout(()=>{

    console.log('this will call asychronously')
},2000);

setTimeout(()=>{

    console.log('This is done for 0 milliseconds');
    },0
);

function print(x) {

    console.log(x);
}

for(var i=1;i<=5;i++){

     let x=i;
        setTimeout(() => {
            print(x)
        }, 2000)

}

console.log('ending up');