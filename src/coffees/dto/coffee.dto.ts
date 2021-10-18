import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}

class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}

export { CreateCoffeeDto, UpdateCoffeeDto };
