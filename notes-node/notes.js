console.log('Starting notes file');

const fs=require('fs');

var addNote = (title,body) =>{

    var notes=[];
    var note={
        title,
        body
    }

    try{

        var notesString=fs.readFileSync('notes-data.json');
        notes=JSON.parse(notesString);
    }
    catch(e){



    }
 // ES6 arrow function.
      var duplicateNotes=notes.filter((note) => note.title === title);

    if(duplicateNotes.length ===0) {
        notes.push(note);

        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
}

module.exports={
    addNote
};
