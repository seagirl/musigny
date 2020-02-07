import commander from 'commander'
import emoji from 'node-emoji'
import path from 'path'
import { FileDownloader } from './file-downloader'
import { Template } from './template'
import { Parser } from './parser'

async function main (): Promise<void> {
  const mypackage = await import('../package.json')

  commander
    .version(mypackage.version)

  commander
    .command('init [name]')
    .option('-o, --output <output>')
    .action(async (input, options) => {
      const name = input || 'out'
      const output = options.output || '.'

      const destination = path.resolve(
        output,
        name
      )

      try {
        await FileDownloader.donwloadAndExtract(
          'https://github.com/seagirl/typescript-template/archive/master.zip',
          'typescript-template-master',
          destination
        )

        console.log(emoji.get('wine_glass') + ' created.')
      } catch (error) {
        console.log(error)
      }
    })

  commander
    .command('generate <path>')
    .option('-o, --output <output>')
    .option('-v, --verbose')
    .action((input, options) => {
      const output = options.output || '.'

      const target = Parser.parse(input)

      const templatePath = path.resolve(
        __dirname,
        '../../src/templates',
        target.templatePath
      )

      const outputPath = path.resolve(
        output,
        'src',
        target.path + '.ts'
      )

      const template = new Template(templatePath)
      template.renderTo(outputPath, target)

      if (options.verbose) {
        console.log(target)
      }

      console.log(`created: ${outputPath}`)
    })

  commander.parse(process.argv)

  if (!process.argv.slice(2).length) {
    commander.outputHelp()
  }
}

main()
  .then()
  .catch (error => {
    console.log(error)
  })