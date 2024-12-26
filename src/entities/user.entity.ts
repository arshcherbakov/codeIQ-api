import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	JoinColumn,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
} from "typeorm";
import { Role } from "src/entities/role.entity";

@Entity({
	name: "users",
})
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ name: "first_name", length: 128, nullable: false })
	firstName: string;

	@Column({ name: "last_name", length: 128, nullable: false })
	lastName: string;

	@Column({ length: 256, nullable: false, unique: true })
	email: string;

	@Column({ nullable: false, select: false })
	//@Exclude()
	password: string;

	@JoinColumn({ name: "role_id" })
	@ManyToOne(() => Role)
	role: Role;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
