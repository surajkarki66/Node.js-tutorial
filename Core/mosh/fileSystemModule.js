const fs = require('fs');

// Sync method

//const files = fs.readdirSync('./');
//console.log(files);

// Async method

fs.readdir('./', function(err, files) {
    if (err) {
        console.log('Error ', err);
    }
    else {
        console.log('Result:', files);
    }
});