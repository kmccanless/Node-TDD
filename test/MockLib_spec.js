var     chai = require("chai")
    ,   chaiAsPromised = require("chai-as-promised")
    ,   MockLib = require('../MockLib.js')

var expect = chai.expect,should = chai.should(), mockLib;
chai.use(chaiAsPromised);

beforeEach(function(){
    mockLib = new MockLib();
})

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