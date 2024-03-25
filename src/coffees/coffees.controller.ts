import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    return 'This action returns all coffees';
  }
  @Get('/:id')
  // findOne(@Param() params) {
  //获取id参数
  findOne(@Param('id') id: string) {
    return `This action returns #${id} coffees`;
  }

  @Post()
  // create(@Body('name') body) {
  //只获取body中的name参数
  create(@Body() body) {
    //获取body中的所有参数
    return body;
  }
}
