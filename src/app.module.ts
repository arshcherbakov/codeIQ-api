import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { typeOrmModuleOptions } from "src/config/orm.config";

@Module({
	imports: [TypeOrmModule.forRoot(typeOrmModuleOptions)],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
