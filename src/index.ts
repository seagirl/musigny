import commander from 'commander'
import { generate } from './commands/generate'
import { init } from './commands/init'

async function main (): Promise<void> {
  const mypackage = await import('../package.json')

  commander
    .version(mypackage.version)

  commander
    .command('init [name]')
    .option('-o, --output <output>')
    .action(init)

  commander
    .command('generate <path>')
    .option('-o, --output <output>')
    .option('-v, --verbose')
    .option('--class-name <className>')
    .option('--entity-name <entityName>')
    .action(generate)

  commander.parse(process.argv)

  if (!process.argv.slice(2).length) {
    commander.outputHelp()
  }
}

main()
  .then()
  .catch (console.error)