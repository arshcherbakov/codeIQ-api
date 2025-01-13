import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/entities/user.entity";
import { Role } from "src/entities/role.entity";
import { CreateUserDto } from "src/auth/auth.dto";

@Injectable()
export class UserRepository {
	constructor(
		@InjectRepository(User)
		private userRepository: Repository<User>,
	) {}

	async checkUserByEmail(email: string): Promise<User> {
		try {
			return await this.userRepository.findOne({ where: { email } });
		} catch (error) {
			throw new InternalServerErrorException({ message: "Не удалось получить всех пользователей", error: error });
		}
	}

	async getAllUsers(): Promise<User[]> {
		try {
			return await this.userRepository.find();
		} catch (error) {
			throw new InternalServerErrorException({ message: "Не удалось получить всех пользователей", error: error });
		}
	}

	async createUser(createUserDto: Omit<CreateUserDto, "role">, role: Role): Promise<User> {
		try {
			return await this.userRepository.save({ ...createUserDto, role });
		} catch (error) {
			throw new InternalServerErrorException({ message: "Не удалось создать пользователя", error: error });
		}
	}

	// async deleteUser(userData: User): Promise<User> {
	// 	try {
	// 		return await this.userRepository.remove(userDate);
	// 	} catch (error) {
	// 		throw new InternalServerErrorException({ message: "Не удалось создать пользователя", error: error });
	// 	}
	// }

	// async updateUser(createUserDto: CreateUserDto): Promise<User> {
	// 	try {
	// 		return await this.userRepository.remove(createUserDto);
	// 	} catch (error) {
	// 		throw new InternalServerErrorException({ message: "Не удалось создать пользователя", error: error });
	// 	}
	// }
}
