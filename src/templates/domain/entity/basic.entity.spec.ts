import { MusignyEntityNameBasicEntity } from './basic.entity'

describe('MusignyEntityNameBasicEntity', () => {
  it('new', () => {
    expect(new MusignyEntityNameBasicEntity(1)).toEqual(
      expect.objectContaining({
        id: 1
      })
    )
  })
})