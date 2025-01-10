import { Controller, Get, Post, Delete, Body } from "@nestjs/common";
import { RoleService } from "src/role/role.service";
import { Role } from "src/entities/role.entity";
import { CreateRoleDto } from "src/role/role.dto";

@Controller("roles")
export class RoleController {
	constructor(private roleService: RoleService) {}

	@Get("/check")
	async checkRoleByName(@Body() roleName: CreateRoleDto): Promise<Role> {
		return this.roleService.checkRoleByName(roleName);
	}

	@Get()
	async getAllRoles(): Promise<Role[]> {
		return this.roleService.getAllRoles();
	}

	@Post()
	async createRole(@Body() createRoleDto: CreateRoleDto): Promise<Role> {
		return this.roleService.createRole(createRoleDto);
	}

	@Delete()
	async deleteOneRole(@Body() createRoleDto: Role): Promise<Role> {
		return this.roleService.deleteOneRole(createRoleDto);
	}
}
