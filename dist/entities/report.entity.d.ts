import { User } from "src/entities/user.entity";
export declare class Report {
    id: string;
    reportName: string;
    user: User;
    source: string;
    pathReport: string;
    createdAt: Date;
    updatedAt: Date;
}
