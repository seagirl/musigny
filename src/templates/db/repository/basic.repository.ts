import { EntityManager, getManager } from 'typeorm'
import { MusignyEntityNameBasicRepository as MusignyEntityNameBasicRepositoryInterfaceInterface, SearchInput } from '../../app/repository/basic.repository'
import { MusignyEntityNameBasicEntity } from '../../domain/entity/basic.entity'
import { MusignyEntityNameBasicFactory } from '../../domain/factory/basic.factory'
import { MusignyEntityNameBasic } from '../row/basic.row'

export class MusignyEntityNameBasicRepository implements MusignyEntityNameBasicRepositoryInterfaceInterface {
  private manager: EntityManager = getManager()

  async nextIdentifier (): Promise<number> {
    const row = await getManager().createQueryBuilder()
      .select([
        'nextval(\'MusignyEntityNameBasicSnakes_id_seq\'::regclass)::int as id'
      ])
      .from(MusignyEntityNameBasic, 'MusignyEntityNameBasicSnakes')
      .limit(1)
      .getRawOne()
    return row.id
  }

  async search (input: SearchInput = {}): Promise<MusignyEntityNameBasicEntity[]> {
    const query = this.manager.createQueryBuilder()
      .select([
        'MusignyEntityNameBasicSnakes.id as id'
      ])
      .from(MusignyEntityNameBasic, 'MusignyEntityNameBasicSnakes')
      .orderBy('MusignyEntityNameBasicSnakes.id')
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
        'MusignyEntityNameBasicSnakes.id as id',
      ])
      .from(MusignyEntityNameBasic, 'MusignyEntityNameBasicSnakes')
      .where('MusignyEntityNameBasicSnakes.id = :id', { id: id })
      .orderBy('MusignyEntityNameBasicSnakes.id')
      .getRawOne()

    if (!row) {
      return
    }
    return MusignyEntityNameBasicFactory.create({
      id: row.id,
    })
  }

  async save (entity: MusignyEntityNameBasicEntity): Promise<void> {
    const repository = this.manager.getRepository(MusignyEntityNameBasic)
    const row = await repository.findOne({ where: { id: entity.id } })

    if (!row) {
      await this.manager.createQueryBuilder()
        .insert()
        .into(MusignyEntityNameBasic, ['id'])
        .values({ id: entity.id })
        .execute()
    }
  }

  async delete (entity: MusignyEntityNameBasicEntity): Promise<void> {
    await this.manager.createQueryBuilder()
      .delete()
      .from(MusignyEntityNameBasic)
      .where({ id: entity.id })
      .execute()
  }
}
