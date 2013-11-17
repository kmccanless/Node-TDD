var     chai = require('chai')
    ,   sinon = require('sinon')
    ,   sandboxed = require('sandboxed-module');

var expect = chai.expect, calc, errorLogger;

describe('addition',function() {
    beforeEach(function(){
        errorLogger = sinon.spy();
        calc = sandboxed.require('../calc.js',
            {
                requires : {'./log.js' :
                    function(){
                        this.info = sinon.stub();
                        this.debug = sinon.stub();
                        this.error = errorLogger;
                    }}
            });
    })
    it('should correctly sum 2 digits',function(){
        expect(calc.addTwoDigits(2,2)).to.equal(4);
    })

    it('should correctly sum 3 digits',function(){
        expect(calc.addThreeDigits(2,2,2)).to.equal(6);
    })
    it('should log error if too many arguments',function(){
        calc.addTwoDigits(2,2,2);
        expect(errorLogger.callCount).to.equal(1);
    })
    it('should log error if too many arguments',function(){
        calc.addThreeDigits(2,2,2,2);
        expect(errorLogger.callCount).to.equal(1);
    })


})
