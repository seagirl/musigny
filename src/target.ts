export enum Config {
  basic = 'basic',
}

export enum Category {
  domain  = 'domain',
  app     = 'app',
  web     = 'web',
  db      = 'db',
  ext     = 'ext',
  unknown = 'unknown',
}

export enum Type {
  entity              = 'entity',
  factory             = 'factory',
  valueObject         = 'value-object',
  usecase             = 'usecase',
  translator          = 'translator',
  repositoryInterface = 'repository-interface',
  api                 = 'api',
  handler             = 'handler',
  adapter             = 'adapter',
  controller          = 'controller',
  presenter           = 'presenter',
  viewModel           = 'view-model',
  builder             = 'builder',
  repository          = 'repository',
  unknown             = 'unknown',
}

export enum APIType {
  index   = 'index',
  show    = 'show',
  new     = 'new',
  edit    = 'edit',
  destroy = 'destroy',
  unknown = 'unknown',
}

export class Target {
  constructor (
    public readonly path: string,
    public readonly category: Category,
    public readonly type: Type,
    public readonly apiType: APIType,
    public readonly className: string,
    public readonly entityName: string,
    public readonly dbEntityName: string,
    public readonly config: Config = Config.basic
  ) {}

  get templatePath (): string {
    switch (this.type) {
      case Type.entity:
        if (this.category === Category.domain) {
          return `domain/entity/${this.config}.entity`
        }
        else if (this.category === Category.db) {
          return `db/entity/${this.config}.entity`
        }
        break
      case Type.factory:
        return `domain/factory/${this.config}.factory`
      case Type.valueObject:
        return `domain/value-object/${this.config}.value-object`
      case Type.repositoryInterface:
        return `domain/repository/${this.config}.repository`
      case Type.usecase:
        if (this.category === Category.app) {
          return `app/usecase/entity-name/${this.config}.usecase`
        }
        else if (this.category === Category.web) {
          return `web/adapter/${this.config}.translator`
        }
        break
      case Type.translator:
        if (this.category === Category.app) {
          return 'app/usecase/entity-name/translator'
        }
        else if (this.category === Category.web) {
          return `web/adapter/${this.config}.translator`
        }
        break
      case Type.adapter:
        return `web/adapter/entity-name/${this.config}.adapter`
      case Type.controller:
        return `web/adapter/entity-name/${this.config}.controller`
      case Type.presenter:
        return `web/adapter/entity-name/${this.config}.presenter`
      case Type.viewModel:
        return `web/view-model/${this.config}.view-model`
      case Type.builder:
        return `web/builder/entity-name/${this.config}.builder`
      case Type.api:
        return `web/express/api/${this.config}.api`
      case Type.handler:
        return `web/express/api/entity-name/${this.config}.handler`
      case Type.repository:
        return `db/repository/${this.config}.repository`
    }

    throw new Error(`Unsupported type: ${this.type}`)
  }

  toString (): string {
    return `{
      path: ${this.path},
      category: ${this.category},
      type: ${this.type},
      name: ${this.className},
      entityName: ${this.entityName},
      templatePath: ${this.templatePath}
    }`
  }
}