function sayHello(name) {
    console.log("Hello" + name);
}

//sayHello('Michael');
//console.log(window); window and document are the part of runtime environment in browser


//  Global Object //
//console.log();
//setTimeout() ;
//clearTimeout();
//setInterval();
//clearInterval();

//global.console.log("hello")
//global.var = 19
//global.sum = 19 + 23
//global.console.log(sum)
//global.console.log(global.var)

// Loading Logger module
// In ES6
//import './logger';

var logger = require('./logger');
console.log(logger)
console.log(logger.urlEndpoint)
console.log(logger.log("hello"))


