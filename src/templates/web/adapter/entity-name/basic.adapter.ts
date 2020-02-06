import { MusignyPrimaryNameBasicUseCaseOutput } from '../../../app/usecase/entity-name/basic.usecase'
import { Controller, Presenter, Request, Usecase } from '../../../core'

export class MusignyPrimaryNameBasicController implements Controller {
  constructor (public interactor: Usecase) {}

  handle (input: Request): Promise<MusignyPrimaryNameBasicUseCaseOutput> {
    return this.interactor.execute({
    })
  }
}

interface MusignyPrimaryNameBasicPresenterOutput {
  response: string;
}

export class MusignyPrimaryNameBasicPresenter implements Presenter {
  present (input: MusignyPrimaryNameBasicUseCaseOutput): MusignyPrimaryNameBasicPresenterOutput {
    return {
      response: 'ok',
    }
  }
}
