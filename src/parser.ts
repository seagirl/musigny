import pluralize from 'pluralize'
import { APIType, Category, Target, Type } from './target'
import { Util } from './util'

interface Options {
  apiName?: string;
  className?: string;
  entityName?: string;
  dbEntityName?: string;
}

export function toEnum<T, E extends keyof T> (enumType: T, value: E | string): T[E] | undefined {
  return enumType[value as E]
}

export class Parser {
  static parse (path: string, options?: Options): Target {
    const parser = new Parser()
    return parser.parse(path, options)
  }

  private className?: string
  private entityName?: string
  private dbEntityName?: string
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

    this.dbEntityName = pluralize(this.entityName)
    if (options?.dbEntityName != null) {
      this.dbEntityName = options.dbEntityName
    }

    const category = this.parseCategory()
    const type = this.parseType(category)
    const apiType = this.parseAPIType(options)

    return new Target(path, category, type, apiType, this.className, this.entityName, this.dbEntityName)
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
    const typeNameFromFile = nameFlagments.shift()
    this.typeName = typeNameFromFile || typeNameFromPath || ''

    // ToDo: This is not good but...
    if (this.categoryName == 'app' && this.className == 'translator') {
      this.typeName = this.className
    }

    // web/express/api ディレクトリのケースの調整
    if (pathFlagments[0] == 'api') {
      pathFlagments.shift()
    }

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

    const category = toEnum(Category, Util.lowerCamelCase(this.categoryName))
    if (category == null) {
      return Category.unknown
    }

    return category
  }

  parseType (category: Category): Type {
    if (this.typeName == null) {
      return Type.unknown
    }

    const type = toEnum(Type, Util.lowerCamelCase(this.typeName))
    if (type == null) {
      return Type.unknown
    }

    if (type === Type.repository) {
      if (category === Category.domain || category === Category.app) {
        return Type.repositoryInterface
      }
    }

    return type
  }

  parseAPIType (options?: Options): APIType {
    const apiName = options?.apiName ?? this.className
    if (apiName == null) {
      return APIType.unknown
    }

    if (/^get.+s$/.exec(Util.lowerCamelCase(apiName))) {
      return APIType.index
    }

    if (/^get.+/.exec(Util.lowerCamelCase(apiName))) {
      return APIType.show
    }

    if (/^post.+/.exec(Util.lowerCamelCase(apiName))) {
      return APIType.new
    }

    if (/^put.+/.exec(Util.lowerCamelCase(apiName))) {
      return APIType.edit
    }

    if (/^delete.+/.exec(Util.lowerCamelCase(apiName))) {
      return APIType.destroy
    }

    return APIType.unknown
  }
}