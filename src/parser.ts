import { Category, Type, Target } from './target'

export class Parser {
  static parse (path: string): Target {
    const parser = new Parser()
    return parser.parse(path)
  }

  private name?: string
  private entityName?: string
  private categoryName?: string
  private typeName?: string

  parse (path: string): Target {
    this.parseFlagments(path)

    const name = this.parseName()
    const entityName = this.parseEntityName()
    const category = this.parseCategory()
    const type = this.parseType(category)

    return new Target(path, category, type, name, entityName)
  }

  parseFlagments (path: string): void {
    const pathFlagments = path.split('/')

    const lastPathFlagment = pathFlagments.pop()
    if (lastPathFlagment == null) {
      throw new Error('name not found')
    }

    const nameFlagments = lastPathFlagment.split('.')
    const name = nameFlagments.shift()
    if (name == null) {
      throw new Error('name not found')
    }
    this.name = name

    this.categoryName = pathFlagments.shift()

    const typeNameFromPath = pathFlagments.shift()
    const tyoeNameFromFile = nameFlagments.shift()
    this.typeName = tyoeNameFromFile || typeNameFromPath || ''

    this.entityName = pathFlagments.join('-')
  }

  parseName (): string {
    if (this.name == null) {
      throw new Error('name not found')
    }

    return this.name
  }

  parseEntityName (): string {
    return this.entityName ?? ''
  }

  parseCategory (): Category {
    switch (this.categoryName) {
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

  parseType (category: Category): Type {
    switch (this.typeName) {
      case Type.entity:
        return Type.entity
      case Type.factory:
        return Type.factory
      case Type.valueObject:
        return Type.valueObject
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
        if (category == Category.app) {
          return Type.repositoryInterface
        }
        return Type.repository
    }

    return Type.unknown
  }
}