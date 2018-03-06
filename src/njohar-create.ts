#!/usr/bin/env node

// tslint:disable:no-console
import chalk from 'chalk'
import * as program from 'commander'

const options = ['api', 'web', 'mobile', 'plugin']

program.usage(`<${options.join(' | ')}> <project-name>`)

program.on('--help', () => {
  console.log('')
  console.log('  Examples:')
  console.log('')
  console.log(
    chalk.gray(
      `    # create new ${chalk.green(
        'Njohar'
      )} api project named '${chalk.cyan('my-api')}'`
    )
  )
  console.log(`    $ njohar create api ${chalk.cyan('my-api')}`)
  console.log('')
})

program.parse(process.argv)

if (program.args.length < 2 || options.indexOf(program.args[0]) < 0) {
  program.help()
}

console.log(
  `creating ${chalk.green(program.args[1])} ${chalk.whiteBright(
    program.args[0]
  )} project...`
)
