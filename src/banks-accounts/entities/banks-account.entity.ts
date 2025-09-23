import { AccountType } from '@shared/bank-account'
import { Domain } from '@shared/domain'
import { Column, Entity } from 'typeorm'

@Entity()
export class BanksAccount extends Domain {
  @Column({
    type: 'varchar',
    length: 3,
  })
  code!: string

  @Column({
    type: 'varchar',
    length: 32,
  })
  branch!: string

  @Column({
    type: 'varchar',
    length: 32,
  })
  account!: string

  @Column({
    type: 'enum',
    enum: AccountType,
  })
  accountType!: AccountType

  @Column({
    type: 'varchar',
    length: 64,
  })
  pixKey!: string

  @Column()
  validated!: boolean
}
