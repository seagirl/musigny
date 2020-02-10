import fs from 'fs'
import mockFS from 'mock-fs'
import { mock as mockConsole } from './mock/console'
import { FileDownloader } from './file-downloader'

describe('FileDownloader', () => {
  beforeEach(() => {
    mockConsole()
    mockFS()
  })

  afterEach(mockFS.restore)

  it('donwloadAndExtract', async () => {
    await FileDownloader.donwloadAndExtract(
      'https://github.com/seagirl/typescript-template/archive/master.zip',
      'typescript-template-master',
      'test-out'
    )

    expect(fs.existsSync('test-out')).toBe(true)
    expect(fs.existsSync('test-out/package.json')).toBe(true)
  })
})