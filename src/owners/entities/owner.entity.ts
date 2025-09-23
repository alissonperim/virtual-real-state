import { Property } from '@properties/entities/property.entity'
import { Address } from '@addresses/entities/address.entity'
import { Entity, Column, ManyToMany, OneToOne, JoinColumn } from 'typeorm'
import { BanksAccount } from '@banks-accounts/entities/banks-account.entity'
import { Domain } from '@shared/domain'
import { MaritalStatus } from '@shared/owner'

@Entity()
export class Owner extends Domain {
  @Column()
  name!: string

  @Column()
  lastName!: string

  @Column()
  document!: string

  @OneToOne(() => Address)
  address!: Address

  @Column({
    type: 'enum',
    enum: MaritalStatus,
  })
  maritalStatus!: string

  @Column()
  birthDate!: Date

  @ManyToMany(() => Property, (property) => property.owners)
  @JoinColumn()
  properties!: Property[]

  @OneToOne(() => BanksAccount)
  @JoinColumn()
  bankAccount!: BanksAccount
}
