import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Role } from "src/entities/role.entity";
import { RoleService } from "src/role/role.service";
import { RoleRepository } from "src/role/role.repository";
import { RoleController } from "src/role/role.controller";

@Module({
	imports: [TypeOrmModule.forFeature([Role])],
	providers: [RoleService, RoleRepository],
	controllers: [RoleController],
	exports: [RoleRepository],
})
export class RoleModule {}
