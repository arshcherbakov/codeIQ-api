import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { UserService } from "./user.service";
import { RoleService } from "src/role/role.service";
import { UserRepository } from "./user.repository";
import { RoleRepository } from "src/role/role.repository";
import { UserController } from "./user.controller";
import { Role } from "src/entities/role.entity";

@Module({
	imports: [TypeOrmModule.forFeature([User, Role])],
	providers: [UserService, RoleService, UserRepository, RoleRepository],
	controllers: [UserController],
	exports: [UserRepository, RoleRepository],
})
export class UserModule {}
