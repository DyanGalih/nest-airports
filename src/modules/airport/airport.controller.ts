import {
  Controller,
  DefaultValuePipe,
  Get,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
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
  @ApiQuery({ name: 'q', required: false })
  async getAirportList(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page?: number,
    @Query('q') q?: string
  ) {
    const limit: number = 20;
    return this.airportService.findPaginate(q, { page, limit });
  }
}
