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