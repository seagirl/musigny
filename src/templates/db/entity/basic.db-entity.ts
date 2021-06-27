import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Entity('MusignyDBEntityNameBasicSnake', { schema: 'public' })
export class MusignyDBEntityNameBasic {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id'
  })
  id!: number
}