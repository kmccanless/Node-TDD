function Calculator() {
    this.addTwoDigits = function (digit1,digit2) {
        return(digit1 + digit2);
    }
    this.addThreeDigits = function (digit1,digit2,digit3) {
        return(digit1 + digit2 + digit3);
    }
}

module.exports = new Calculator();