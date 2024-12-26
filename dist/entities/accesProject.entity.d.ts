import { User } from "src/entities/user.entity";
import { Project } from "src/entities/project.entity";
export declare class AccesProject {
    id: string;
    project: Project;
    user: User;
    createdAt: Date;
    updatedAt: Date;
}
