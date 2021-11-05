import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Delete,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Protocol } from '../../src/common/decorators/protocol.decorator';
import { Public } from '../../src/common/decorators/public.decorator';
import { PaginationQueryDto } from '../../src/common/dto/pagination-query.dto';
import { ParseIntPipe } from '../../src/common/pipes/parse-int.pipe';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto, UpdateCoffeeDto } from './dto/coffee.dto';

// We can pass instances
// Use classes instead of instance to reduce memory usage since nest can easily reuse instances of the same class across the entire module
// @UsePipes(new ValidationPipe())
// @UsePipes(ValidationPipe)
@ApiTags('coffees')
@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {
  }

  @ApiResponse({ description: 'Forbidden' })
  @Public()
  @UsePipes(ValidationPipe)
  @Get()
  async findAll(
    @Protocol('https') protocol: string,
    @Query() paginationQuery: PaginationQueryDto,
  ) {
    return this.coffeeService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.coffeeService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDo: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDo);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.coffeeService.remove(id);
  }
}
