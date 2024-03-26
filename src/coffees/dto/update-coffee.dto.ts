// export class UpdateCoffeeDto {
//   readonly name?: string;
//   readonly brand?: string;
//   readonly flavours?: string[];
// }

import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto'; // pnpm i @nestjs/mapped-types

//使得update的dto继承于create的dto，并将所有字段都设置为可选，使代码不再冗余
export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
