import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AirportService } from './airport.service';
import { AirportDto } from './dto/airport.dto';

@Controller('airport')
@ApiTags('Airports')
export class AirportController {
  constructor(private airportService: AirportService) {}
  @Get()
  @ApiTags('Airports')
  @ApiOkResponse({
    description: 'Airport List',
    type: AirportDto,
    isArray: true,
  })
  async getAirportList(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page?: number
  ) {
    const limit: number = 20;
    return this.airportService.findPaginate({ page, limit });
  }
}
