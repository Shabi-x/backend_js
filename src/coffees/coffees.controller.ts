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

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // localhost:3001/coffees?limit=20&offset=10, apifox会自动解析并获取limit和offset两个QUERY参数
    const { limit, offset } = paginationQuery; //获取分页参数limit是每页显示的条数，offset是偏移量
    return (
      this.coffeesService.findAll() + 'limit:' + limit + 'offset:' + offset
    );
  }
  @Get('/:id')
  // findOne(@Param() params) {
  //获取id参数
  findOne(@Param('id') id: string) {
    // return `This action returns #${id} coffees`;
    return this.coffeesService.findOne(id);
  }

  @Post()
  // create(@Body('name') body) {
  //只获取body中的name参数
  // @HttpCode(HttpStatus.CREATED)//设置返回状态码
  create(@Body() body) {
    //获取body中的所有参数
    // return body;
    return this.coffeesService.create(body);
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() body) {
    // return `This action updates #${id} ¥${body.name} coffees`;
    return this.coffeesService.update(id, body);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    // return `This action removes #${id} coffees`;
    return this.coffeesService.remove(id);
  }
}
