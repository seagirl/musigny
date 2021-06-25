import { kebabCase, lowerCamelCase, snakeCase, upperCamelCase } from './change-case'

describe('change-case', () => {
  it('upperCamelCase', () => {
    expect(upperCamelCase(undefined)).toEqual(undefined)
    expect(upperCamelCase('get-users.usecase')).toEqual('GetUsers.usecase')
    expect(upperCamelCase('get_users.usecase')).toEqual('GetUsers.usecase')
    expect(upperCamelCase('GetUsers.usecase')).toEqual('GetUsers.usecase')
  })

  it('lowerCamelCase', () => {
    expect(lowerCamelCase(undefined)).toEqual(undefined)
    expect(lowerCamelCase('get-users.usecase')).toEqual('getUsers.usecase')
    expect(lowerCamelCase('get_users.usecase')).toEqual('getUsers.usecase')
    expect(lowerCamelCase('GetUsers.usecase')).toEqual('getUsers.usecase')
  })

  it('kebabCase', () => {
    expect(kebabCase(undefined)).toEqual(undefined)
    expect(kebabCase('get-users.usecase')).toEqual('get-users.usecase')
    expect(kebabCase('get_users.usecase')).toEqual('get-users.usecase')
    expect(kebabCase('GetUsers.usecase')).toEqual('get-users.usecase')
  })

  it('snakeCase', () => {
    expect(snakeCase(undefined)).toEqual(undefined)
    expect(snakeCase('get-users.usecase')).toEqual('get_users.usecase')
    expect(snakeCase('get_users.usecase')).toEqual('get_users.usecase')
    expect(snakeCase('GetUsers.usecase')).toEqual('get_users.usecase')
  })
})