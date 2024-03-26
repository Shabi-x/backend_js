import { Injectable } from '@nestjs/common';
import { Coffee } from './entities/coffee.entiy';

@Injectable()
//coffeeService负责管理咖啡相关的业务逻辑，存储、查询、更新、删除等操作
//供coffeesController或者其他地方调用
//通常provider和services处理业务逻辑以及和数据源的交互，controller处理请求
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'latte',
      brand: 'espresso',
      flavours: ['vanilla', 'chocolate'],
    },
    {
      id: 2,
      name: 'americano',
      brand: 'espresso',
      flavours: ['vanilla', 'chocolate'],
    },

    {
      id: 3,
      name: 'cappuccino',
      brand: 'espresso',
      flavours: ['vanilla', 'chocolate'],
    },

    {
      id: 4,
      name: 'mocha',
      brand: 'espresso',
      flavours: ['vanilla', 'chocolate'],
    },
  ]; //将其视作数据库，存储咖啡数据

  findAll(): Coffee[] {
    return this.coffees; //返回所有咖啡数据
  }
  findOne(id: string): Coffee {
    return this.coffees.find((coffee) => coffee.id === +id);
    //+id把字符串类型的id转换为数字类型，便于比较
  }
  create(createCoffeeDto: any): void {
    this.coffees.push(createCoffeeDto);
  }
  update(id: string, updateCoffeeDto: any): void {
    const exsitCoffee = this.findOne(id);
    if (exsitCoffee) {
      //如果存在该id的咖啡，则更新其属性
      //   Object.assign(exsitCoffee, updateCoffeeDto);
    }
  }
  remove(id: string): void {
    const index = this.coffees.findIndex((coffee) => coffee.id === +id);
    if (index >= 0) {
      this.coffees.splice(index, 1);
    }
  }
}
