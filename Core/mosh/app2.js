const Logger = require('./logger');
const logger = new Logger();

// Register event listner
logger.on('messageLogged', (arg) => {
    console.log('Listner called', arg);
});


logger.log('Message');
