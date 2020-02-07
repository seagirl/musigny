import { Target, Category, Type, Config } from './target'

describe('Target', () => {
  it('templatePath', async () => {

    expect(new Target('domain/entity/user.entity', Category.domain, Type.entity, 'user', 'user', Config.basic).templatePath)
      .toEqual('domain/entity/basic.entity')

    expect(new Target('domain/factory/user.factory', Category.domain, Type.factory, 'user', 'user', Config.basic).templatePath)
      .toEqual('domain/factory/basic.factory')

    expect(new Target('domain/value-object/user.value-object', Category.domain, Type.valueObject, 'user', 'user', Config.basic).templatePath)
      .toEqual('domain/value-object/basic.value-object')

    expect(new Target('app/usecase/user/get-users.usecase', Category.app, Type.usecase, 'get-users', 'user', Config.basic).templatePath)
      .toEqual('app/usecase/entity-name/basic.usecase')

    expect(new Target('app/repository/user.repository', Category.app, Type.repositoryInterface, 'user', 'user', Config.basic).templatePath)
      .toEqual('app/repository/basic.repository')

    expect(new Target('web/adapter/user/get-users.adapter', Category.web, Type.adapter, 'get-users', 'user', Config.basic).templatePath)
      .toEqual('web/adapter/entity-name/basic.adapter')

    expect(new Target('web/adapter/user/get-users.controller', Category.web, Type.controller, 'get-users', 'user', Config.basic).templatePath)
      .toEqual('web/adapter/entity-name/basic.controller')

    expect(new Target('web/adapter/user/get-users.presenter', Category.web, Type.presenter, 'get-users', 'user', Config.basic).templatePath)
      .toEqual('web/adapter/entity-name/basic.presenter')

    expect(new Target('web/adapter/user.translator', Category.web, Type.translator, 'user', 'user', Config.basic).templatePath)
      .toEqual('web/adapter/basic.translator')

    expect(new Target('web/view-model/user.view-model', Category.web, Type.viewModel, 'user', 'user', Config.basic).templatePath)
      .toEqual('web/view-model/basic.view-model')

    expect(new Target('web/builder/user/get-users.builder', Category.web, Type.builder, 'get-users', 'user', Config.basic).templatePath)
      .toEqual('web/builder/entity-name/basic.builder')

    expect(new Target('web/express/api/user.api', Category.web, Type.api, 'user', 'user', Config.basic).templatePath)
      .toEqual('web/express/api/basic.api')

    expect(new Target('db/repository/user.repository', Category.db, Type.repository, 'user', 'user', Config.basic).templatePath)
      .toEqual('db/repository/basic.repository')
  })
})