import fs from 'fs'
import mockFS from 'mock-fs'
import path from 'path'
import { mock as mockConsole } from './mock/console'
import { Category, Target, Type } from './target'
import { Template } from './template'

const templatePath = path.resolve(
  __dirname,
  'templates/test/basic.ts',
)

describe('Template', () => {
  beforeEach(() => {
    mockConsole()
    mockFS({
      'src/templates/test/basic.ts': 'test',
    })
  })

  afterEach(mockFS.restore)

  it('renderTo', () => {
    const template = new Template(templatePath)
    const target = new Target('web/adapter/user/get-users.adapter', Category.web, Type.adapter, 'get-users', 'user')
    const outputPath = 'test-out/template.ts'
    template.renderTo(outputPath, target, false)
    expect(fs.existsSync(outputPath)).toEqual(true)
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
      basic.row
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
      user.row
      get-users.usecase
      get-users.adapter
    `)
  })
})