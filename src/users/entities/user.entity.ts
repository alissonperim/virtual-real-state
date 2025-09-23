import { Domain } from '@shared/domain'
import { Column, Entity } from 'typeorm'

@Entity()
export class User extends Domain {
  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
    unique: true,
  })
  email!: string
}
