import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class EventEntity {}

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  name: string;

  @Column('json') //存储事件的通用列
  payload: Record<string, any>;
}
