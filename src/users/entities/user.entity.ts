import { Address } from '@addresses/entities/address.entity'
import { Property } from '@properties/entities/property.entity'
import { Domain } from '@shared/domain'
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm'

@Entity()
export class User extends Domain {
  @Column()
  name!: string

  @Column()
  lastName!: string

  @Column({
    type: 'varchar',
    length: 64,
    nullable: false,
    unique: true,
  })
  email!: string

  @Column()
  document!: string

  @OneToOne(() => Address)
  @JoinColumn()
  address!: Address

  @Column()
  birthDate!: Date

  @OneToMany(() => Property, (property) => property.owners)
  @JoinColumn()
  properties!: Property[]

  @OneToOne(() => BanksAccount)
  @JoinColumn()
  bankAccount!: BanksAccount
}
