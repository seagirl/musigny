import { EntityManager, getManager, SelectQueryBuilder } from 'typeorm'
import { MusignyEntityNameBasicRepository as RepositoryInterface, SearchInput, SearchOutput, SearchSortKey } from '../../app/repository/basic.repository'
import { SortOrder } from '../../core'
import { MusignyEntityNameBasicEntity } from '../../domain/entity/basic.entity'
import { MusignyEntityNameBasicFactory } from '../../domain/factory/basic.factory'
import { MusignyDBEntityNameBasic } from '../entity/basic.db-entity'

export class MusignyEntityNameBasicRepository implements RepositoryInterface {
  private manager: EntityManager = getManager()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private createSelectQuery (): SelectQueryBuilder<any> {
    return this.manager.createQueryBuilder()
      .select([
        'MusignyEntityNameBasicSnakes.id as id'
      ])
      .from(MusignyDBEntityNameBasic, 'MusignyEntityNameBasicSnakes')
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private translate (row: any): MusignyEntityNameBasicEntity {
    return MusignyEntityNameBasicFactory.create({
      id: row.id,
    })
  }

  async nextIdentifier (): Promise<number> {
    const row = await this.manager.createQueryBuilder()
      .select([
        'nextval(\'MusignyEntityNameBasicSnakes_id_seq\'::regclass)::int as id'
      ])
      .from('MusignyEntityNameBasicSnakes_id_seq', 'MusignyEntityNameBasicSnakes_id_seq')
      .limit(1)
      .getRawOne()
    return row.id
  }

  async search (input: SearchInput = {}): Promise<SearchOutput> {
    const sortKey = input.sortKey ?? SearchSortKey.createdAt
    const sortOrder = input.sortOrder ?? SortOrder.DESC
    const limit = input.limit ?? 5000

    const query = this.createSelectQuery()
      .limit(limit + 1)
      .offset(input.offset)

    switch (sortKey) {
      case SearchSortKey.createdAt:
        query.addOrderBy('MusignyEntityNameBasicSnakes.created_at', sortOrder)
        break
      default:
        break
    }

    query.addOrderBy('MusignyEntityNameBasicSnakes.id', SortOrder.DESC)

    const rows = await query.getRawMany()

    let hasNext = false
    if (rows.length > limit) {
      hasNext = true
      rows.pop()
    }

    const entities = rows.map(row => {
      return this.translate(row)
    })

    return {
      entities: entities,
      hasNext: hasNext
    }
  }

  async find (id: number): Promise<MusignyEntityNameBasicEntity | undefined> {
    const row = await this.createSelectQuery()
      .where('MusignyEntityNameBasicSnakes.id = :id', { id: id })
      .orderBy('MusignyEntityNameBasicSnakes.id')
      .getRawOne()

    if (!row) {
      return
    }

    return this.translate(row)
  }

  async save (entity: MusignyEntityNameBasicEntity): Promise<void> {
    const repository = this.manager.getRepository(MusignyDBEntityNameBasic)
    const row = await repository.findOne({ where: { id: entity.id } })

    if (!row) {
      const values = {
        id: entity.id
      }

      await this.manager.createQueryBuilder()
        .insert()
        .into(MusignyDBEntityNameBasic, Object.keys(values))
        .values(values)
        .execute()
    } else {
      await this.manager.createQueryBuilder()
        .update(MusignyDBEntityNameBasic)
        .set({
          id: entity.id
        })
        .where('id = :id', { id: entity.id })
        .execute()
    }
  }

  async delete (entity: MusignyEntityNameBasicEntity): Promise<void> {
    await this.manager.createQueryBuilder()
      .delete()
      .from(MusignyDBEntityNameBasic)
      .where({ id: entity.id })
      .execute()
  }
}
