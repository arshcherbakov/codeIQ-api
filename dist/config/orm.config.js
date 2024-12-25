"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ormConfig = exports.typeOrmModuleOptions = void 0;
require("dotenv/config");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
exports.typeOrmModuleOptions = {
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + "/../**/entities/*.entity.{js,ts}"],
    synchronize: false,
    autoLoadEntities: true,
    migrationsRun: true,
    logging: false,
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
};
exports.ormConfig = {
    ...exports.typeOrmModuleOptions,
    migrationsTableName: "migrations",
    migrations: ["dist/migrations/*.{js,ts}"],
    cli: {
        migrationsDir: "src/migrations",
    },
};
exports.default = exports.ormConfig;
//# sourceMappingURL=orm.config.js.map