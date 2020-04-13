import { MusignyClassNameBasicInteractor, MusignyClassNameBasicUseCaseOutput } from '../../../app/usecase/entity-name/basic.usecase'
import { Controller, Request } from '../../../core'

export class MusignyClassNameBasicController implements Controller {
  constructor (public interactor: MusignyClassNameBasicInteractor) {}

  handle (input: Request): Promise<MusignyClassNameBasicUseCaseOutput> {
    return this.interactor.execute({
    })
  }
}
