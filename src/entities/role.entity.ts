import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { User } from "src/entities/user.entity";

@Entity({
	name: "roles",
})
export class Role {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ name: "role_name", length: 70, nullable: false })
	name: string;

	@JoinColumn({ name: "user_id" })
	@ManyToOne(() => User)
	user: User;
}
