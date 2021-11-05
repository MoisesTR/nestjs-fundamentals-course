import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';

class CreateCoffeeDto {
  @ApiProperty({ description: 'The name of a coffee' })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'The brand of a coffee.' })
  @IsString()
  readonly brand: string;

  @ApiProperty({ example: [] })
  @IsString({ each: true })
  readonly flavors: string[];
}

class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}

export { CreateCoffeeDto, UpdateCoffeeDto };
