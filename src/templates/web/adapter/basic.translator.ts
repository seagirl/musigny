import { MusignySecondlyNameBasicEntity } from '../../domain/entity/basic.entity'
import { MusignySecondlyNameBasicViewModel } from '../view-model/basic.view-model'

export const translate = (input: MusignySecondlyNameBasicEntity): MusignySecondlyNameBasicViewModel => {
  return {
    id: input.id,
  }
}