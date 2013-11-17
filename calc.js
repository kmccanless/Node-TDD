var log = require('./log.js');

logger = new log();

function Calculator() {
    this.addTwoDigits = function (digit1,digit2) {
        if(arguments.length > 2) {
            logger.error("Too many arguments!");
        }
        logger.debug("Adding two digits");
        return(digit1 + digit2);
    }
    this.addThreeDigits = function (digit1,digit2,digit3) {
        if(arguments.length > 3) {
            logger.error("Too many arguments!");
        }
        logger.debug("Adding three digits");
        return(digit1 + digit2 + digit3);
    }
}

module.exports = new Calculator();