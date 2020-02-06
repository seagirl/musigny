import { MusignyPrimaryNameBasicInteractor } from '../../../app/usecase/entity-name/basic.usecase'
import { Builder } from '../../../core'
import { MusignySecondlyNameBasicRepository } from '../../../db/repository/basic.repository'
import { MusignyPrimaryNameBasicController, MusignyPrimaryNameBasicPresenter } from '../../adapter/entity-name/basic.adapter'

export class MusignyPrimaryNameBasicBuilder extends Builder {
  constructor () {
    super()

    const repository = new MusignySecondlyNameBasicRepository()
    const usecase = new MusignyPrimaryNameBasicInteractor({ repository: repository })

    this.controller = new MusignyPrimaryNameBasicController(usecase)
    this.presenter = new MusignyPrimaryNameBasicPresenter()
  }
}