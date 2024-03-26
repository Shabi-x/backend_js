import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity() //每一个Entity类代表一个sql表，这里会生成一个名为coffees的表
export class Coffee {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;
  @Column('json', { nullable: true })
  flavours: string[];
}
