import { Address } from '../../addresses/entities/address.entity';
import { Entity, Column, ManyToMany, OneToOne, JoinColumn } from 'typeorm';

export enum MaritalStatus {
  married = 'married',
  widowed = 'widowed',
  divorced = 'divorced',
  single = 'single',
}

@Entity()
export class Owner {
  @Column()
  name!: string;

  @Column()
  lastName!: string;

  @Column()
  docoument!: string;

  @OneToOne(() => Address)
  address!: Address;

  @Column({
    type: 'enum',
    enum: MaritalStatus,
  })
  maritalStatus!: string;

  @Column()
  birthDate!: Date;

  @ManyToMany(() => Property)
  @JoinColumn()
  properties!: Property[];
}
