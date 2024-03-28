import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //ValidationPipe的白名单，配合dto使用，可以限制请求参数的字段
      forbidNonWhitelisted: true, //禁止传入非白名单字段,会直接报错，超出白名单的字段会被提示不应该存在
      transform: true, //将请求参数转换成DTO类型
      transformOptions: {
        enableImplicitConversion: true, //开启自动转换
      },
    }),
  );
  await app.listen(3001);
}
bootstrap();
