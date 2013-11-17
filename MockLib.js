module.exports = function() {
    this.sync = function () {
        return true;
    };
    this.asyncWithCallbacks = function(cb) {
        setTimeout(function(){
            cb(null,true);
        }, 200);
    };
};

