'use strict'

module.exports.validate = (cardNumber) => {
  if (cardNumber.length > 19) {
    return false
  }
  const digits = parseDigits(cardNumber)
  let evens = digits.filter((el, i) => { return (i % 2) })
  let odds = digits.filter((el, i) => { return !(i % 2) })

  // If the card number length is odd then evens/odds are reversed
  if ((cardNumber.length % 2) === 1) {
    const temp = odds
    odds = evens
    evens = temp
  }
  // Double every other number
  const oddsDoubled = odds.map((el) => { return el * 2 })
  // Split every doubled odd index into components
  // Ex: 8*2 = 16; parseDigits(16) = [1, 6]
  const oddsDoubledSplit = oddsDoubled.map((el) => { return parseDigits(String(el)) })
  // Flatten Array of Arrays in oddsDoubledSplit into single array
  const flattened = oddsDoubledSplit.reduce((a, b) => { return a.concat(b) }, [])
  const oddsTotal = flattened.reduce((previous, current) => { return previous + current })
  const total = evens.reduce((previous, current) => { return previous + current }, oddsTotal)
  return ((total % 10) === 0)
}

const parseDigits = (number) => {
  // Takes cardNumber (string) and parses into array of digits
  return number.split('').map(Number)
}

