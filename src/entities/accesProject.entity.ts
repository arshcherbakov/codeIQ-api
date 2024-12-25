import { Entity, JoinColumn, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { User } from "src/entities/user.entity";
import { Project } from "src/entities/project.entity";

@Entity({
	name: "access_projects",
})
export class AccesProject {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@JoinColumn({ name: "project_id" })
	@ManyToOne(() => Project)
	project: Project;

	@JoinColumn({ name: "user_id" })
	@ManyToOne(() => User)
	user: User;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
