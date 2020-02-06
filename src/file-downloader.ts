import compressing from 'compressing'
import fs from 'fs'
import fetch from 'node-fetch'

export class FileDownloader {
  static donwloadAndExtract(url: string, rootDir: string, destination: string): void {
    fetch(url)
      .then(response => {
        const filename = 'tmp.zip'
        response.body.pipe(fs.createWriteStream(filename))

        if (!fs.existsSync('tmp')) {
          fs.mkdirSync('tmp')
        }

        compressing.zip.uncompress(filename, 'tmp')
          .then(() => {
            try {
              fs.renameSync('tmp/' + rootDir, destination)
            } finally {
              fs.unlinkSync(filename)
              fs.rmdirSync('tmp')
            }
          })
          .catch(console.log)
      })
  }
}