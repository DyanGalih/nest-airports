# setup migrations

sequelize migration:generate --name [new-table-name]

### example
sequelize migration:generate --name roles

### execute migrations
sequelize db:migrate

### rollback or undo migration
sequelize db:migrate:undo

### rollback or undo migration all
sequelize db:migrate:undo:all

# setup the seed
Make sure that your active directory is in the src folder

sequelize seed:generate --name [seedName]

### example
sequelize seed:generate --name role-table-seeder

### execute the seed
sequelize db:seed:all

### automatic generate entities
stg -D mariadb -h localhost -p 3306 -d myDatabase -u myUsername -x myPassword --indices --case camel --clean --out-dir models
