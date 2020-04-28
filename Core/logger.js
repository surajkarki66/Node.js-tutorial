var url = 'http://mylogger.io/log';

function log(message) {
    // send an http request
    console.log(message);
}

// These are private var and function

module.exports.log = log; // making log function public
module.exports.urlEndpoint = url;

// in ES6
//const _log = log;
//export { _log as log }; // making log function public