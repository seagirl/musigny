import path from 'path'
import { Parser } from '../parser'
import { Template } from '../template'

interface Options {
  output: string;
  verbose: boolean;
}

export const generate = (input: string, options: Options) => {
  const output = options.output || '.'

  const target = Parser.parse(input)

  const templatePath = path.resolve(
    __dirname,
    '../../../src/templates',
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
}