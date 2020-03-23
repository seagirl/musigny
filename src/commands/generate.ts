import path from 'path'
import { Parser } from '../parser'
import { Template } from '../template'
import fs from 'fs'

interface Options {
  output: string;
  verbose: boolean;
  force: boolean;
  test: boolean;
  className?: string;
  entityName?: string;
  templatesDir?: string;
}

export const generate = (input: string, options: Options): void => {
  const output = options.output || '.'

  const target = Parser.parse(input, {
    className: options.className,
    entityName: options.entityName
  })

  if (options.verbose) {
    console.log(target)
  }

  const templatesDir = options.templatesDir ?? '../../../src/templates'

  const templatePath = path.resolve(
    __dirname,
    templatesDir,
    target.templatePath + '.ts'
  )

  if (fs.existsSync(templatePath)) {
    const outputPath = path.resolve(
      output,
      'src',
      target.path + '.ts'
    )

    const template = new Template(templatePath)
    template.renderTo(outputPath, target, options.force)
  }

  if (options.test === false) {
    return
  }

  const testTemplatePath = path.resolve(
    __dirname,
    templatesDir,
    target.templatePath + '.spec.ts'
  )

  if (fs.existsSync(testTemplatePath)) {
    const testOutputPath = path.resolve(
      output,
      'src',
      target.path + '.spec.ts'
    )

    const testTemplate = new Template(testTemplatePath)
    testTemplate.renderTo(testOutputPath, target, options.force)
  }
}