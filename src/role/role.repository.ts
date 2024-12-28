import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Role } from "src/entities/role.entity";
import { CreateRoleDto } from "./role.dto";

@Injectable()
export class RoleRepostitory {
	constructor(@InjectRepository(Role) private roleRepository: Repository<Role>) {}

	async checkRoleByName(roleName: CreateRoleDto): Promise<Role> {
		try {
			return await this.roleRepository.findOne({ where: roleName });
		} catch (error) {
			throw new InternalServerErrorException({
				message: "Не удалось получить роль по этому имени",
				error: error,
			});
		}
	}

	async getAllRoles(): Promise<Role[]> {
		try {
			return await this.roleRepository.find();
		} catch (error) {
			throw new InternalServerErrorException({ message: "Не удалось получить все роли", error: error });
		}
	}

	async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
		try {
			return await this.roleRepository.save(createRoleDto);
		} catch (error) {
			throw new InternalServerErrorException({ message: "Не удалось создать роль", error: error });
		}
	}

	async deleteOneRole(role: Role): Promise<Role> {
		try {
			return await this.roleRepository.remove(role);
		} catch (error) {
			throw new InternalServerErrorException({ message: "Не удалось удалить роль", error: error });
		}
	}
}
