import { DateTime } from 'luxon'
import { EntityManager, getManager, SelectQueryBuilder } from 'typeorm'
import { SortOrder } from '../../core'
import { MusignyEntityNameBasicEntity } from '../../domain/entity/basic.entity'
import { MusignyEntityNameBasicRepository as RepositoryInterface, SearchInput, SearchOutput, SearchSortKey } from '../../domain/repository/basic.repository'

export interface MusignyEntityNameBasicRow {
  id: number;
}

export class MusignyEntityNameBasicRepository implements RepositoryInterface {
  private tableName = 'MusignyEntityNameBasicSnakes'

  private manager: EntityManager

  constructor (manager: EntityManager = getManager()) {
    this.manager = manager
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private createSelectQuery (): SelectQueryBuilder<any> {
    return this.manager.createQueryBuilder()
      .select([
        'MusignyEntityNameBasicSnakes.id as id'
      ])
      .from(this.tableName, this.tableName)
  }

  private translate (row: MusignyEntityNameBasicRow): MusignyEntityNameBasicEntity {
    return new MusignyEntityNameBasicEntity(row.id)
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

    const rows: MusignyEntityNameBasicRow[] = await query.getRawMany()

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
    const row: MusignyEntityNameBasicRow = await this.createSelectQuery()
      .where('MusignyEntityNameBasicSnakes.id = :id', { id: id })
      .orderBy('MusignyEntityNameBasicSnakes.id')
      .getRawOne()

    if (!row) {
      return
    }

    return this.translate(row)
  }

  async save (entity: MusignyEntityNameBasicEntity): Promise<void> {
    const repository = this.manager.getRepository(this.tableName)
    const row = await repository.findOne({ where: { id: entity.id } })

    if (!row) {
      const values = {
        id: entity.id
      }

      await this.manager.createQueryBuilder()
        .insert()
        .into(this.tableName, Object.keys(values))
        .values(values)
        .execute()
    } else {
      await this.manager.createQueryBuilder()
        .update(this.tableName)
        .set({
          updatedAt: DateTime.local()
        })
        .where('id = :id', { id: entity.id })
        .execute()
    }
  }

  async delete (entity: MusignyEntityNameBasicEntity): Promise<void> {
    await this.manager.createQueryBuilder()
      .delete()
      .from(this.tableName)
      .where({ id: entity.id })
      .execute()
  }
}
