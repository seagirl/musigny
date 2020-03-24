import fs from 'fs'
import path from 'path'
import { Target, APIType } from './target'
import { Util } from './util'

export class Template {
  constructor (
    public templatePath: string
  ) {}

  renderTo (outputPath: string, target: Target, force: boolean): void {
    if (fs.existsSync(outputPath)) {
      console.warn(`[WARN] outputPath "${outputPath}" is exists`)

      if (force == false) {
        console.log(`skipped: ${outputPath}`)
        return
      }

      fs.unlinkSync(outputPath)
    }

    const buf = fs.readFileSync(this.templatePath)
    const content = this.replaceVariables(buf.toString(), target)

    const dir = path.dirname(outputPath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFileSync(outputPath, content)
    console.log(`created: ${outputPath}`)
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
    content = content.replace(/basic\.row/g, `${Util.kebabCase(target.entityName)}`)

    content = content.replace(/basic\.usecase/g, `${Util.kebabCase(target.className)}.usecase`)
    content = content.replace(/basic\.adapter/g, `${Util.kebabCase(target.className)}.adapter`)

    switch (target.apiType) {
      case APIType.index:
        content = content.replace(/\/\/ musigny-index /g, '')
        break
      case APIType.show:
        content = content.replace(/\/\/ musigny-show /g, '')
        break
      case APIType.new:
        content = content.replace(/\/\/ musigny-new /g, '')
        break
      case APIType.edit:
        content = content.replace(/\/\/ musigny-edit /g, '')
        break
      case APIType.destroy:
        content = content.replace(/\/\/ musigny-destroy /g, '')
        break
    }

    return content
  }
}