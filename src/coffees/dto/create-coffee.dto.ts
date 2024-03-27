import { IsString } from 'class-validator';
//pnpm i class-validator class-transformer
//这个包的功能是验证类字段的类型是否符合要求，并将其转换成对应的数据类型。

export class CreateCoffeeDto {
  @IsString()
  //作用：验证字段类型是否符合要求，如果不是，则会抛出一个400错误
  //同样的，缺了字段也会抛出一个400错误
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
