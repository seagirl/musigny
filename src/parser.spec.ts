import { toEnum, Parser } from './parser'
import { Target, Category, Type, APIType } from './target'

describe('Parser', () => {
  it('toEnum', () => {
    expect(toEnum(Category, 'domain')).toBe(Category.domain)
    expect(toEnum(Category, 'aa')).toBe(undefined)
  })

  it('parse', () => {
    expect(Parser.parse('hoge/entity/user.entity'))
      .toEqual(new Target('hoge/entity/user.entity', Category.unknown, Type.entity, APIType.unknown, 'user', 'user', 'user'))

    expect(Parser.parse('domain/entity/user.entity'))
      .toEqual(new Target('domain/entity/user.entity', Category.domain, Type.entity, APIType.unknown, 'user', 'user', 'user'))

    expect(Parser.parse('app/repository/user.repository'))
      .toEqual(new Target('app/repository/user.repository', Category.app, Type.repositoryInterface, APIType.unknown, 'user', 'user', 'user'))

    expect(Parser.parse('app/usecase/user/get-users.usecase'))
      .toEqual(new Target('app/usecase/user/get-users.usecase', Category.app, Type.usecase, APIType.index, 'get-users', 'user', 'user'))

    expect(Parser.parse('db/repository/user.repository'))
      .toEqual(new Target('db/repository/user.repository', Category.db, Type.repository, APIType.unknown, 'user', 'user', 'user'))

    expect(Parser.parse('db/entity/users'))
      .toEqual(new Target('db/entity/users', Category.db, Type.entity, APIType.unknown, 'users', 'users', 'users'))

    expect(Parser.parse('web/adapter/user.translator'))
      .toEqual(new Target('web/adapter/user.translator', Category.web, Type.translator, APIType.unknown, 'user', 'user', 'user'))

    expect(Parser.parse('web/adapter/user/get-users.adapter'))
      .toEqual(new Target('web/adapter/user/get-users.adapter', Category.web, Type.adapter, APIType.index, 'get-users', 'user', 'user'))

    expect(Parser.parse('web/builder/user/get-users.builder'))
      .toEqual(new Target('web/builder/user/get-users.builder', Category.web, Type.builder, APIType.index, 'get-users', 'user', 'user'))

    expect(Parser.parse('web/express/api/user.api'))
      .toEqual(new Target('web/express/api/user.api', Category.web, Type.api, APIType.unknown, 'user', 'user', 'user'))
  })

  it('parse with option', () => {
    expect(Parser.parse('domain/entity/user.entity', {
      className: 'HogeHOGE',
      entityName: 'fuga-fuga',
      dbEntityName: 'fuga-fugas'
    }))
      .toEqual(new Target('domain/entity/user.entity', Category.domain, Type.entity, APIType.unknown, 'HogeHOGE', 'fuga-fuga', 'fuga-fugas'))
  })
})