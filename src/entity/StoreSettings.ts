import { TaxCode } from './TaxCode';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class StoreSettings {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)', onUpdate: 'CURRENT_TIMESTAMP(6)' })
  modifiedAt: Date;

  @Column()
  open: boolean;

  @OneToMany(() => TaxCode, (taxCode) => taxCode.storeSettings)
  taxCodes: TaxCode[];
}
