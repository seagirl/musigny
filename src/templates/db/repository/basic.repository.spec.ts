import { MusignyEntityNameBasicRepository } from './basic.repository'
import { DB } from '../../db'
import { MusignyEntityNameBasicFactory } from '../../domain/factory/basic.factory'

const db = new DB()
const testId = 1

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
    const entity = MusignyEntityNameBasicFactory.create({ id: id })

    await repository.save(entity)
    const result = await repository.find(entity.id)

    expect(result).toEqual(
      expect.objectContaining({
        id: entity.id,
      })
    )
  })

  it('search', async () => {
    const repository = new MusignyEntityNameBasicRepository()
    const result = await repository.search()

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number)
        })
      ])
    )
  })

  it('search with params', async () => {
    const repository = new MusignyEntityNameBasicRepository()
    const result = await repository.search({
      limit: 100,
      offset: 0
    })

    if (result.length == 0)
      return

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number)
        })
      ])
    )
  })

  it('find', async () => {
    const repository = new MusignyEntityNameBasicRepository()
    const result = await repository.find(testId)

    expect(result).toEqual(
      expect.objectContaining({
        id: expect.any(Number)
      })
    )
  })

  it('update', async () => {
    const repository = new MusignyEntityNameBasicRepository()

    const entity = await repository.find(testId)
    expect(entity).toBeDefined()
    if (!entity) {
      return
    }

    await repository.save(entity)

    const result = await repository.find(entity.id)

    expect(result).toEqual(
      expect.objectContaining({
        id: entity.id
      })
    )
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
