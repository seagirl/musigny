import { Category, Type, Target } from './target'

interface Options {
  className?: string;
  entityName?: string;
}

export function toEnum<T, E extends keyof T>(enumType: T, value: E): T[E]
export function toEnum<T, E extends string>(enumType: T, value: E): null

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toEnum (enumType: any, value: any): any {
  if (Object.values(enumType).includes(value)) {
    return value
  }

  return null
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

    this.entityName = this.parseEntityName() || this.className
    if (options?.entityName != null) {
      this.entityName = options.entityName
    }

    const category = this.parseCategory()
    const type = this.parseType(category)

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

    // EntityName should be same as ClassName in case of Entity
    if (this.typeName === Type.entity) {
      this.entityName = this.className
    }

    // ToDo: This is not good but...
    const entityName = pathFlagments.join('-')
    if (this.typeName != entityName) {
      this.entityName = entityName
    }
  }

  parseClassName (): string {
    if (this.className == null) {
      throw new Error('className not found')
    }

    return this.className
  }

  parseEntityName (): string | undefined {
    return this.entityName
  }

  parseCategory (): Category {
    if (this.categoryName == null) {
      return Category.unknown
    }

    const category = toEnum(Category, this.categoryName)
    if (category == null) {
      return Category.unknown
    }

    return category
  }

  parseType (category: Category): Type {
    if (this.typeName == null) {
      return Type.unknown
    }

    const type = toEnum(Type, this.typeName)
    if (type == null) {
      return Type.unknown
    }

    if (type == Type.repository) {
      if (category == Category.app) {
        return Type.repositoryInterface
      }
    }

    return type
  }
}