var     chai = require("chai")
    ,   mockLib = require('../MockLib.js')

var expect = chai.expect;


describe('test asyncronous functions', function() {

    it('should return true via a callback', function(done) {
            mockLib.asyncWithCallbacks(function(err,result){
              expect(err).to.equal(null);
              expect(result).to.be.true;
              done();
            })
        }
    );
})