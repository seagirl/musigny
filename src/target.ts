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
  repositoryInterface = 'repository-interface',
  adapter             = 'adapter',
  controller          = 'controller',
  presenter           = 'presenter',
  translator          = 'translator',
  viewModel           = 'view-model',
  builder             = 'builder',
  api                 = 'api',
  repository          = 'repository',
  row                 = 'row',
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
    public readonly config: Config = Config.basic
  ) {}

  get templatePath (): string {
    switch (this.type) {
      case Type.entity:
        return `domain/entity/${this.config}.entity`
      case Type.factory:
        return `domain/factory/${this.config}.factory`
      case Type.valueObject:
        return `domain/value-object/${this.config}.value-object`
      case Type.usecase:
        return `app/usecase/entity-name/${this.config}.usecase`
      case Type.repositoryInterface:
        return `app/repository/${this.config}.repository`
      case Type.adapter:
        return `web/adapter/entity-name/${this.config}.adapter`
      case Type.controller:
        return `web/adapter/entity-name/${this.config}.controller`
      case Type.presenter:
        return `web/adapter/entity-name/${this.config}.presenter`
      case Type.translator:
        return `web/adapter/${this.config}.translator`
      case Type.viewModel:
        return `web/view-model/${this.config}.view-model`
      case Type.builder:
        return `web/builder/entity-name/${this.config}.builder`
      case Type.api:
        return `web/express/api/${this.config}.api`
      case Type.repository:
        return `db/repository/${this.config}.repository`
      case Type.row:
        return `db/row/${this.config}.row`
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