var expect = require('chai').expect
var commands = require('../lib/commands.js')
var CreditCard = require('../lib/CreditCard.js')

var validCardNumber = '6011000990139424'
var invalidCardNumber = '0543705734530474'

describe('Commands', function () {
  describe('.add()', function () {
    var testData = []
    commands.add('Tom', validCardNumber, 1337, testData)

    it('should add an element to the data store', function () {
      expect(testData).to.have.lengthOf(1)
    })

    it('should add objects of type CreditCard', function () {
      expect(testData[0]).to.be.an.instanceOf(CreditCard)
    })
  })

  describe('.charge()', function () {
    var testData = []
    var limit = 1337
    var testCard = new CreditCard('Jane', validCardNumber, limit)
    testData.push(testCard)

    var addToBalance = Math.floor(Math.random() * limit)

    it('should increase the balance of the card by ' + addToBalance, function () {
      commands.charge(testData[0].name, addToBalance, testData)
      expect(testData[0].balance).to.equal(addToBalance)
    })

    it('should ignore charges exceeding card limit of ' + limit, function () {
      var currentBalance = testData[0].balance
      var exceedBalance = limit * Math.floor(Math.random() * 10 + 1)

      commands.charge(testData[0].name, exceedBalance, testData)
      expect(testData[0].balance).to.equal(currentBalance)
    })

    it('should not increase balance of invalid card', function () {
      var testInvalidCard = new CreditCard('Bill', invalidCardNumber, limit)
      var startBalance = testInvalidCard.balance
      testData.push(testInvalidCard)

      commands.charge(testData[1].name, 60, testData)
      expect(testData[1].balance).to.be.equal(startBalance)
    })
  })

  describe('.credit()', function () {
    var testData = []
    var limit = 9001
    var testCard = new CreditCard('Mary', validCardNumber, limit)
    testData.push(testCard)
    commands.charge(testData[0].name, 100, testData)

    var removeFromBalance = Math.floor(Math.random() * limit / 100)

    it('should decrease the balance of a card by ' + removeFromBalance, function () {
      var currentBalance = testData[0].balance

      commands.credit(testData[0].name, removeFromBalance, testData)
      expect(testData[0].balance).to.equal(currentBalance - removeFromBalance)
    })

    it('should allow the balance to become negative', function () {
      var currentBalance = testData[0].balance
      var negativeBalance = Math.floor(Math.random() * limit / 10)

      commands.credit(testData[0].name, negativeBalance, testData)
      expect(testData[0].balance).to.equal(currentBalance - negativeBalance)
    })

    it('should not decrease balance of invalid card', function () {
      var testInvalidCard = new CreditCard('Rick', invalidCardNumber)
      testData.push(testInvalidCard)

      var currentBalance = testData[1].balance
      var removeFromBalance = Math.floor(Math.random() * limit / 100)

      commands.credit(testData[1].name, removeFromBalance, testData)
      expect(testData[1].balance).to.equal(currentBalance)
    })
  })
})
