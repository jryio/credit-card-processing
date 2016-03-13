var expect = require('chai').expect
var CreditCard = require('../lib/CreditCard.js')

describe('Credit Card Class', function () {
  describe('constructor', function () {
    it('should initialize object with given arguments', function () {
      var name = 'Benjamin'
      var cardNumber = '6011000990139424'
      var limit = 1000
      var testCard = new CreditCard(name, cardNumber, limit)

      expect(testCard).to.be.an.instanceOf(CreditCard)
      expect(testCard).to.have.property('name', name)
      expect(testCard).to.have.property('cardNumber', cardNumber)
      expect(testCard).to.have.property('limit', limit)
      expect(testCard).to.have.property('balance', 0)
      expect(testCard).to.have.property('isValidCardNum')
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
    it('should should add value to balance', function () {
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
    it('shoud return a boolean from luhn.validate()', function () {
      expect(testCard.isValidCardNum).to.be.a('boolean')
    })
  })
})
