import fs from 'fs'
import mockFS from 'mock-fs'
import { generate } from './generate'
import { mock as mockConsole } from '../mock/console'

describe('generate command', () => {
  beforeEach(() => {
    mockConsole()
    mockFS({
      'src/templates/app/usecase/entity-name/basic.usecase.ts': 'usecase',
      'src/templates/app/usecase/entity-name/basic.usecase.spec.ts': 'usecase'
    })
  })

  afterEach(mockFS.restore)

  it('generate', () => {
    generate('app/usecase/user/get-users.usecase', {
      output: 'test-out',
      verbose: false,
      templatesDir: '../templates'
    })
    expect(fs.existsSync('test-out/src/app/usecase/user/get-users.usecase.ts')).toBe(true)
    expect(fs.existsSync('test-out/src/app/usecase/user/get-users.usecase.spec.ts')).toBe(true)
  })
})