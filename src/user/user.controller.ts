import { Controller, Get, Post, Body, Delete, Patch } from "@nestjs/common";
import { User } from "src/entities/user.entity";
import { UserService } from "src/user/user.service";
import { CreateUserDto } from "src/auth/auth.dto";

@Controller("users")
export class UserController {
	constructor(private userService: UserService) {}

	@Get()
	async getAllUsers(): Promise<User[]> {
		return this.userService.getAllUser();
	}

	@Post()
	async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
		return this.userService.createUser(createUserDto);
	}

	@Delete()
	async deleteUser(): Promise<User[]> {
		return this.userService.getAllUser();
	}

	@Patch()
	async updateUser(): Promise<User[]> {
		return this.userService.getAllUser();
	}

	// @Post("/user")
	// async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
	// 	return this.userService.createUser(createUserDto);
	// }
}
