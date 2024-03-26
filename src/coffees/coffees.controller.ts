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

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    // localhost:3001/coffees?limit=20&offset=10,apifox会自动解析并获取limit和offset两个query参数
    const { limit, offset } = paginationQuery; //获取分页参数limit是每页显示的条数，offset是偏移量
    return 'This action returns all ,limit=' + limit + ',offset=' + offset;
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
  // @HttpCode(HttpStatus.CREATED)//设置返回状态码
  create(@Body() body) {
    //获取body中的所有参数
    return body;
  }

  @Patch('/:id')
  update(@Param('id') id: string, @Body() body) {
    return `This action updates #${id} ¥${body.name} coffees`;
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffees`;
  }
}
