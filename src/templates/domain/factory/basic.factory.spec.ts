import { MusignyEntityNameBasicFactory } from './basic.factory'

const testId = 1

describe('MusignyEntityNameBasic Factory', () => {
  it('create', () => {
    const result = MusignyEntityNameBasicFactory.create({ id: testId })

    expect(result).toEqual(
      expect.objectContaining({
        id: 1,
      })
    )
  })

  it('createFrom', () => {
    const entity = MusignyEntityNameBasicFactory.create({ id: testId })
    const result = MusignyEntityNameBasicFactory.createFrom(entity, {
    })

    expect(result).toEqual(
      expect.objectContaining({
        id: 1,
      })
    )
  })
})
