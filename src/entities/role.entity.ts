import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({
	name: "roles",
})
export class Role {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ name: "role_name", length: 70, nullable: false })
	name: string;
}
