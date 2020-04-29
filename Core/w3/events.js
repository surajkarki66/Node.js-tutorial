const fs = require('fs');
const rs = fs.createReadStream('./renamedFile.txt');
rs.on('open', ()=> {
    console.log('The file is opened');
});


// Events Module
const events = require('events');
const eventEmitter = new events.EventEmitter();

// Create an event handler
const myEventHandler = () => {
    console.log('I hear a scream!');
}

// Assign an event handler to a event
eventEmitter.on('scream', myEventHandler);

// Fire the scream event
eventEmitter.emit('scream');

