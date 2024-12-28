import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";
import { CreateUserDto } from "src/auth/auth.dto";
import { IUserAndTokens } from "./interfaces";

@Controller()
export class AuthController {
	constructor(private authService: AuthService) {}

	// @Post("/reg")
	// async registration(@Body() userDto: CreateUserDto): Promise<IUserAndTokens> {
	// 	const dataUser = this.authService.registration(userDto);
	// }
}
