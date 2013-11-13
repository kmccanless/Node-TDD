var     chai = require('chai')
    ,   calc = require('../calc.js');

var expect = chai.expect;

describe('addition',function() {
    it('should correctly sum 2 digits',function(){
        expect(calc.addTwoDigits(2,2)).to.equal(4);
    })

    it('should correctly sum 3 digits',function(){
        expect(calc.addThreeDigits(2,2,2)).to.equal(6);
    })
})