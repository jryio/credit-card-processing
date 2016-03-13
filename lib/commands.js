'use strict'
let CreditCard = require('./CreditCard.js')

exports.add = (name, cardNumber, limit, dataStore) => {
  const card = new CreditCard(name, cardNumber, limit)
  dataStore.push(card)
}

exports.charge = (name, amount) => {

}

exports.credit = (name, amount) => {

}
