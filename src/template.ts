import fs from 'fs'
import pathIO from 'path'
import { Target } from './target'
import { Util } from './util'

export class Template {
  constructor (
    public templatePath: string
  ) {}

  renderTo (path: string, target: Target): void {
    const buf = fs.readFileSync(this.templatePath)
    const content = this.replaceVariables(buf.toString(), target)

    const dir = pathIO.dirname(path)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFileSync(path, content)
  }

  replaceVariables (content: string, target: Target): string {
    content = content.replace(/MusignyPrimaryNameBasic/g, Util.upperCamelCase(target.name))
    content = content.replace(/MusignySecondlyNameBasic/g, Util.upperCamelCase(target.entityName))
    content = content.replace(/\/entity-name\//g, `/${target.entityName}/`)
    content = content.replace(/basic\.repository/g, `${target.entityName}.repository`)
    content = content.replace(/basic\.entity/g, `${target.entityName}.entity`)
    return content
  }
}