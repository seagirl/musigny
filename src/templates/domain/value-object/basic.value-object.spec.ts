import { MusignyEntityNameBasicValueObject } from './basic.value-object'

describe('MusignyEntityNameBasicValueObject', () => {
  it('new', () => {
    expect(new MusignyEntityNameBasicValueObject('test')).toEqual(
      expect.objectContaining({
        name: 'test'
      })
    )
  })
})