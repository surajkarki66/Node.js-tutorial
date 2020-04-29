// Creating Files

const fs = require('fs');

fs.appendFile('newFile.txt', 'This is the content of my file.', (err) => {
    if (err) {
        console.log(`Error: ${err}`) ;
    }
    else {
        console.log('Saved!');
    }
   
});



// Opening a files!
fs.open('newFile.txt', 'r', (err, file) => {
    if (err) {
        console.log(`Error: ${err}`);
    }
    else {
        console.log(file);
    }
});

// Updating Files!

// Use fs.appendFile();



// Delete Files!

/*
fs.unlink('newFile.txt', (err)=> {
    if (err) {
        console.log(`Error: ${err}`);
    }
    else {
        console.log("Deleted!");
    }
});
*/


// Renaming Files

fs.rename('newFile.txt', 'renamedFile.txt', (err) => {
    if (err) {
        console.log(`Error: ${err}`);
    }
    else {
        console.log('File renamed');
    }
});



