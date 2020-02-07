import { MusignyClassNameBasicUseCaseOutput } from '../../../app/usecase/entity-name/basic.usecase'
import { Presenter } from '../../../core'

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
