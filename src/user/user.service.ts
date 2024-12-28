import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { hash } from "bcrypt";
import { User } from "src/entities/user.entity";
import { CreateUserDto } from "src/auth/auth.dto";
import { UserRepository } from "./user.repository";
import { RoleService } from "src/role/role.service";

@Injectable()
export class UserService {
	constructor(
		private userRepository: UserRepository,
		private roleService: RoleService,
	) {}

	async checkUserByEmail(email: string): Promise<User> {
		return await this.userRepository.checkUserByEmail(email);
	}

	async getAllUser(): Promise<User[]> {
		return this.userRepository.getAllUsers();
	}

	async createUser(createUserDto: CreateUserDto): Promise<User> {
		const foundRole = await this.roleService.checkRoleByName({ name: createUserDto.role });

		if (!foundRole) {
			throw new InternalServerErrorException({
				message: `Не удалось создать пользователя c правами ${createUserDto.role}. Роль не найдена.`,
			});
		}

		delete createUserDto.role;

		createUserDto.password = await hash(createUserDto.password, 10);

		return this.userRepository.createUser(createUserDto, foundRole);
	}
}
