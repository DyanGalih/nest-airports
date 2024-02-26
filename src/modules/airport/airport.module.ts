import { Module } from '@nestjs/common';
import { AirportService } from './airport.service';
import { AirportController } from './airport.controller';
import { AirportRepository } from './airport.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { AirportEntity } from './entities/airport.entity';

@Module({
  imports: [SequelizeModule.forFeature([AirportEntity])],
  providers: [AirportService, AirportRepository],
  controllers: [AirportController],
})
export class AirportModule {}
