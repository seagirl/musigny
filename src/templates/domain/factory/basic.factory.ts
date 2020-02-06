import { MusignySecondlyNameBasicEntity } from '../entity/basic.entity'

interface MusignySecondlyNameBasicFactoryInput {
  id: number;
}

export class MusignySecondlyNameBasicFactory {
  static create (input: MusignySecondlyNameBasicFactoryInput): MusignySecondlyNameBasicEntity {
    return new MusignySecondlyNameBasicEntity(
      input.id,
    )
  }
}
