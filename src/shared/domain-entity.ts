import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm';

export class Domain {
  @PrimaryColumn({
    type: 'varchar',
    length: 30
  })
  id!: string;

  @CreateDateColumn({
    default: new Date(),
    nullable: false
  })
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;

  @Column({
    type: 'boolean'
  })
  active!: boolean;
}
