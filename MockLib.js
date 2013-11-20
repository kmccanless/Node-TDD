function Mock() {
    this.sync = function () {
        return true;
    };
    this.asyncWithCallbacks = function(cb) {
        setTimeout(function(){
            cb(null,true);
        }, 200);
    };
};

module.exports = new Mock();

