import { Entity, ManyToMany, OneToOne } from 'typeorm'
import { Address } from 'src/addresses/entities/address.entity'
import { Owner } from 'src/owners/entities/owner.entity'
import { Domain } from '@shared/domain'

@Entity()
export class Property extends Domain {
  @OneToOne(() => Address)
  address!: Address

  @ManyToMany(() => Owner, (owner: Owner) => owner.properties, {
    cascade: true,
  })
  owners!: Owner[]
}
