import compressing from 'compressing'
import fs from 'fs'
import fetch from 'node-fetch'

export class FileDownloader {
  static TMP_FILE_NAME = 'tmp'

  static donwloadAndExtract (url: string, rootDir: string, destination: string): void {
    if (fs.existsSync(destination)) {
      throw new Error(`destination "${destination}" is already exists`)
    }

    fetch(url)
      .then(response => {
        const filename = `${FileDownloader.TMP_FILE_NAME}.zip`
        const fileStream = fs.createWriteStream(filename)

        fileStream.on('close', () => {
          if (!fs.existsSync(FileDownloader.TMP_FILE_NAME)) {
            fs.mkdirSync(FileDownloader.TMP_FILE_NAME)
          }

          this.extract(filename, rootDir, destination)
        })

        response.body.pipe(fileStream)
      })
  }

  static extract (filename: string, rootDir: string, destination: string): void {
    compressing.zip.uncompress(filename, FileDownloader.TMP_FILE_NAME)
      .then(() => {
        try {
          fs.renameSync(FileDownloader.TMP_FILE_NAME + '/' + rootDir, destination)
        } finally {
          fs.unlinkSync(filename)
          fs.rmdirSync(FileDownloader.TMP_FILE_NAME)
        }
      })
      .catch(error => {
        console.log(error)

        try {
          fs.unlinkSync(filename)
          fs.rmdirSync(FileDownloader.TMP_FILE_NAME)
        } catch (error) {
          console.log(error)
        }
      })
  }
}