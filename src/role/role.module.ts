import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Role } from "src/entities/role.entity";
import { RoleService } from "src/role/role.service";
import { RoleRepostitory } from "src/role/role.repository";
import { RoleController } from "src/role/role.controller";

@Module({
	imports: [TypeOrmModule.forFeature([Role])],
	providers: [RoleService, RoleRepostitory],
	controllers: [RoleController],
	exports: [RoleRepostitory],
})
export class RoleModule {}
