var     chai = require("chai")
    ,   chaiAsPromised = require("chai-as-promised")
    ,   sandboxed = require('sandboxed-module')
    ,   mockLib = require('../MockAsyncLib.js');

var expect = chai.expect,should = chai.should(), mockLib, mockEventor;
chai.use(chaiAsPromised);

function FireableEventor () {
    var handlerProxy;
    this.mockEvent = function(event, handler ) {
        handlerProxy = handler;
    };
    this.fireProxy = function(data) {
        handlerProxy(data);
    }
};


describe('test asyncronous functions', function() {
    it('should return true via a callback', function(done) {
            mockLib.asyncWithCallbacks(function(err,result){
              expect(err).to.equal(null);
              expect(result).to.be.true;
                done();
            })
        }
    );

    it('should return true via a promise', function(done) {
        mockLib.asyncWithPromise().should.be.fulfilled.then(function (result) {
            expect(result).to.be.true;
        }).should.notify(done);
    });

    it('should pass through the MockLib event', function(done) {
         mockEventor = new FireableEventor();
         mockLib = sandboxed.require('../MockAsyncLib.js',
         {
         requires : {'./MockEventLib.js' : mockEventor}
         });

        mockLib.on("message",function(data) {
            expect(data).to.be.equal("test");
        });
         mockEventor.fireProxy("test");
        done();
    });

})