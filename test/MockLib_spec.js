var     chai = require("chai")
    ,   chaiAsPromised = require("chai-as-promised")
    ,   mockLib = require('../MockLib.js')

var expect = chai.expect,should = chai.should();

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
    })
})