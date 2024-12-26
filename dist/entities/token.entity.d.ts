import { User } from "src/entities/user.entity";
export declare class Token {
    id: string;
    refreshToken: string;
    user: User;
}
