import { MusignyEntityNameBasicEntity } from '../../domain/entity/basic.entity'
import { MusignyEntityNameBasicViewModel } from '../view-model/basic.view-model'

export const translate = (input: MusignyEntityNameBasicEntity): MusignyEntityNameBasicViewModel => {
  return {
    id: input.id,
  }
}