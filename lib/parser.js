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
  let dollars = 0

  switch (cmdString) {
    case 'Add':
      cardNumber = args[2]
      const limit = parseDollars(args[3])
      commands.add(name, cardNumber, limit, dataStore)
      break
    case 'Charge':
      dollars = parseDollars(args[2])
      commands.charge(name, dollars, dataStore)
      break
    case 'Credit':
      dollars = parseDollars(args[2])
      commands.credit(name, dollars, dataStore)
      break
    default:
      console.log('Invalid Command')
      break
  }
}

const parseDollars = (dollars) => {
  return Number(dollars.split('$')[1])
}

