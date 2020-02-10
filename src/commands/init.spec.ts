import fs from 'fs'
import mockFS from 'mock-fs'
import { init } from './init'
import { mock as mockConsole } from '../mock/console'

describe('init command', () => {
  beforeEach(() => {
    mockConsole()
    mockFS()
  })

  afterEach(mockFS.restore)

  it('init', async () => {
    await init('out', { output: '.' })
    expect(fs.existsSync('out')).toBe(true)
    expect(fs.existsSync('out/package.json')).toBe(true)
  })
})