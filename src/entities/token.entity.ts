import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from "typeorm";
import { User } from "src/entities/user.entity";

@Entity({
	name: "tokens",
})
export class Token {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ type: "text" })
	refreshToken: string;

	@JoinColumn({ name: "user_id" })
	@OneToOne(() => User, { onDelete: "CASCADE" })
	user: User;
}
