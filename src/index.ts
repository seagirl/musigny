import commander from 'commander'
import fs from 'fs'
import pathIO from 'path'

enum Config {
  basic = 'basic',
}

enum Category {
  domain  = 'domain',
  app     = 'app',
  web     = 'web',
  db      = 'db',
  ext     = 'ext',
  unknown = 'unknown',
}

enum Type {
  entity              = 'entity',
  factory             = 'factory',
  usecase             = 'usecase',
  repositoryInterface = 'repository-interface',
  adapter             = 'adapter',
  controller          = 'controller',
  presenter           = 'presenter',
  translator          = 'translator',
  viewModel           = 'view-model',
  builder             = 'builder',
  repository          = 'repository',
  unknown             = 'unknown',
}

class Target {
  constructor (
    public readonly path: string,
    public readonly category: Category,
    public readonly type: Type,
    public readonly name: string,
    public readonly name2: string,
    public readonly config: Config = Config.basic
  ) {}

  get templatePath (): string {
    switch (this.type) {
      case Type.usecase:
        return `app/usecase/${this.config}.usecase.ts`
    }

    throw new Error(`Unsupported type: ${this.type}`)
  }

  toString (): string {
    return `{
      path: ${this.path},
      category: ${this.category},
      type: ${this.type},
      name: ${this.name},
      name2: ${this.name2},
      templatePath: ${this.templatePath}
    }`
  }
}

class Parser {
  static nameFromPath (path: string): string {
    const pathFlagments = path.split('/')
    const lastPathFlagment = pathFlagments.pop()
    if (lastPathFlagment == null) {
      throw new Error('name not found')
    }

    const nameFlagments = lastPathFlagment.split('.')
    const lastNameFlagment = nameFlagments.pop()
    if (lastNameFlagment == null) {
      throw new Error('name not found')
    }

    const name = nameFlagments.pop()
    if (name == null) {
      throw new Error('name not found')
    }

    return name
  }

  static name2FromPath (path: string): string {
    const pathFlagments = path.split('/')
    pathFlagments.shift() // category
    pathFlagments.shift() // type
    pathFlagments.pop() // name
    return pathFlagments.join('-')
  }

  static categoryFromPath (path: string): Category {
    const pathFlagments = path.split('/')
    const firstPathFlagment = pathFlagments.shift()
    if (firstPathFlagment == null) {
      return Category.unknown
    }

    switch (firstPathFlagment) {
      case Category.domain:
        return Category.domain
      case Category.app:
        return Category.app
      case Category.web:
        return Category.web
      case Category.db:
        return Category.db
      case Category.ext:
        return Category.ext
    }

    return Category.unknown
  }

  static typeFromPath (path: string): Type {
    const pathFlagments = path.split('/')
    const lastPathFlagment = pathFlagments.pop()
    if (lastPathFlagment == null) {
      return Type.unknown
    }

    const nameFlagments = lastPathFlagment.split('.')
    const lastNameFlagment = nameFlagments.pop()
    if (lastNameFlagment == null) {
      return Type.unknown
    }

    switch (lastNameFlagment) {
      case Type.entity:
        return Type.entity
      case Type.factory:
        return Type.factory
      case Type.usecase:
        return Type.usecase
      case Type.repositoryInterface:
        return Type.repositoryInterface
      case Type.adapter:
        return Type.adapter
      case Type.controller:
        return Type.controller
      case Type.presenter:
        return Type.presenter
      case Type.translator:
        return Type.translator
      case Type.viewModel:
        return Type.viewModel
      case Type.builder:
        return Type.builder
      case Type.repository:
        if (path.includes('app/')) {
          return Type.repositoryInterface
        }
        return Type.repository
    }

    return Type.unknown
  }
}

class TargetFactory {
  static createFromPath (path: string): Target {
    return new Target(
      path,
      Parser.categoryFromPath(path),
      Parser.typeFromPath(path),
      Parser.nameFromPath(path),
      Parser.name2FromPath(path)
    )
  }
}

class Util {
  static upperCamelCase (str: string): string {
    str = str.charAt(0).toUpperCase() + str.slice(1)
    return str.replace(/[-_](.)/g, function (match, group1) {
      return group1.toUpperCase()
    })
  }
}

class Template {
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