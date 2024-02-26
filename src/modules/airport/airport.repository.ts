import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AirportEntity } from './entities/airport.entity';
import { PaginationOptions } from '../../common/utils/sequelize-paginate.util';

@Injectable()
export class AirportRepository {
  constructor(
    @InjectModel(AirportEntity) private airportEntity: typeof AirportEntity
  ) {}

  findPaginate(paginationOptions?: PaginationOptions) {
    return this.airportEntity.paginate({
      page: paginationOptions.page,
      limit: paginationOptions.limit,
    });
  }
}
