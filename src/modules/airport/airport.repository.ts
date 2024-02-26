import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AirportEntity } from './entities/airport.entity';
import { PaginationOptions } from '../../common/utils/sequelize-paginate.util';
import { Op } from 'sequelize';

@Injectable()
export class AirportRepository {
  constructor(
    @InjectModel(AirportEntity) private airportEntity: typeof AirportEntity
  ) {}

  findPaginate(q: string = '', paginationOptions?: PaginationOptions) {
    return this.airportEntity.paginate({
      page: paginationOptions.page,
      limit: paginationOptions.limit,
      where: {
        name: {
          [Op.like]: `%${q}%`,
        },
      },
    });
  }
}
