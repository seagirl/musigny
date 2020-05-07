import { MusignyClassNameBasicInteractor } from '../../../app/usecase/entity-name/basic.usecase'
import { Builder } from '../../../core'
import { MusignyEntityNameBasicRepository } from '../../../db/repository/basic.repository'
import { MusignyClassNameBasicController, MusignyClassNameBasicPresenter } from '../../adapter/entity-name/basic.adapter'

export class MusignyClassNameBasicBuilder extends Builder {
  constructor () {
    super()

    const MusignyEntityNameBasicLowerRepository = new MusignyEntityNameBasicRepository()

    const usecase = new MusignyClassNameBasicInteractor({
      repository: MusignyEntityNameBasicLowerRepository
    })

    this.controller = new MusignyClassNameBasicController(usecase)
    this.presenter = new MusignyClassNameBasicPresenter()
  }
}