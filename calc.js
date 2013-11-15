function Calculator() {
    this.addTwoDigits = function (digit1,digit2) {
        return(digit1 + digit2);
    }
}

module.exports = new Calculator();