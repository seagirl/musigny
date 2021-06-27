import { MusignyClassNameBasicInteractor, Response } from '../../../../app/usecase/entity-name/basic.usecase'
import { lowerCamelCase, snakeCase, Usecase } from '../../../../core'
import { Controller } from '../../../../core/web/express/controller'
import { Handler } from '../../../../core/web/express/handler'
import { Presenter } from '../../../../core/web/express/presenter'
import { mergeParameters, Request } from '../../../../core/web/express/request'
import { translateRecord } from '../../../../core/web/translator'
import { MusignyEntityNameBasicRepository } from '../../../../db/repository/basic.repository'

class MusignyClassNameBasicController implements Controller {
  constructor (public interactor: Usecase) {}

  handle (request: Request): Promise<Response> {
    const params = mergeParameters(request)
    return this.interactor.execute(translateRecord(lowerCamelCase, params))
  }
}

class MusignyClassNameBasicPresenter implements Presenter {
  present (response: Response): Record<string, unknown> {
    return {
      response: 'ok',
      ...translateRecord(snakeCase, response),
    }
  }
}

export class MusignyClassNameBasicHandler extends Handler {
  constructor () {
    super()

    const MusignyEntityNameBasicLowerRepository = new MusignyEntityNameBasicRepository()

    const usecase = new MusignyClassNameBasicInteractor({
      MusignyEntityNameBasicLowerRepository: MusignyEntityNameBasicLowerRepository,
    })

    this.controller = new MusignyClassNameBasicController(usecase)
    this.presenter = new MusignyClassNameBasicPresenter()
  }
}
