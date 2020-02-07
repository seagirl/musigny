import { MusignyClassNameBasicUseCaseOutput } from '../../../app/usecase/entity-name/basic.usecase'
import { Controller, Presenter, Request, Usecase } from '../../../core'

export class MusignyClassNameBasicController implements Controller {
  constructor (public interactor: Usecase) {}

  handle (input: Request): Promise<MusignyClassNameBasicUseCaseOutput> {
    return this.interactor.execute({
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
