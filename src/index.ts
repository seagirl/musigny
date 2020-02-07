import commander from 'commander'
import path from 'path'
import { FileDownloader } from './file-downloader'
import { Template } from './template'
import { Parser } from './parser'

async function main (): Promise<void> {
  const mypackage = await import('../package.json')

  commander
    .version(mypackage.version)

  commander
    .command('init')
    .action(function () {
      FileDownloader.donwloadAndExtract(
        'https://github.com/seagirl/typescript-template/archive/master.zip',
        'typescript-template-master',
        'out'
      )
    })

  commander
    .command('generate [path]')
    .action(function (input) {
      const target = Parser.parse(input)

      const templatePath = path.resolve(
        __dirname,
        '../../src/templates',
        target.templatePath
      )

      const template = new Template(templatePath)
      template.renderTo(`src/${target.path}.ts`, target)

      console.log(`created: ${target}`)
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