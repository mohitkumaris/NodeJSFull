
    console.log('starting up the app');




setTimeout(()=>{

    console.log('this will after 2 seconds asychronously')
},2000);

// ES 6, block level scope using let.
for(var i=1;i<=5;i++){

    let x=i;
    setTimeout(() => {
        console.log(x);
    }, 3000)

}

console.log('ending up');

setTimeout(()=>{

    console.log('This is done for 0 milliseconds');
    },0
);




/*
In the example above we have
call stack
node api
callback queue
event loop

Now the callstack is the 1st thing where code goes as it is stack so
last in first out works. So synchronous code works as they should
but when there is async code it goes to node api and then
goes to callback queue and wait there until all synchronous code finished up
or call stack is empty. If its not empty async code stays at
callback queue , as it goes empty event loop take
the code to call stack and then the callback code executes.

Node uses libuv.org behind the scenes to manage the asynchronous I/O.
So even single thread node can run code and event loop at the same time.
 */