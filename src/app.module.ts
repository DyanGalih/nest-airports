import { Module } from '@nestjs/common';
import { AirportModule } from './modules/airport/airport.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { sequelizeAsyncConfig } from './configs/sequelize.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AirportModule,
    SequelizeModule.forRootAsync(sequelizeAsyncConfig),
  ],
})
export class AppModule {}
