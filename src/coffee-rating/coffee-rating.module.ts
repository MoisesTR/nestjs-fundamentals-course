import { Module } from '@nestjs/common';
import { CoffeesModule } from '../../src/coffees/coffees.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [
    CoffeesModule,
    // DatabaseModule.register({
    //   type: 'postgres',
    //   host: 'localhost',
    //   password: 'pass123',
    //   port: 5432,
    // }),
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
