import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

// @Injectable()
// export class CoffeeBrandsFactory {
//   create() {
//     return ['buddy brew', 'test'];
//   }
// }

@Module({
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ], //Adding Coffee Entity here to TypeOrmModule.forFeature
  exports: [CoffeesService],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    // CoffeeBrandsFactory,
    // { provide: COFFEE_BRANDS, useValue: ['buddy brew', 'nescafe'] },
    // {
    //   provide: COFFEE_BRANDS,
    //   useFactory: async (connection: Connection): Promise<string[]> => {
    //     return Promise.resolve(['buddy brew', 'nescafe']);
    //   },
    //   inject: [Connection],
    // },
    // {
    //   provide: COFFEE_BRANDS,
    //   useFactory: (brandsFactory: CoffeeBrandsFactory) =>
    //     brandsFactory.create(),
    //   inject: [CoffeeBrandsFactory],
    // },
  ],
})
export class CoffeesModule {}
