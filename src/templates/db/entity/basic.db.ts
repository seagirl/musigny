import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Entity('MusignySecondlyNameBasicLowers', { schema: 'public' })
export class MusignySecondlyNameBasic {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'id'
  })
  id!: number
}
