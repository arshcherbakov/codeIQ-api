import { Token } from "src/entities/token.entity";
import { User } from "src/entities/user.entity";

export interface IUserAndTokens {
	user: User;
	tokens: Token;
}
