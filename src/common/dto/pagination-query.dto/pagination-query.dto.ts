// import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional() //应该为’缺失或者不定义也不会抛出异常‘
  //   @Type(() => Number) //来自class-transformer的装饰器，将字符串转换为数字类型，因为queryParams中的limit和offset都是作为字符串传入的
  @IsPositive() //自定义验证器，限制limit和offset必须为正数
  limit: number;

  @IsOptional()
  //   @Type(() => Number)
  @IsPositive()
  offset: number;
}
