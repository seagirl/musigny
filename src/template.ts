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
    let content = buf.toString()

    content = content.replace(/MusignyPrimaryNameBasic/g, Util.upperCamelCase(target.name))
    content = content.replace(/MusignySecondlyNameBasic/g, Util.upperCamelCase(target.name2))
    content = content.replace(/basic\.repository/g, `${target.name2}.repository`)

    const dir = pathIO.dirname(path)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }

    fs.writeFileSync(path, content)
  }
}