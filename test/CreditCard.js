var expect = require('chai').expect
var CreditCard = require('../lib/CreditCard.js')

describe('CreditCard Class', function () {
  describe('constructor', function () {
    it('should return instance of CreditCard', function () {
      var testCard = new CreditCard()
      expect(testCard).is.instanceOf(CreditCard)
    })

    it('should initialize \'name\' property', function () {
      var testCard = new CreditCard('Morgan')
      expect(testCard).to.have.property('name').that.is.a('string')
    })

    it('should initialize \'cardNumber\' property', function () {
      var testCard = new CreditCard('', '123')
      expect(testCard).to.have.property('cardNumber').that.is.a('string')
    })

    it('should initialize \'limit\' property', function () {
      var testCard = new CreditCard('', '', 9001)
      expect(testCard).to.have.property('limit').that.is.a('number')
    })

    it('should initialize \'balance\' property', function () {
      var testCard = new CreditCard()
      expect(testCard).to.have.property('balance').that.is.a('number')
      expect(testCard).to.have.property('balance', 0)
    })

    it('should set \'balance\' to $0', function () {
      var testCard = new CreditCard()
      expect(testCard).to.have.property('balance', 0)
    })

    it('should initialize \'isValidCardNum\' property', function () {
      var testCard = new CreditCard('', '12345')
      expect(testCard).to.have.property('isValidCardNum').that.is.a('boolean')
    })
  })

  describe('get name()', function () {
    var testCard = new CreditCard('Zeev', '6011000990139424', 0)
    it('should return the initialized name', function () {
      expect(testCard.name).to.equal('Zeev')
      expect(testCard.name).to.not.equal('Henry')
    })
  })

  describe('get cardNumber()', function () {
    var testCard = new CreditCard('Testing', '6011000990139424', 0)
    it('should return the initialized card number', function () {
      expect(testCard.cardNumber).to.equal('6011000990139424')
      expect(testCard.cardNumber).to.not.equal('750374570374057')
    })
  })

  describe('get limit()', function () {
    var testCard = new CreditCard('Testing', '6011000990139424', 1337)
    it('should return the initialized limit', function () {
      expect(testCard.limit).to.equal(1337)
    })
  })

  describe('get balance()', function () {
    var testCard = new CreditCard('Testing', '6011000990139424', 0)
    testCard.balance = 50
    it('should return the set balance', function () {
      expect(testCard.balance).to.equal(50)
    })
  })

  describe('set balance()', function () {
    var testCard = new CreditCard('Testing', '6011000990139424', 0)
    it('should add value to balance', function () {
      var balance = testCard.balance
      testCard.balance += 15
      expect(testCard.balance).to.equal(balance + 15)
    })

    it('should substract value from balance', function () {
      var balance = testCard.balance
      testCard.balance -= 10
      expect(testCard.balance).to.equal(balance - 10)
    })
  })

  describe('get isValidCardNum()', function () {
    var testCard = new CreditCard('Testing', '6011000990139424', 0)
    it('should return a boolean from luhn.validate()', function () {
      expect(testCard.isValidCardNum).to.be.a('boolean')
    })
  })
})
