'use strict'

const commands = require('./commands.js')
/* Valid input assumed (from specification)
* - Space delimited
* - Contains only legal characters
* - Credit cards vary in length (max=19)
* - Credit card numbers always numeric
* - Amounts will always be prefaced with '$'
*/
module.exports = (line, dataStore) => {
  // Split on spaces
  const args = line.split(' ')
  const cmdString = args[0]
  const name = args[1]
  let cardNumber = ''
  let amount = 0

  switch (cmdString) {
    case 'Add':
      cardNumber = args[2]
      const limit = parseAmount(args[3])
      commands.add(name, cardNumber, limit, dataStore)
      break
    case 'Charge':
      amount = parseAmount(args[2])
      commands.charge(name, amount, dataStore)
      break
    case 'Credit':
      amount = parseAmount(args[2])
      commands.credit(name, amount, dataStore)
      break
    default:
      console.log('Invalid Command')
      break
  }
}

const parseAmount = (amount) => {
  return Number(amount.split('$')[1])
}

