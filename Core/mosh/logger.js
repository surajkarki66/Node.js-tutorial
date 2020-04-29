const EventEmitter = require('events');

var url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
    log(message) {
    // send an http request
    console.log(message);

    // Raise an event
    this.emit('messageLogged', {id: 1, url: url});
}

}


//module.exports.log = log; // exporting object that store function
module.exports = Logger;  // Exporting single function

// Note 
// node doesnt directly runs this code. It wraps this code in the function
