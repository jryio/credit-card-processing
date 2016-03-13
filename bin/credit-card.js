#! /usr/bin/env node
'use strict'
console.log('Executable working')

const readline = require('readline')
const fs = require('fs')

// Handle multiple input types: File Argument || STDIN
const args = process.argv.slice(2)
let rlInterface = {
  input: process.stdin,
  output: process.stdout
}
if (args.length === 1) {
  const inputFile = args[0]
  rlInterface.input = fs.createReadStream(inputFile)
} else if (args.length >= 1) {
  console.log('Only one input file allowed')
  process.exit()
}

const commandRead = readline.createInterface(rlInterface)

