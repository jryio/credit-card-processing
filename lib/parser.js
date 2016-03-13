'use strict'

const commands = require('./commands.js')

/* Valid input assumed (from specification)
* - Space delimited
* - Contains only legal characters
* - Credit cards vary in length (max=19)
* - Credit card numbers always numeric
* - Amounts will always be prefaced with '$'
*/
module.exports = (line) => {
  // Split on spaces
  const args = line.split(' ')
  console.log(args)

  const cmdString = args[0]
  const name = args[1]
  let cardNumber = ''
  let balance = ''

  switch (cmdString) {
    case 'Add':
      console.log('Command - Add')
      cardNumber = args[2]
      balance = parseBalance(args[3])
      commands.add(name, cardNumber, balance)
      break
    case 'Charge':
      console.log('Command - Charge')
      balance = parseBalance(args[2])
      commands.charge(name, balance)
      break
    case 'Credit':
      console.log('Command - Credit')
      balance = parseBalance(args[2])
      commands.charge(name, balance)
      break
    default:
      console.log('Invalid Command')
      break
  }
}

const parseBalance = (balance) => {
  return Number(balance.split('$')[1])
}

