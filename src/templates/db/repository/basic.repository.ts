import { EntityManager, getManager } from 'typeorm'
import { MusignySecondlyNameBasicRepository as MusignySecondlyNameBasicRepositoryInterfaceInterface, SearchInput } from '../../app/repository/basic.repository'
import { MusignySecondlyNameBasicEntity } from '../../domain/entity/basic.entity'
import { MusignySecondlyNameBasicFactory } from '../../domain/factory/basic.factory'
import { MusignySecondlyNameBasic } from '../entity/basic.db'

export class MusignySecondlyNameBasicRepository implements MusignySecondlyNameBasicRepositoryInterfaceInterface {
  private manager: EntityManager = getManager()

  async nextIdentifier (): Promise<number> {
    const row = await getManager().createQueryBuilder()
      .select([
        'nextval(\'MusignySecondlyNameBasicLower_id_seq\'::regclass)::int as id'
      ])
      .from(MusignySecondlyNameBasic, 'MusignySecondlyNameBasicLower')
      .limit(1)
      .getRawOne()
    return row.id
  }

  async search (input: SearchInput = {}): Promise<MusignySecondlyNameBasicEntity[]> {
    const query = this.manager.createQueryBuilder()
      .select([
        'MusignySecondlyNameBasicLower.id as id'
      ])
      .from(MusignySecondlyNameBasic, 'MusignySecondlyNameBasicLower')
      .orderBy('MusignySecondlyNameBasicLower.id')
      .limit(input.limit)
      .offset(input.offset)

    const rows = await query.getRawMany()

    return rows.map(row => {
      return MusignySecondlyNameBasicFactory.create({
        id: row.id,
      })
    })
  }

  async find (id: number): Promise<MusignySecondlyNameBasicEntity | undefined> {
    const row = await this.manager.createQueryBuilder()
      .select([
        'MusignySecondlyNameBasicLower.id as id',
      ])
      .from(MusignySecondlyNameBasic, 'MusignySecondlyNameBasicLower')
      .where('MusignySecondlyNameBasicLower.id = :id', { id: id })
      .orderBy('MusignySecondlyNameBasicLower.id')
      .getRawOne()

    if (!row) {
      return
    }
    return MusignySecondlyNameBasicFactory.create({
      id: row.id,
    })
  }

  async save (MusignySecondlyNameBasicLower: MusignySecondlyNameBasicEntity): Promise<void> {
    const repository = this.manager.getRepository(MusignySecondlyNameBasic)
    const row = await repository.findOne({ where: { id: MusignySecondlyNameBasicLower.id } })

    if (!row) {
      await this.manager.createQueryBuilder()
        .insert()
        .into(MusignySecondlyNameBasic, ['id'])
        .values({ id: MusignySecondlyNameBasicLower.id })
        .execute()
    }
  }

  async delete (MusignySecondlyNameBasicLower: MusignySecondlyNameBasicEntity): Promise<void> {
    await this.manager.createQueryBuilder()
      .delete()
      .from(MusignySecondlyNameBasic)
      .where({ id: MusignySecondlyNameBasicLower.id })
      .execute()
  }
}
