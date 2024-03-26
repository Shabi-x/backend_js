import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { CoffeesController } from './coffees/coffees.controller';
// import { CoffeesService } from './coffees/coffees.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [CoffeesModule], //使用命令nest g module 生成
  controllers: [AppController], //使用命令nest g controller 生成
  providers: [AppService], //使用命令nest g service 生成
})
export class AppModule {}
