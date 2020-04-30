import { MusignyClassNameBasicInteractor, MusignyClassNameBasicUseCaseOutput } from '../../../app/usecase/entity-name/basic.usecase'
import { Controller, Presenter, Request } from '../../../core'

export class MusignyClassNameBasicController implements Controller {
  constructor (public interactor: MusignyClassNameBasicInteractor) {}

  async handle (input: Request): Promise<MusignyClassNameBasicUseCaseOutput> {
    return await this.interactor.execute({
    })
  }
}

interface MusignyClassNameBasicPresenterOutput {
  response: string;
}

export class MusignyClassNameBasicPresenter implements Presenter {
  present (input: MusignyClassNameBasicUseCaseOutput): MusignyClassNameBasicPresenterOutput {
    return {
      response: 'ok',
    }
  }
}
