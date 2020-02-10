import emoji from 'node-emoji'
import path from 'path'
import { FileDownloader } from '../file-downloader'

interface Options {
  output: string;
}

export const init = async (input: string, options: Options): Promise<void> => {
  const name = input || 'out'
  const output = options.output || '.'

  const destination = path.resolve(
    output,
    name
  )

  try {
    await FileDownloader.donwloadAndExtract(
      'https://github.com/seagirl/typescript-template/archive/master.zip',
      'typescript-template-master',
      destination
    )

    console.log(emoji.get('wine_glass') + ' created.')
  } catch (error) {
    console.error(error)
  }
}