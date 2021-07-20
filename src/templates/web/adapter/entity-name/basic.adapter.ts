import { MusignyClassNameBasicInteractor, Response } from '../../../app/usecase/entity-name/basic.usecase'
import { Request } from '../../../core/web/express/request'
import { Controller } from '../../../core/web/express/controller'
import { Presenter } from '../../../core/web/express/presenter'

export class MusignyClassNameBasicController implements Controller {
  constructor (public interactor: MusignyClassNameBasicInteractor) {}

  async handle (input: Request): Promise<Response> {
    return await this.interactor.execute({
    })
  }
}

interface MusignyClassNameBasicPresenterOutput {
  response: string;
}

export class MusignyClassNameBasicPresenter implements Presenter {
  present (input: Response): Record<string, unknown> {
    return {
      response: 'ok',
    }
  }
}
