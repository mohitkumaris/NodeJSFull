
'use strict'
console.log('Starting app js file');
const  fs= require('fs');
const _=require('lodash');
const yargs=require('yargs');
//const os=require('os');
const argv=yargs.argv;
const notes=require('./notes');

//console.log(process.argv);

var command=process.argv[2];
console.log("Command:",command);

if(command ==="add"){
    console.log("Adding new note");
    notes.addNote(argv.title,argv.body);

}else if(command === "list"){
    console.log("Listing all notes");
}
else if(command === "read"){
    console.log("Reading notes");
}
else if(command === "remove"){
    console.log("Removing notes");
}
else
{
    console.log("Command not recognized");
}

//var user=os.userInfo();
//console.log(user);

/*fs.appendFile('greetings.txt',`Hello ${user.username}`,function (err) {

    if(err){
        console.log('There is some error');
    }
     console.log('File is created with some entry');
});*/