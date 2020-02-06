import commander from 'commander'
import pathIO from 'path'
import { FileDownloader } from './file-downloader'
import { TargetFactory } from './target.factory'
import { Template } from './template'

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
    .action(function (path) {
      const target = TargetFactory.createFromPath(path)

      const templatePath = pathIO.resolve(
        __dirname,
        '../../src/templates',
        target.templatePath
      )

      const template = new Template(templatePath)
      template.renderTo(`out/src/${target.path}.ts`, target)

      console.log(`created: ${target}`)
    })

  commander.parse(process.argv)

  if (!process.argv.slice(2).length) {
    commander.outputHelp()
  }
}

main().then()