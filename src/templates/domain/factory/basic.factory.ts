import { MusignyEntityNameBasicEntity } from '../entity/basic.entity'

interface MusignyEntityNameBasicFactoryInput {
  id: number;
}

export class MusignyEntityNameBasicFactory {
  static create (input: MusignyEntityNameBasicFactoryInput): MusignyEntityNameBasicEntity {
    return new MusignyEntityNameBasicEntity(
      input.id,
    )
  }

  static createFrom (entity: MusignyEntityNameBasicFactoryInput, input: Omit<MusignyEntityNameBasicFactoryInput, 'id'>): MusignyEntityNameBasicEntity {
    return new MusignyEntityNameBasicEntity(
      entity.id,
    )
  }
}
