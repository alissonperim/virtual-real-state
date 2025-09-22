import { States, Domain, ResidenceType } from '../../shared';
import { Entity, Column } from 'typeorm';

@Entity()
export class Address extends Domain {
  @Column({
    type: 'varchar',
    length: 64
  })
  street!: string;

  @Column({
    type: 'varchar',
    length: 64
  })
  neighborhood!: string;

  @Column({
    type: 'varchar',
    length: 24
  })
  city!: string;

  @Column({
    type: 'enum',
    enum: States
  })
  state!: States;

  @Column({
    type: 'varchar',
    length: 64
  })
  complement!: string;

  @Column({
    type: 'varchar',
    length: 8
  })
  postalCode!: string;

  @Column({
    type: 'varchar',
    length: 4
  })
  country!: string;

  @Column({
    type: 'varchar',
    length: 5
  })
  number!: string;

  @Column({
    type: 'enum',
    enum: ResidenceType
  })
  residenceType!: ResidenceType;
}
