import { MusignyPrimaryNameBasicUseCaseOutput } from '../../../app/usecase/entity-name/basic.usecase'
import { Controller, Request, Usecase } from '../../../core'

export class MusignyPrimaryNameBasicController implements Controller {
  constructor (public interactor: Usecase) {}

  handle (input: Request): Promise<MusignyPrimaryNameBasicUseCaseOutput> {
    return this.interactor.execute({
    })
  }
}
