import { MusignyClassNameBasicInteractor } from '../../../app/usecase/entity-name/basic.usecase'
import { Builder } from '../../../core/web/express/builder'
import { MusignyEntityNameBasicRepository } from '../../../db/repository/basic.repository'
import { MusignyClassNameBasicController, MusignyClassNameBasicPresenter } from '../../adapter/entity-name/basic.adapter'
import { Transaction } from '../../../db/transaction'

export class MusignyClassNameBasicBuilder extends Builder {
  constructor (private transaction = new Transaction()) {
    super()

    const MusignyEntityNameBasicLowerRepository = new MusignyEntityNameBasicRepository(transaction.manager)

    const usecase = new MusignyClassNameBasicInteractor({
      MusignyEntityNameBasicLowerRepository: MusignyEntityNameBasicLowerRepository
    })

    this.controller = new MusignyClassNameBasicController(usecase)
    this.presenter = new MusignyClassNameBasicPresenter()
  }

  async finish(): Promise<void> {
    await this.transaction.close()
  }
}