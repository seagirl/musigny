import { MusignyEntityNameBasicEntity } from '../../../domain/entity/basic.entity'

export const translate = (input: MusignyEntityNameBasicEntity): Record<string, unknown> => {
  return {
    id: input.id,
  }
}