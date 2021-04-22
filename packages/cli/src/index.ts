#!/usr/bin/env node

import yargs from 'yargs/yargs'

const args = yargs(process.argv.slice(2)).argv

console.log(args)