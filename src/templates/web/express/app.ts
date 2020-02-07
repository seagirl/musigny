import express, { Express, NextFunction, Request, Response } from 'express'
import { Server } from 'http'
import { DB } from '../../db'
import routes from './api'
import { APIValidator } from './validator'

export default class Application {
  public readonly express: Express = express()
  private db = new DB()
  private validator = new APIValidator('./doc/api/index.yaml')
  private server!: Server

  async init (): Promise<void> {
    await Promise.all([
      this.db.init(),
      this.validator.install(this.express)
    ])

    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
    this.express.use('/api', routes)
    this.express.use(this.errorHandler)
  }

  start (): void {
    process.on('SIGTERM', this.shutdownHandler)
    process.on('SIGINT', this.shutdownHandler)

    const port = process.env.PORT || 3000
    this.server = this.express.listen(port, () => {
      console.log(`Example app listening on port ${port}!`)
    })
  }

  async finish (): Promise<void> {
    await this.db.close()
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
  private errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    const env = process.env.NODE_ENV ?? 'local'
    if (env !== 'test') {
      console.error(`[ERROR] ${err.stack}`)
    }

    res.status(err.status || 500)
    res.json({
      response: 'error',
      status: err.status,
      message: err.message,
      stacktrace: err.stack
    })
  }

  private shutdownHandler = (): void => {
    this.finish()
      .finally(() => {
        console.log('Closing HTTP Server.')

        this.server.close(() => {
          console.log('HTTP Server closed.')
          process.exit()
        })
      })
  }
}
