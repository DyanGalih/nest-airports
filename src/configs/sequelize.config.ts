import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  SequelizeModuleAsyncOptions,
  SequelizeModuleOptions,
} from '@nestjs/sequelize';

export const sequelizeAsyncConfig: SequelizeModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService): SequelizeModuleOptions => ({
    dialect: configService.get('DATABASE_CONNECTION'),
    host: configService.get<string>('DATABASE_HOST'),
    port: +configService.get<number>('DATABASE_PORT'),
    username: configService.get<string>('DATABASE_USERNAME'),
    password: configService.get<string>('DATABASE_PASSWORD'),
    database: configService.get<string>('DATABASE_NAME'),
    autoLoadModels: true,
    synchronize: false,
    logging: false,
  }),
  inject: [ConfigService],
};
