import {
  //   HttpException,
  //   HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entiy';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
//coffeeService负责管理咖啡相关的业务逻辑，存储、查询、更新、删除等操作
//供coffeesController或者其他地方调用
//通常provider和services处理业务逻辑以及和数据源的交互，controller处理请求
export class CoffeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}
  //使用InjectRepository 装饰器，将CoffeeEntity注入到coffeeRepository中，方便后续操作

  findAll() {
    return this.coffeeRepository.find({
      relations: ['flavors'],
    }); //返回所有咖啡数据
  }

  async findOne(id: string) {
    // const coffee = this.coffees.find((coffee) => coffee.id === +id);
    const coffee = await this.coffeeRepository.findOne({
      where: { id: Number(id) },
      relations: ['flavors'],
    }); //返回id对应的咖啡数据
    if (!coffee) {
      //   throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
    //+id把字符串类型的id转换为数字类型，便于比较
  }
  create(createCoffeeDto: CreateCoffeeDto): void {
    // this.coffees.push(createCoffeeDto);
    // return createCoffeeDto; //配合dto使用,会自动剥离白名单外的属性，除了dto中定义的属性，其他属性都不会被保存到数据库
    const coffee = this.coffeeRepository.create(createCoffeeDto);
    this.coffeeRepository.save(coffee);
  }
  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    // const exsitCoffee = this.findOne(id);
    // if (exsitCoffee) {
    //   //如果存在该id的咖啡，则更新其属性
    //   Object.assign(exsitCoffee, updateCoffeeDto);
    // }
    const coffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    this.coffeeRepository.save(coffee);
  }
  async remove(id: string) {
    // const index = this.coffees.findIndex((coffee) => coffee.id === +id);
    // if (index >= 0) {
    //   this.coffees.splice(index, 1);
    // }
    const coffee = await this.findOne(id);
    return this.coffeeRepository.remove(coffee);
  }
}
