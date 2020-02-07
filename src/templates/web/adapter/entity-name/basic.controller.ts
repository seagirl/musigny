import { MusignyClassNameBasicUseCaseOutput } from '../../../app/usecase/entity-name/basic.usecase'
import { Controller, Request, Usecase } from '../../../core'

export class MusignyClassNameBasicController implements Controller {
  constructor (public interactor: Usecase) {}

  handle (input: Request): Promise<MusignyClassNameBasicUseCaseOutput> {
    return this.interactor.execute({
    })
  }
}
