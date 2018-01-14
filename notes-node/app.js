
'use strict'

const  fs= require('fs');
const os=require('os');
const notes=require('./notes');
const _=require('lodash');

var user=os.userInfo();

console.log(notes.AddNumbers(7,6));

console.log(_.isString('Yeah'));

var FilteredArray=_.uniq([1,2,1,2,3,4,5,6]);

console.log(FilteredArray);

var users = [
    { 'user': 'fred',   'age': 48 },
    { 'user': 'barney', 'age': 36 },
    { 'user': 'fred',   'age': 40 },
    { 'user': 'barney', 'age': 34 }
];

console.log(_.sortBy(users,['user','age']));


//console.log(user);

/*fs.appendFile('greetings.txt',`Hello ${user.username}`,function (err) {

    if(err){
        console.log('There is some error');
    }
     console.log('File is created with some entry');
});*/