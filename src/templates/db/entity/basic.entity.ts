import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Entity('MusignyEntityNameBasicSnake', { schema: 'public' })
export class MusignyEntityNameBasic {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id'
  })
  id!: number
}
