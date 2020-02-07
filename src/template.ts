import fs from 'fs'
import path from 'path'
import { Target } from './target'
import { Util } from './util'

export class Template {
  constructor (
    public templatePath: string
  ) {}

  renderTo (outputPath: string, target: Target): void {
    if (fs.existsSync(outputPath)) {
      throw new Error(`outputPath "${outputPath}" is exists`)
    }

    const buf = fs.readFileSync(this.templatePath)
    const content = this.replaceVariables(buf.toString(), target)

    const dir = path.dirname(outputPath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFileSync(outputPath, content)
  }

  replaceVariables (content: string, target: Target): string {
    content = content.replace(/MusignyClassNameBasicKebab/g, Util.kebabCase(target.className))
    content = content.replace(/MusignyEntityNameBasicKebab/g, Util.kebabCase(target.entityName))
    content = content.replace(/MusignyClassNameBasicSnake/g, Util.snakeCase(target.className))
    content = content.replace(/MusignyEntityNameBasicSnake/g, Util.snakeCase(target.entityName))
    content = content.replace(/MusignyClassNameBasic/g, Util.upperCamelCase(target.className))
    content = content.replace(/MusignyEntityNameBasic/g, Util.upperCamelCase(target.entityName))

    content = content.replace(/\/entity-name/g, `/${Util.kebabCase(target.entityName)}`)

    content = content.replace(/basic\.repository/g, `${Util.kebabCase(target.entityName)}.repository`)
    content = content.replace(/basic\.entity/g, `${Util.kebabCase(target.entityName)}.entity`)
    content = content.replace(/basic\.value-object/g, `${Util.kebabCase(target.entityName)}.value-object`)
    content = content.replace(/basic\.view-model/g, `${Util.kebabCase(target.entityName)}.view-model`)
    content = content.replace(/basic\.factory/g, `${Util.kebabCase(target.entityName)}.factory`)
    content = content.replace(/basic\.db/g, `${Util.kebabCase(target.entityName)}`)

    content = content.replace(/basic\.usecase/g, `${Util.kebabCase(target.className)}.usecase`)
    content = content.replace(/basic\.adapter/g, `${Util.kebabCase(target.className)}.adapter`)
    return content
  }
}