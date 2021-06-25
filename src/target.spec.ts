import { Target, Category, Type, APIType, Config } from './target'

describe('Target', () => {
  it('templatePath', () => {
    expect(new Target('domain/entity/user.entity', Category.domain, Type.entity, APIType.unknown, 'user', 'user', 'user', Config.basic).templatePath)
      .toEqual('domain/entity/basic.entity')

    expect(new Target('domain/factory/user.factory', Category.domain, Type.factory, APIType.unknown, 'user', 'user', 'user', Config.basic).templatePath)
      .toEqual('domain/factory/basic.factory')

    expect(new Target('domain/value-object/user.value-object', Category.domain, Type.valueObject, APIType.unknown, 'user', 'user', 'user', Config.basic).templatePath)
      .toEqual('domain/value-object/basic.value-object')

    expect(new Target('domain/repository/user.repository', Category.app, Type.repositoryInterface, APIType.unknown, 'user', 'user', 'user', Config.basic).templatePath)
      .toEqual('domain/repository/basic.repository')

    expect(new Target('app/usecase/user/get-users.usecase', Category.app, Type.usecase, APIType.index, 'get-users', 'user', 'user', Config.basic).templatePath)
      .toEqual('app/usecase/entity-name/basic.usecase')

    expect(new Target('app/usecase/user/translator', Category.app, Type.translator, APIType.unknown, 'user', 'user', 'user', Config.basic).templatePath)
      .toEqual('app/usecase/entity-name/translator')

    expect(new Target('web/express/api/user.api', Category.web, Type.api, APIType.unknown, 'user', 'user', 'user', Config.basic).templatePath)
      .toEqual('web/express/api/basic.api')

    expect(new Target('web/adapter/user/get-users.adapter', Category.web, Type.adapter, APIType.index, 'get-users', 'user', 'user', Config.basic).templatePath)
      .toEqual('web/adapter/entity-name/basic.adapter')

    expect(new Target('web/adapter/user/get-users.controller', Category.web, Type.controller, APIType.index, 'get-users', 'user', 'user', Config.basic).templatePath)
      .toEqual('web/adapter/entity-name/basic.controller')

    expect(new Target('web/adapter/user/get-users.presenter', Category.web, Type.presenter, APIType.index, 'get-users', 'user', 'user', Config.basic).templatePath)
      .toEqual('web/adapter/entity-name/basic.presenter')

    expect(new Target('web/adapter/user.translator', Category.web, Type.translator, APIType.unknown, 'user', 'user', 'user', Config.basic).templatePath)
      .toEqual('web/adapter/basic.translator')

    expect(new Target('web/view-model/user.view-model', Category.web, Type.viewModel, APIType.unknown, 'user', 'user', 'user', Config.basic).templatePath)
      .toEqual('web/view-model/basic.view-model')

    expect(new Target('web/builder/user/get-users.builder', Category.web, Type.builder, APIType.index, 'get-users', 'user', 'user', Config.basic).templatePath)
      .toEqual('web/builder/entity-name/basic.builder')

    expect(new Target('db/repository/user.repository', Category.db, Type.repository, APIType.unknown, 'user', 'user', 'user', Config.basic).templatePath)
      .toEqual('db/repository/basic.repository')
  })
})