var     chai = require('chai')
    ,   sandboxed = require('sandboxed-module')
    ,   calc = sandboxed.require('../calc.js',
        {
            requires : {'./log.js' :
            function(){
                this.info = function(){};
                this.debug = function(){};
                this.error = function(){};
            }}

        });

var expect = chai.expect;

describe('addition',function() {
    it('should correctly sum 2 digits',function(){
        expect(calc.addTwoDigits(2,2)).to.equal(4);
    })

    it('should correctly sum 3 digits',function(){
        expect(calc.addThreeDigits(2,2,2)).to.equal(6);
    })
})