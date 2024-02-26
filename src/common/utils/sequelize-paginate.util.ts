// SRC: https://github.com/marianozunino/sequelize-typescript-paginate/blob/master/src/index.ts

import { Model } from 'sequelize-typescript';
import { FindOptions } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';

export type PaginationOptions = {
  page?: number;
  limit?: number;
  sort?: string;
} & FindOptions;

export enum PaginationSort {
  Asc = 'asc',
  Desc = 'desc',
}

export const DEFAULT_LIMIT: number = 30;

export class Paginated<I> {
  @ApiProperty()
  items: I[];

  @ApiProperty()
  page: number;

  @ApiProperty()
  limit: number;

  @ApiProperty()
  totalItems: number;

  @ApiProperty()
  totalPages: number;
}

export class PaginatedModel extends Model {
  static async paginate<T extends typeof PaginatedModel, I = InstanceType<T>>(
    this: T,
    { page = 1, limit = DEFAULT_LIMIT, ...params }: PaginationOptions = {
      page: 1,
      limit: DEFAULT_LIMIT,
    }
  ): Promise<Paginated<I>> {
    const options: any = Object.assign({}, params);

    // const countOptions = Object.keys(options).reduce((acc, key) => {
    //     if (!['order', 'attributes', 'include'].includes(key)) {
    //         acc[key] = options[key];
    //     }
    //     return acc;
    // }, {});

    options.limit = limit;
    options.offset = limit * (page - 1);

    if (params.order) options.order = params.order;

    // const [count, rows] = await Promise.all([this.count(countOptions), this.findAll(options)]);
    const { count, rows } = await this.findAndCountAll(options);

    const total = options.group !== undefined ? count['length'] : count;
    const typedRows = rows as unknown as I[];
    const pages = Math.ceil(total / limit);

    return {
      items: typedRows,
      page: page,
      limit: limit,
      totalItems: total,
      totalPages: pages,
    };
  }
}
