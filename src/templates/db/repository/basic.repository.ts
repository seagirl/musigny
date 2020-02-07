import { EntityManager, getManager } from 'typeorm'
import { MusignyEntityNameBasicRepository as MusignyEntityNameBasicRepositoryInterfaceInterface, SearchInput } from '../../app/repository/basic.repository'
import { MusignyEntityNameBasicEntity } from '../../domain/entity/basic.entity'
import { MusignyEntityNameBasicFactory } from '../../domain/factory/basic.factory'
import { MusignyEntityNameBasic } from '../entity/basic.db'

export class MusignyEntityNameBasicRepository implements MusignyEntityNameBasicRepositoryInterfaceInterface {
  private manager: EntityManager = getManager()

  async nextIdentifier (): Promise<number> {
    const row = await getManager().createQueryBuilder()
      .select([
        'nextval(\'MusignyEntityNameBasicLower_id_seq\'::regclass)::int as id'
      ])
      .from(MusignyEntityNameBasic, 'MusignyEntityNameBasicLower')
      .limit(1)
      .getRawOne()
    return row.id
  }

  async search (input: SearchInput = {}): Promise<MusignyEntityNameBasicEntity[]> {
    const query = this.manager.createQueryBuilder()
      .select([
        'MusignyEntityNameBasicLower.id as id'
      ])
      .from(MusignyEntityNameBasic, 'MusignyEntityNameBasicLower')
      .orderBy('MusignyEntityNameBasicLower.id')
      .limit(input.limit)
      .offset(input.offset)

    const rows = await query.getRawMany()

    return rows.map(row => {
      return MusignyEntityNameBasicFactory.create({
        id: row.id,
      })
    })
  }

  async find (id: number): Promise<MusignyEntityNameBasicEntity | undefined> {
    const row = await this.manager.createQueryBuilder()
      .select([
        'MusignyEntityNameBasicLower.id as id',
      ])
      .from(MusignyEntityNameBasic, 'MusignyEntityNameBasicLower')
      .where('MusignyEntityNameBasicLower.id = :id', { id: id })
      .orderBy('MusignyEntityNameBasicLower.id')
      .getRawOne()

    if (!row) {
      return
    }
    return MusignyEntityNameBasicFactory.create({
      id: row.id,
    })
  }

  async save (MusignyEntityNameBasicLower: MusignyEntityNameBasicEntity): Promise<void> {
    const repository = this.manager.getRepository(MusignyEntityNameBasic)
    const row = await repository.findOne({ where: { id: MusignyEntityNameBasicLower.id } })

    if (!row) {
      await this.manager.createQueryBuilder()
        .insert()
        .into(MusignyEntityNameBasic, ['id'])
        .values({ id: MusignyEntityNameBasicLower.id })
        .execute()
    }
  }

  async delete (MusignyEntityNameBasicLower: MusignyEntityNameBasicEntity): Promise<void> {
    await this.manager.createQueryBuilder()
      .delete()
      .from(MusignyEntityNameBasic)
      .where({ id: MusignyEntityNameBasicLower.id })
      .execute()
  }
}
