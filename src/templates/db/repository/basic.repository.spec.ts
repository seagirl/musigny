
import { SortOrder } from '../../core'
import { DB } from '../../db'
import { MusignyEntityNameBasicEntity } from '../../domain/entity/basic.entity'
import { SearchSortKey } from '../../domain/repository/basic.repository'
import { MusignyEntityNameBasicRepository } from './basic.repository'

const db = new DB()
let testId: number

describe('MusignyEntityNameBasicRepository', () => {
  beforeAll(async () => {
    await db.init()
  })

  afterAll(async () => {
    await db.close()
  })

  it('create', async () => {
    const repository = new MusignyEntityNameBasicRepository()

    const id = await repository.nextIdentifier()
    const entity = new MusignyEntityNameBasicEntity(id)

    testId = id

    await repository.save(entity)
    const result = await repository.find(entity.id)

    expect(result).toEqual(entity)
  })

  it('search', async () => {
    const repository = new MusignyEntityNameBasicRepository()
    const result = await repository.search()

    expect(result).toEqual({
      hasNext: expect.any(Boolean),
      entities: expect.arrayContaining([ expect.any(MusignyEntityNameBasicEntity) ])
    })
  })

  it('search with params', async () => {
    const repository = new MusignyEntityNameBasicRepository()
    const result = await repository.search({
      sortKey: SearchSortKey.id,
      sortOrder: SortOrder.ASC,
      limit: 100,
      offset: 0
    })

    expect(result).toEqual({
      hasNext: expect.any(Boolean),
      entities: expect.arrayContaining([ expect.any(MusignyEntityNameBasicEntity) ])
    })
  })

  it('find', async () => {
    const repository = new MusignyEntityNameBasicRepository()
    const result = await repository.find(testId)
    expect(result).toEqual(expect.any(MusignyEntityNameBasicEntity))
  })

  it('update', async () => {
    const repository = new MusignyEntityNameBasicRepository()

    const entity = await repository.find(testId)
    expect(entity).toBeDefined()
    if (!entity) {
      return
    }

    const newEntity = entity
    await repository.save(newEntity)

    const result = await repository.find(newEntity.id)
    expect(result).toEqual(newEntity)
  })

  it('delete', async () => {
    const repository = new MusignyEntityNameBasicRepository()

    let entity = await repository.find(testId)
    expect(entity).not.toBe(undefined)
    if (!entity) {
      return
    }

    await repository.delete(entity)

    entity = await repository.find(testId)
    expect(entity).toBe(undefined)
  })
})
