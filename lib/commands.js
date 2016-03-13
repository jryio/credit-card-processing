'use strict'
let CreditCard = require('./CreditCard.js')

/*
 * @signature: add
 * @param:
 *  String: name,
 *  Sring: cardNumber,
 *  Number: limit,
 *  Array: dataStore
 * @description:
 *  Add creates a new Credit Card with a user's name, card number,
 *  card limit, and balance set to zero
 * @return: null
 */
exports.add = (name, cardNumber, limit, dataStore) => {
  const card = new CreditCard(name, cardNumber, limit)
  dataStore.push(card)
}

/*
 * @signature: charge
 * @param:
 *  String: name,
 *  Number: amount,
 *  Array: dataStore
 * @description:
 *  Charge adds an "amount" to a Credit Card (indexed by user's name)
 *  Total balance of Credit Card cannot exceed set "limit"
 * @return: null
 */
exports.charge = (name, amount) => {

}

/*
 * @signature: credit
 * @param:
 *  String: name,
 *  Number: amount,
 *  Array: dataStore
 * @description:
 *  Credit reduces the given balance of a Credit Card in the user's
 *  name by the provided amount. Balance is allowed to reach negative values
 * @return: null
 */
exports.credit = (name, amount) => {

}
