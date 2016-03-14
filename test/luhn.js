var expect = require('chai').expect
var luhn = require('../lib/luhn.js')

// Valid credit cards.
// Source PayPal: http://www.paypalobjects.com/en_US/vhelp/paypalmanager_help/credit_card_numbers.htm
var validCardNumbers = [
  '378282246310005',
  '371449635398431',
  '378734493671000',
  '5610591081018250',
  '30569309025904',
  '38520000023237',
  '6011111111111117',
  '6011000990139424',
  '3530111333300000',
  '3566002020360505',
  '5555555555554444',
  '5105105105105100',
  '4111111111111111',
  '4012888888881881',
  '4222222222222'
]

describe('Luhn Check Algorithm', function () {
  it('should validate a correct card number', function () {
    validCardNumbers.forEach((num) => {
      expect(luhn.validate(num)).to.be.true
    })
  })

  it('should reject an incorrect card number', function () {
    expect(luhn.validate('08723487802734')).to.be.false
  })

  it('should validate correct card numbers over 19 digits', function () {
    expect(luhn.validate('401288888888188134267')).to.be.false
  })

  it('should reject invalid card numbers over 19 digits', function () {
    expect(luhn.validate('78327048728736475082048720')).to.be.false
  })

  it('should reject an empty string as card number', function () {
    expect(luhn.validate('')).to.be.false
  })
})

