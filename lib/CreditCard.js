'use strict'

const luhn = require('./luhn.js')

module.exports = class CreditCard {
  constuctor (name, cardNumber, limit) {
    this.name = name
    this.cardNumber = cardNumber
    this.limit = limit
    this.balance = 0
  }

  get cardNumber () {
    return this.cardNumber
  }

  get name () {
    return this.name
  }

  get limit () {
    return this.limit
  }

  get balance () {
    return this.balance
  }

  set balance (newBalance) {
    this.balance = newBalance
  }

  isValidCardNum () {
    return luhn.validate(this.cardNumber)
  }
}
