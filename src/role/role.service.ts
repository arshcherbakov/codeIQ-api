import { Injectable } from "@nestjs/common";
import { RoleRepostitory } from "src/role/role.repository";
import { Role } from "src/entities/role.entity";
import { CreateRoleDto } from "src/role/role.dto";

@Injectable()
export class RoleService {
	constructor(private roleRepository: RoleRepostitory) {}

	async checkRoleByName(roleName: CreateRoleDto): Promise<Role> {
		return await this.roleRepository.checkRoleByName(roleName);
	}

	async getAllRoles(): Promise<Role[]> {
		return await this.roleRepository.getAllRoles();
	}

	async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
		return await this.roleRepository.createRole(createRoleDto);
	}

	async deleteOneRole(role: Role): Promise<Role> {
		return await this.roleRepository.deleteOneRole(role);
	}
}
