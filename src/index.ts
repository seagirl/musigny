import commander from 'commander'
import compressing from 'compressing'
import fs from 'fs'
import fetch from 'node-fetch'
import { TargetFactory } from './target.factory'
import { Template } from './template'

function main (): void {
  commander
    .version('0.0.1')

  commander
    .command('init')
    .action(function () {
      fetch('https://github.com/seagirl/typescript-template/archive/master.zip')
        .then(response => {
          const filename = 'out.zip'
          response.body.pipe(fs.createWriteStream(filename))

          if (!fs.existsSync('tmp')) {
            fs.mkdirSync('tmp')
          }

          compressing.zip.uncompress(filename, 'tmp')
            .then(() => {
              fs.renameSync('tmp/typescript-template-master', 'out')
            })
            .catch(console.log)
        })
    })

  commander
    .command('generate [path]')
    .action(function (path) {
      const target = TargetFactory.createFromPath(path)

      const template = new Template(`src/templates/${target.templatePath}`)
      template.renderTo(`out/src/${target.path}.ts`, target)

      console.log(`created: ${target}`)
    })

  commander.parse(process.argv)

  if (!process.argv.slice(2).length) {
    commander.outputHelp()
  }
}

main()