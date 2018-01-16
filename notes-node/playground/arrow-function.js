'use strict'
/*
multiple line arrow function
 */
var square=(x) => {
    var result=x*x;
    return result;
};

console.log(square(9));

/*
Single line Arrow function without return statement
 */

var squareLine=(x) => x*x;

console.log(squareLine(5));

/*
When single or one paramenter then no need for parenthesis
 */

var squareWithoutParanthesis=x => x*x;

console.log(squareWithoutParanthesis(4));

/*
Arrow function does not allow us to
 use this keyword.


 */

var user={
    name:'mohit',
    sayHi:() => {
        console.log(`Say hi ${this.name}`)
},
sayHiAlt(){
        console.log(`say hi alt ${this.name}`)
}
};

user.sayHi();
user.sayHiAlt();