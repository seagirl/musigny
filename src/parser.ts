import { Category, Type, Target } from './target'

interface Options {
  className?: string;
  entityName?: string;
}

export class Parser {
  static parse (path: string, options?: Options): Target {
    const parser = new Parser()
    return parser.parse(path, options)
  }

  private className?: string
  private entityName?: string
  private categoryName?: string
  private typeName?: string

  parse (path: string, options?: Options): Target {
    this.parseFlagments(path)

    this.className = this.parseClassName()
    if (options?.className != null) {
      this.className = options.className
    }

    this.entityName = this.parseEntityName()
    if (options?.entityName != null) {
      this.entityName = options.entityName
    }

    if (this.entityName === '') {
      this.entityName = this.className
    }

    const category = this.parseCategory()
    const type = this.parseType(category)

    if (type === Type.entity) {
      this.entityName = this.className
    }

    return new Target(path, category, type, this.className, this.entityName)
  }

  parseFlagments (path: string): void {
    const pathFlagments = path.split('/')

    const lastPathFlagment = pathFlagments.pop()
    if (lastPathFlagment == null) {
      throw new Error('className not found')
    }

    const nameFlagments = lastPathFlagment.split('.')
    const className = nameFlagments.shift()
    if (className == null) {
      throw new Error('className not found')
    }
    this.className = className

    this.categoryName = pathFlagments.shift()

    const typeNameFromPath = pathFlagments.shift()
    const tyoeNameFromFile = nameFlagments.shift()
    this.typeName = tyoeNameFromFile || typeNameFromPath || ''

    this.entityName = pathFlagments.join('-')
  }

  parseClassName (): string {
    if (this.className == null) {
      throw new Error('className not found')
    }

    return this.className
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