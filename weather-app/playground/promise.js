 var AddNumbers=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a === "number" && typeof b === "number"){
                resolve(a+b)
            }
            else{
                reject('Not a number')
            }

        },2000)
     });

 };
/*
Resolve or Reject only one is called.
They are called only once.
They take only once argument.
Unlike callback which can be called multiple times.
You have different function to handle resolve and reject.
Once we get resolve the stage is called settled.
Until then it is called pending stage.
 */

/*
Chaining of Promises.
 */
AddNumbers(4,5).then((res)=>{
    console.log(res)
    return AddNumbers(res,'')
    }
).then((res)=>{
    console.log(res)
}).catch((errorMessage)=>{
    console.log(errorMessage);
});