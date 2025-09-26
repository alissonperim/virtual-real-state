import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm'
import { Address } from 'src/addresses/entities/address.entity'
import { Owner } from 'src/owners/entities/owner.entity'
import { Domain } from '@shared/domain'
import { RealStateAgency } from '@real-state-agencies/entities/real-state-agency.entity'
import { RentalContract } from '@rental-contracts/entities/rental-contract.entity'
import { Insurancy } from '@insurancies/entities/insurancy.entity'

@Entity()
export class Property extends Domain {
  @OneToOne(() => Address)
  address!: Address

  @ManyToMany(() => Owner, (owner: Owner) => owner.properties, {
    cascade: true,
  })
  owners!: Owner[]

  @Column({
    type: 'decimal',
    precision: 2,
  })
  rentalValue!: number

  @Column({
    type: 'boolean',
  })
  isRented!: boolean

  @Column({
    nullable: true,
  })
  rentalContract!: RentalContract

  @Column({
    type: 'int',
  })
  minimumRentalPeriod!: number

  @Column({
    type: 'varchar',
    length: 255,
  })
  description!: string

  @OneToOne(() => Insurancy)
  @JoinColumn()
  insurance!: Insurancy

  @ManyToOne(
    () => RealStateAgency,
    (realStateAgency) => realStateAgency.properties,
    {
      nullable: true,
    },
  )
  realStateAgency!: RealStateAgency
}
