import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ApyEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_id: string;

  @Column()
  deposit: number;

  @Column()
  interest_rate: number;

  @Column()
  yearly_compound_times: number;

  @Column()
  apy: number;

  @Column()
  amount: number;
}
