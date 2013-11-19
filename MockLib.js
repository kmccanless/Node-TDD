var Q= require("q");

module.exports = function() {
    this.sync = function () {
        return true;
    };
    this.asyncWithCallbacks = function(cb) {
        setTimeout(function(){
            cb(null,true);
        }, 200);
    };
    this.asyncWithPromise = function () {
        var deferred = Q.defer();
        setTimeout(function(){
            deferred.resolve(true);
        }, 200);
        return deferred.promise;
    };
};

