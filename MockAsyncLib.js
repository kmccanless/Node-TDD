var     Q= require("q")
    ,   mockEventLib = require("./MockEventLib.js");

function MockAsync () {
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
    this.on = function(event,handler) {
        mockEventLib.mockEvent(event,handler);
    }
};

module.exports = new MockAsync();

