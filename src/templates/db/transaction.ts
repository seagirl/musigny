import { EntityManager, getManager, QueryRunner } from 'typeorm'
import { Transaction as ITransaction } from '../core'

export class Transaction implements ITransaction {
  readonly manager: EntityManager

  private parentManager: EntityManager
  private queryRunner: QueryRunner

  constructor () {
    this.parentManager = getManager()
    this.queryRunner = this.parentManager.queryRunner || this.parentManager.connection.createQueryRunner()
    this.manager = this.queryRunner.manager
  }

  async begin (): Promise<void> {
    await this.queryRunner.startTransaction()
  }

  async commit (): Promise<void> {
    await this.queryRunner.commitTransaction()
  }

  async rollback (): Promise<void> {
    await this.queryRunner.rollbackTransaction()
  }

  async close (): Promise<void> {
    if (this.queryRunner.isReleased) {
      return
    }

    await this.queryRunner.release()
  }
}
