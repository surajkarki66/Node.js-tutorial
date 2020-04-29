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


// Loading module
const logger = require('./logger');
console.log(logger)

//logger.log("Hello");
logger("Hello") // calling exported function




