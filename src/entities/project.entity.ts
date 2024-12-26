import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity({
	name: "projects",
})
export class Project {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ name: "organization_name", length: 150, nullable: false })
	organizationName: string;

	@Column({ length: 50, nullable: false })
	source: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
