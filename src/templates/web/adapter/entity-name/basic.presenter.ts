import { MusignyPrimaryNameBasicUseCaseOutput } from '../../../app/usecase/entity-name/basic.usecase'
import { Presenter } from '../../../core'

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
