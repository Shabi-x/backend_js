import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entiy';

/**
//Module参数有四个，分别是controllers、providers、exports、imports。
//controllers：控制器，用于处理HTTP请求。
//providers：提供者，用于注册服务。
//exports：导出，用于导出模块的公共部分，让其他模块可以导入。
//imports：导入，用于导入其他模块。
 */

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService],
  //此时应该把coffeesService和coffeesController从AppModule中删除引用，
  //这是因为如果我们不把它们实例化，他们会被实例化两次
  //一个模块只是组织了与特定功能相关的代码，帮助我们保持代码的条理性，并为我们的程序建立清晰的边界
  exports: [],
  imports: [TypeOrmModule.forFeature([Coffee])], //导入TypeORM模块，并注册Coffee实体到模块中
})
export class CoffeesModule {}
