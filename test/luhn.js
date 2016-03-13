var expect = require('chai').expect
var luhn = require('../lib/luhn.js')

describe('Luhn', function () {
  it('should validate a correct card number', function () {
    expect(luhn.validate('4111111111111111')).to.be.true
  })

  it('should reject an incorrect card number', function () {
    expect(luhn.validate('08723487802734')).to.be.false
  })

  it('should reject valid card numbers over 19 digits', function () {
    expect(luhn.validate('401288888888188134267')).to.be.false
  })

  it('should reject invalid card numbers over 19 digits', function () {
    expect(luhn.validate('78327048728736475082048720')).to.be.false
  })
})

