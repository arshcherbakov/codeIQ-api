import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "src/auth/auth.dto";

@Injectable()
export class AuthService {
	constructor() {}
	// async registration(userDto: CreateUserDto): Promise<> {}
}
