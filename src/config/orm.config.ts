import "dotenv/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
	type: "postgres",
	host: process.env.DB_HOST,
	port: parseInt(process.env.DB_PORT),
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	entities: [__dirname + "/../**/entities/*.entity.{js,ts}"],
	synchronize: true,
	autoLoadEntities: true,
	migrationsRun: true,
	logging: false,
	namingStrategy: new SnakeNamingStrategy(),
};

export const ormConfig = {
	...typeOrmModuleOptions,
	migrationsTableName: "migrations",
	migrations: ["dist/migrations/*.{js,ts}"],
	cli: {
		migrationsDir: "src/migrations",
	},
} as DataSourceOptions;

export default ormConfig;
