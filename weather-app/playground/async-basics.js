console.log('starting up the app');

setTimeout(()=>{

    console.log('this will after 2 seconds asychronously')
},2000);

setTimeout(()=>{

    console.log('This is done for 0 milliseconds');
    },0
);

function print(x) {

    console.log(x);
}
// ES 6 block level scope using let.
for(var i=1;i<=5;i++){

     let x=i;
        setTimeout(() => {
            print(x)
        }, 3000)

}

console.log('ending up');

/*
In the example above we have
call stack
node api
callback queue
event loop

now the callstack is the 1st thing where code goes as it is stack so
last in first out works. So synchronous code works as they should
but when there is async code it goes to node api and then
goes to callback queue and wait there until all synchronous code finished up
or call stack is empty. If its not empty async code stays at
callback queue , as it goes empty event loop take
the code to call stack and then the callback code executes.
 */