var     chai = require("chai")
    ,   chaiAsPromised = require("chai-as-promised")
    ,   mockLib = require('../MockAsyncLib.js');

var expect = chai.expect,should = chai.should(), mockLib, mockEventor;
chai.use(chaiAsPromised);

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
        mockLib.on("message",function(data) {
            expect(data).to.be.equal("test");
            done();
        });
    });
})