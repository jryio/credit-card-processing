#! /usr/bin/env node
'use strict'

const readline = require('readline')
const fs = require('fs')
const parser = require('../lib/parser.js')
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

commandRead.on('line', (line) => {
  parser(line, data)
})

// TODO: Print out data here, sorted alphabetically
commandRead.on('close', () => {
  console.log('End of input')
})

