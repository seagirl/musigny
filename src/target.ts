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
  repository          = 'repository',
  unknown             = 'unknown',
}

export class Target {
  constructor (
    public readonly path: string,
    public readonly category: Category,
    public readonly type: Type,
    public readonly name: string,
    public readonly entityName: string,
    public readonly config: Config = Config.basic
  ) {}

  get templatePath (): string {
    switch (this.type) {
      case Type.entity:
        return `domain/entity/${this.config}.entity.ts`
      case Type.factory:
        return `domain/factory/${this.config}.factory.ts`
      case Type.valueObject:
        return `domain/value-object/${this.config}.value-object.ts`
      case Type.usecase:
        return `app/usecase/entity-name/${this.config}.usecase.ts`
      case Type.repositoryInterface:
        return `app/repository/${this.config}.repository.ts`
      case Type.adapter:
        return `web/adapter/entity-name/${this.config}.adapter.ts`
    }

    throw new Error(`Unsupported type: ${this.type}`)
  }

  toString (): string {
    return `{
      path: ${this.path},
      category: ${this.category},
      type: ${this.type},
      name: ${this.name},
      entityName: ${this.entityName},
      templatePath: ${this.templatePath}
    }`
  }
}