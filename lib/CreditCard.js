'use strict'

const luhn = require('./luhn.js')

module.exports = class CreditCard {
  constructor (name, cardNumber, limit) {
    this._name = name
    this._cardNumber = cardNumber
    this._limit = limit
    this._balance = 0
    this._isValidCardNum = luhn.validate(cardNumber)
  }

  get name () {
    return this._name
  }

  get cardNumber () {
    return this._cardNumber
  }

  get limit () {
    return this._limit
  }

  get balance () {
    return this._balance
  }

  set balance (newBalance) {
    this._balance = newBalance
  }

  get isValidCardNum () {
    return this._isValidCardNum
  }
}

