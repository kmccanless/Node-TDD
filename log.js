module.exports = function () {
    this.info = function(data) {
        console.log(data);
    }
    this.debug = function(data) {
        console.log(data);
    }
    this.error = function(data) {
        console.error(data);
    }
};