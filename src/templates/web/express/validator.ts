import { Application } from 'express'
import { OpenApiValidator } from 'express-openapi-validator'

export class APIValidator {
  validator: OpenApiValidator

  constructor (apiSpec: string) {
    this.validator = new OpenApiValidator({
      apiSpec: apiSpec,
      validateRequests: true,
      validateResponses: true
    })
  }

  async install (express: Application): Promise<void> {
    await this.validator.install(express)
  }
}