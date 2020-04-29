// Event is a signal that something has happened
const EventEmitter = require('events');
const emitter = new EventEmitter();

// Register a listner

emitter.on('messageLogging', (arg) => {
    console.log('Listner calling', arg)
})
emitter.on('messageLogged', (arg) => {
    console.log('Listner called', arg);
});



// Raise : logging (data: message)
emitter.emit('messageLogging', {data: 'message is loading'});

// Raise an event
emitter.emit('messageLogged', {id: 1, url: 'http://'}); // Making a noise , produce signaling


