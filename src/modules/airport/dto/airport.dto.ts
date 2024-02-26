import { ApiProperty } from '@nestjs/swagger';

export class AirportDto {
  @ApiProperty({
    description: 'Airport Id',
  })
  id?: string;
  @ApiProperty({
    description: 'Airport ident',
  })
  ident?: string;
  @ApiProperty({
    description: 'Airport type',
  })
  type?: string;
  @ApiProperty({
    description: 'Airport name',
  })
  name?: string;
  @ApiProperty({
    description: 'Airport latitude',
  })
  latitudeDeg: number;
  @ApiProperty({
    description: 'Airport longitude',
  })
  longitudeDeg: number;
  @ApiProperty({
    description: 'Airport elevation',
  })
  elevationFt?: number;
  @ApiProperty({
    description: 'Airport continent',
  })
  continent?: string;
  @ApiProperty({
    description: 'Airport ISO Country',
  })
  isoCountry?: string;
  @ApiProperty({
    description: 'Airport ISO Region',
  })
  isoRegion?: string;
  @ApiProperty({
    description: 'Airport municipality',
  })
  municipality?: string;
  @ApiProperty({
    description: 'Airport Schedule Service',
  })
  scheduledService?: string;
  @ApiProperty({
    description: 'Airport Gps Code',
  })
  gpsCode?: string;
  @ApiProperty({
    description: 'Airport IATA Code',
  })
  iataCode?: string;
  @ApiProperty({
    description: 'Airport Local Code',
  })
  localCode?: string;
  @ApiProperty({
    description: 'Airport Home Link',
  })
  homeLink?: string;
  @ApiProperty({
    description: 'Airport Wikipedia Link',
  })
  wikipediaLink?: string;
  @ApiProperty({
    description: 'Airport Keywords',
  })
  keywords?: string;
}
