import commander from 'commander'
import { generate } from './commands/generate'
import { generateAPI } from './commands/generate-api'
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
    .option('-v, --verbose', 'verbosity', false)
    .option('-f, --force', 'override file if exists', false)
    .option('--no-test')
    .option('--class-name <className>')
    .option('--entity-name <entityName>')
    .action(generate)

  commander
    .command('generate-api <api_name> <entity_name>')
    .option('-o, --output <output>')
    .option('-v, --verbose', 'verbosity', false)
    .option('-f, --force', 'override file if exists', false)
    .option('--no-test')
    .option('--class-name <className>')
    .option('--entity-name <entityName>')
    .action(generateAPI)

  commander.parse(process.argv)

  if (!process.argv.slice(2).length) {
    commander.outputHelp()
  }
}

main()
  .then()
  .catch (console.error)