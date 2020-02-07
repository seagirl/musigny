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
}
