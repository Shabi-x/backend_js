import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entiy';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity/event.entity';
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
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  //导入TypeOrmModule，并将Coffee和Flavor这两个实体类注册到当前模块中。
  //这是为了确保在当前模块或任何从当前模块导入的其他模块中，Coffee和Flavor实体可以被TypeORM使用。
  exports: [],
})
export class CoffeesModule {}
