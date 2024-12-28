import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "src/user/user.module";
import { RoleModule } from "src/role/role.module";
import { typeOrmModuleOptions } from "src/config/orm.config";

@Module({
	imports: [TypeOrmModule.forRoot(typeOrmModuleOptions), UserModule, RoleModule],
})
export class AppModule {}
