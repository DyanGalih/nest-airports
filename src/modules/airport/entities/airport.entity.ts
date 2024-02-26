import {
  Table,
  Column,
  DataType,
  Index,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';
import { PaginatedModel } from '../../../common/utils/sequelize-paginate.util';

export interface AirportsAttributes {
  id?: string;
  ident?: string;
  type?: string;
  name?: string;
  latitudeDeg: number;
  longitudeDeg: number;
  elevationFt?: number;
  continent?: string;
  isoCountry?: string;
  isoRegion?: string;
  municipality?: string;
  scheduledService?: string;
  gpsCode?: string;
  iataCode?: string;
  localCode?: string;
  homeLink?: string;
  wikipediaLink?: string;
  keywords?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

@Table({ tableName: 'airports', timestamps: true, underscored: true })
export class AirportEntity
  extends PaginatedModel
  implements AirportsAttributes
{
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.BIGINT })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
  id?: string;

  @Column({ allowNull: true, type: DataType.STRING(10) })
  @Index({ name: 'ident', using: 'BTREE', order: 'ASC', unique: true })
  ident?: string;

  @Column({ allowNull: true, type: DataType.STRING(20) })
  type?: string;

  @Column({ allowNull: true, type: DataType.STRING(175) })
  name?: string;

  @Column({ field: 'latitude_deg', type: DataType.DOUBLE(16, 10) })
  latitudeDeg!: number;

  @Column({ field: 'longitude_deg', type: DataType.DOUBLE(16, 10) })
  longitudeDeg!: number;

  @Column({ field: 'elevation_ft', allowNull: true, type: DataType.INTEGER })
  elevationFt?: number;

  @Column({ allowNull: true, type: DataType.STRING(5) })
  continent?: string;

  @Column({ field: 'iso_country', allowNull: true, type: DataType.STRING(5) })
  isoCountry?: string;

  @Column({ field: 'iso_region', allowNull: true, type: DataType.STRING(10) })
  isoRegion?: string;

  @Column({ allowNull: true, type: DataType.STRING(75) })
  municipality?: string;

  @Column({
    field: 'scheduled_service',
    allowNull: true,
    type: DataType.STRING(5),
  })
  scheduledService?: string;

  @Column({ field: 'gps_code', allowNull: true, type: DataType.STRING(5) })
  gpsCode?: string;

  @Column({ field: 'iata_code', allowNull: true, type: DataType.STRING(5) })
  iataCode?: string;

  @Column({ field: 'local_code', allowNull: true, type: DataType.STRING(20) })
  localCode?: string;

  @Column({ field: 'home_link', allowNull: true, type: DataType.STRING(255) })
  homeLink?: string;

  @Column({
    field: 'wikipedia_link',
    allowNull: true,
    type: DataType.STRING(255),
  })
  wikipediaLink?: string;

  @Column({ allowNull: true, type: DataType.STRING })
  keywords?: string;

  @CreatedAt
  createdAt!: Date;

  @UpdatedAt
  updatedAt!: Date;

  @DeletedAt
  deletedAt?: Date;
}
