import fs from 'fs'
import mockFS from 'mock-fs'
import { generateAPI } from './generate-api'
import { mock as mockConsole } from '../mock/console'

describe('generate-api command', () => {
  beforeEach(() => {
    mockConsole()
    mockFS({
      'src/templates/domain/entity/basic.entity.ts': 'dummy',
      'src/templates/domain/factory/basic.factory.ts': 'dummy',
      'src/templates/app/repository/basic.repository.ts': 'dummy',
      'src/templates/app/usecase/entity-name/basic.usecase.ts': 'dummy',
      'src/templates/db/repository/basic.repository.ts': 'dummy',
      'src/templates/db/entity/basic.entity.ts': 'dummy',
      'src/templates/web/adapter/basic.translator.ts': 'dummy',
      'src/templates/web/adapter/entity-name/basic.adapter.ts': 'dummy',
      'src/templates/web/builder/entity-name/basic.builder.ts': 'dummy',
      'src/templates/web/express/api/basic.api.ts': 'dummy',
      'src/templates/web/view-model/basic.view-model.ts': 'dummy',

    })
  })

  afterEach(mockFS.restore)

  it('generateAPI', () => {
    generateAPI('get-users', 'user', {
      output: 'test-out',
      verbose: false,
      force: false,
      test: true,
      templatesDir: '../templates'
    })

    expect(fs.existsSync('test-out/src/domain/entity/user.entity.ts')).toBe(true)
    expect(fs.existsSync('test-out/src/domain/factory/user.factory.ts')).toBe(true)
    expect(fs.existsSync('test-out/src/app/repository/user.repository.ts')).toBe(true)
    expect(fs.existsSync('test-out/src/app/usecase/user/get-users.usecase.ts')).toBe(true)
    expect(fs.existsSync('test-out/src/db/repository/user.repository.ts')).toBe(true)
    expect(fs.existsSync('test-out/src/db/entity/users.ts')).toBe(true)
    expect(fs.existsSync('test-out/src/web/adapter/user.translator.ts')).toBe(true)
    expect(fs.existsSync('test-out/src/web/adapter/user/get-users.adapter.ts')).toBe(true)
    expect(fs.existsSync('test-out/src/web/builder/user/get-users.builder.ts')).toBe(true)
    expect(fs.existsSync('test-out/src/web/express/api/user.api.ts')).toBe(true)
    expect(fs.existsSync('test-out/src/web/view-model/user.view-model.ts')).toBe(true)
  })
})