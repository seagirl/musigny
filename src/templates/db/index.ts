import { Connection, createConnection } from 'typeorm'

export class DB {
  private connection!: Connection

  async init (): Promise<void> {
    if (this.connection != null) {
      return
    }

    const env = process.env.NODE_ENV ?? 'local'
    const connectOption = await import(`../../config/orm/${env}.json`)

    if (env !== 'test') {
      console.log('env:', env)
    }

    try {
      this.connection = await createConnection(connectOption)

      if (env !== 'test') {
        console.log('TypeORM connection created')
      }
    } catch (error) {
      console.log('TypeORM connection error: ', error)
    }
  }

  async close (): Promise<void> {
    if (this.connection == null) {
      return
    }

    try {
      await this.connection.close()
    } catch (error) {
      console.log('TypeORM closing error: ', error)
    }
  }
}