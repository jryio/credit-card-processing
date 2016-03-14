#! /usr/bin/env node
'use strict'

const readline = require('readline')
const fs = require('fs')
const parser = require('../lib/parser.js')

// In-memory Array for simplicity
let data = []

// Handle multiple input types: File Argument || STDIN
// Assume STDIN unless argument provided
const args = process.argv.slice(2)
let rlInterface = {
  input: process.stdin
}
if (args.length === 1) {
  const inputFile = args[0]
  rlInterface.input = fs.createReadStream(inputFile)
} else if (args.length >= 1) {
  console.log('Only one input file allowed')
  process.exit()
}

const commandRead = readline.createInterface(rlInterface)
// Send input to parser. Parser issues 'commands'
commandRead.on('line', (line) => {
  parser(line, data)
})

// Print final data.
// Each line is the final state of each credit card
commandRead.on('close', () => {
  data.sort(sortAlphabetically)
  data.forEach((card) => {
    console.log(`${card.name}: ${(card.isValidCardNum ? ('$' + card.balance) : 'error')}`)
  })
})

const sortAlphabetically = (a, b) => {
  if (a.name < b.name) return -1
  if (a.name > b.name) return 1
  return 0
}

