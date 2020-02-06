import commander from 'commander'
import { TargetFactory } from './target.factory'
import { Template } from './template'

function main (): void {
  commander
    .version('0.0.1')
    .command('generate [path]')
    .action(function (path) {
      const target = TargetFactory.createFromPath(path)
      console.log(`target: ${target}`)

      const template = new Template(`src/templates/${target.templatePath}`)
      template.renderTo(`out/${target.path}.ts`, target)
    })

  commander.parse(process.argv)

  if (!process.argv.slice(2).length) {
    commander.outputHelp()
  }
}

main()