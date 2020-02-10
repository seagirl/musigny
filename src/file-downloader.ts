import compressing from 'compressing'
import fs from 'fs'
import fetch from 'node-fetch'

export class FileDownloader {
  static TMP_NAME = 'tmp'
  static TMP_FILE_NAME = `${FileDownloader.TMP_NAME}.zip`

  static async donwloadAndExtract (url: string, rootDir: string, destination: string): Promise<void> {
    const filename = await this.donwloadAndSave(url, rootDir, destination)
    await this.extract(filename, rootDir, destination)
  }

  private static async donwloadAndSave (url: string, rootDir: string, destination: string): Promise<string> {
    if (fs.existsSync(destination)) {
      throw new Error(`destination "${destination}" is already exists`)
    }

    const fileStream = fs.createWriteStream(FileDownloader.TMP_FILE_NAME)

    const response = await fetch(url)

    return new Promise((resolve, reject) => {
      fileStream.on('close', () => {
        resolve(FileDownloader.TMP_FILE_NAME)
      })

      response.body.on('error', (err) => {
        reject(err)
      })
      response.body.pipe(fileStream)
    })
  }

  private static async extract (filename: string, rootDir: string, destination: string): Promise<void> {
    try {
      await compressing.zip.uncompress(filename, FileDownloader.TMP_NAME)
      fs.renameSync(FileDownloader.TMP_NAME + '/' + rootDir, destination)
    } catch (error) {
      console.error(error)
    } finally {
      try {
        fs.unlinkSync(filename)
        fs.rmdirSync(FileDownloader.TMP_NAME)
      } catch (error) {
        console.error(error)
      }
    }
  }
}