import fs from 'fs'
import mockFS from 'mock-fs'
import path from 'path'
import { mock as mockConsole } from './mock/console'
import { Category, Target, Type, APIType } from './target'
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
    const target = new Target('web/adapter/user/get-users.adapter', Category.web, Type.adapter, APIType.index, 'get-users', 'user')
    const outputPath = 'test-out/template.ts'
    template.renderTo(outputPath, target, false)
    expect(fs.existsSync(outputPath)).toEqual(true)

    template.renderTo(outputPath, target, false)
    template.renderTo(outputPath, target, true)
  })

  it('replaceVariables', () => {
    const template = new Template(templatePath)
    const target = new Target('web/adapter/user/get-users.adapter', Category.web, Type.adapter, APIType.index, 'get-users', 'user')

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
      user
      get-users.usecase
      get-users.adapter
    `)
  })

  it('replaceComments', () => {
    const template = new Template(templatePath)
    const target = new Target('web/express/api/user.api', Category.web, Type.api, APIType.index, 'get-users', 'user')

    const contet = `
      // musigny-index hogehoge
      // musigny-index hogehoge
      // musigny-index hogehoge

      // musigny-show hogehoge
      // musigny-show hogehoge
      // musigny-show hogehoge
    `

    expect(template.replaceComments(contet, target)).toBe(`
      hogehoge
      hogehoge
      hogehoge

      // musigny-show hogehoge
      // musigny-show hogehoge
      // musigny-show hogehoge
    `)
  })
})