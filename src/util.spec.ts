import { Util } from './util'

describe('Util', () => {
  it('upperCamelCase', () => {
    expect(Util.upperCamelCase('get-users.usecase')).toEqual('GetUsers.usecase')
    expect(Util.upperCamelCase('get_users.usecase')).toEqual('GetUsers.usecase')
    expect(Util.upperCamelCase('GetUsers.usecase')).toEqual('GetUsers.usecase')
  })

  it('kebabCase', () => {
    expect(Util.kebabCase('get-users.usecase')).toEqual('get-users.usecase')
    expect(Util.kebabCase('get_users.usecase')).toEqual('get-users.usecase')
    expect(Util.kebabCase('GetUsers.usecase')).toEqual('get-users.usecase')
  })

  it('snakeCase', () => {
    expect(Util.snakeCase('get-users.usecase')).toEqual('get_users.usecase')
    expect(Util.snakeCase('get_users.usecase')).toEqual('get_users.usecase')
    expect(Util.snakeCase('GetUsers.usecase')).toEqual('get_users.usecase')
  })
})