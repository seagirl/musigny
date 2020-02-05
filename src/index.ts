import commander from 'commander'

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

function typeFromName (name: string): Type {
  const pathFlagments = name.split('/')
  const lastPathFlagment = pathFlagments.pop()
  if (lastPathFlagment == null) {
    return Type.unknown
  }

  const nameFlagments = lastPathFlagment.split('.')
  const lastNameFlagments = nameFlagments.pop()
  if (lastNameFlagments == null) {
    return Type.unknown
  }

  switch (lastNameFlagments) {
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
      if (name.includes('app/')) {
        return Type.repositoryInterface
      }
      return Type.repository
  }

  return Type.unknown
}

function main (): void {
  commander
    .version('0.0.1')
    .command('generate [name]')
    .action(function (name) {
      const type = typeFromName(name)
      console.log(`name: ${name}`)
      console.log(`type: ${type}`)
    })

  commander.parse(process.argv)

  if (!process.argv.slice(2).length) {
    commander.outputHelp()
  }
}

main()