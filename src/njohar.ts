#!/usr/bin/env node

import chalk from 'chalk'
import * as program from 'commander'

const VERSION = require('../package.json').version

program
  .version(VERSION)
  .usage('<command> [options]')
  .command('create', `generate a new ${chalk.green('Njohar')} project`)
  .parse(process.argv)

// whitelisting args
if (['create'].indexOf(program.args[0]) < 0) {
  program.help()
}
