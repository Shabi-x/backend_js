import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() //每一个Entity类代表一个sql表，这里会生成一个名为coffees的表
export class Coffee {
  @PrimaryGeneratedColumn() //与单独设置主键（PrimaryColumn）不同，这里设置的id为自增主键（PrimaryGeneratedColumn）
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, {
    cascade: true, //这里的作用是当删除coffee时，同时删除其关联的flavor
  })
  // 定义多对多关系:第一个参数返回关联的实体类的引用，这里是Flavor，第二个参数返回关联的实体类中的字段名，指定了需要选择的属性？
  flavors: Flavor[];
}
