import { Role } from "src/entities/role.entity";
export declare class User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
}
