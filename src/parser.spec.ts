import { Parser } from './parser'
import { Target, Category, Type } from './target'

describe('Parser', () => {
  it('parse', async () => {
    expect(Parser.parse('domain/entity/user.entity'))
      .toEqual(new Target('domain/entity/user.entity', Category.domain, Type.entity, 'user', 'user'))

    expect(Parser.parse('app/repository/user.repository'))
      .toEqual(new Target('app/repository/user.repository', Category.app, Type.repositoryInterface, 'user', 'user'))

    expect(Parser.parse('app/usecase/user/get-users.usecase'))
      .toEqual(new Target('app/usecase/user/get-users.usecase', Category.app, Type.usecase, 'get-users', 'user'))

    expect(Parser.parse('db/repository/user.repository'))
      .toEqual(new Target('db/repository/user.repository', Category.db, Type.repository, 'user', 'user'))

    expect(Parser.parse('web/adapter/user.translator'))
      .toEqual(new Target('web/adapter/user.translator', Category.web, Type.translator, 'user', 'user'))

    expect(Parser.parse('web/adapter/user/get-users.adapter'))
      .toEqual(new Target('web/adapter/user/get-users.adapter', Category.web, Type.adapter, 'get-users', 'user'))

    expect(Parser.parse('web/builder/user/get-users.builder'))
      .toEqual(new Target('web/builder/user/get-users.builder', Category.web, Type.builder, 'get-users', 'user'))
  })

  it('parse with option', async () => {
    expect(Parser.parse('domain/entity/user.entity', {
      className: 'HogeHOGE',
      entityName: 'fuga-fuga'
    }))
      .toEqual(new Target('domain/entity/user.entity', Category.domain, Type.entity, 'HogeHOGE', 'fuga-fuga'))
  })
})