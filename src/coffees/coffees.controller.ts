import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Res() response) {
    // return 'This action returns all coffees';
    response.status(HttpStatus.OK).send('This action returns all coffees'); //使用response对象返回数据
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
  @HttpCode(HttpStatus.CREATED) //设置返回状态码为201 Created
  create(@Body() body) {
    //获取body中的所有参数
    return body;
  }
}
