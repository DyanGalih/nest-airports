require('dotenv').config();

module.exports = {
  development: {
    dialect: process.env.DATABASE_CONNECTION,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_POST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    migrationStorageTableName: 'sequelize_meta',
    seederStorage: 'sequelize',
    seederStorageTableName: 'sequelize_data',
  },
  test: {
    dialect: process.env.DATABASE_CONNECTION,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_POST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    migrationStorageTableName: 'sequelize_meta',
    seederStorage: 'sequelize',
    seederStorageTableName: 'sequelize_data',
  },
  production: {
    dialect: process.env.DATABASE_CONNECTION,
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_POST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    migrationStorageTableName: 'sequelize_meta',
    seederStorage: 'sequelize',
    seederStorageTableName: 'sequelize_data',
  },
}
