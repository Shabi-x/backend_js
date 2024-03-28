/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  // HttpCode,
  // HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    // localhost:3001/coffees?limit=20&offset=10, apifox会自动解析并获取limit和offset两个QUERY参数
    return this.coffeesService.findAll(paginationQuery);
  }
  @Get('/:id')
  findOne(@Param('id') id: string) {
    // return `This action returns #${id} coffees`;
    return this.coffeesService.findOne(id);
  }

  @Post()
  // create(@Body('name') body) {
  //只获取body中的name参数
  // @HttpCode(HttpStatus.CREATED)//设置返回状态码
  create(@Body() CreateCoffeeDto: CreateCoffeeDto) {
    //获取body中的所有参数
    // return body;
    return this.coffeesService.create(CreateCoffeeDto);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() UpdateCoffeeDto: UpdateCoffeeDto) {
    // return `This action updates #${id} ¥${body.name} coffees`;
    return this.coffeesService.update(id, UpdateCoffeeDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    // return `This action removes #${id} coffees`;
    return this.coffeesService.remove(id);
  }
}
