import path from 'path'
import { Category, Target, Type } from './target'
import { Template } from './template'

const templatePath = path.resolve(
  __dirname,
  'templates/test/basic.ts',
)

describe('Template', () => {
  it('renderTo', () => {
    // TODO
    expect(1).toEqual(1)
  })

  it('replaceVariables', () => {
    const template = new Template(templatePath)
    const target = new Target('web/adapter/user/get-users.adapter', Category.web, Type.adapter, 'get-users', 'user')

    const contet = `
      MusignyClassNameBasicKebab
      MusignyEntityNameBasicKebab
      MusignyClassNameBasicSnake
      MusignyEntityNameBasicSnake
      MusignyClassNameBasic
      MusignyEntityNameBasic
      /entity-name
      basic.repository
      basic.entity
      basic.value-object
      basic.view-model
      basic.factory
      basic.db
      basic.usecase
      basic.adapter
    `

    expect(template.replaceVariables(contet, target)).toBe(`
      get-users
      user
      get_users
      user
      GetUsers
      User
      /user
      user.repository
      user.entity
      user.value-object
      user.view-model
      user.factory
      user
      get-users.usecase
      get-users.adapter
    `)
  })
})