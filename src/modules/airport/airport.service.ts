import { Injectable } from '@nestjs/common';
import { AirportRepository } from './airport.repository';
import { PaginationOptions } from '../../common/utils/sequelize-paginate.util';

@Injectable()
export class AirportService {
  constructor(private airportRepository: AirportRepository) {}
  findPaginate(paginationOptions?: PaginationOptions) {
    return this.airportRepository.findPaginate(paginationOptions);
  }
}
