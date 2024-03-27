import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() //每一个Entity类代表一个sql表，这里会生成一个名为coffees的表
export class Coffee {
  @PrimaryGeneratedColumn() //与单独设置主键（PrimaryColumn）不同，这里设置的id为自增主键（PrimaryGeneratedColumn）
  id: number;
  @Column()
  name: string;
  @Column()
  brand: string;
  @Column('json', { nullable: true })
  flavours: string[];
}
