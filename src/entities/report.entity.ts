import {
	Column,
	Entity,
	PrimaryGeneratedColumn,
	JoinColumn,
	CreateDateColumn,
	UpdateDateColumn,
	ManyToOne,
} from "typeorm";
import { User } from "src/entities/user.entity";

@Entity({
	name: "reports",
})
export class Report {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column({ length: 200, name: "report_name", nullable: false })
	reportName: string;

	@JoinColumn({ name: "user_id" })
	@ManyToOne(() => User)
	user: User;

	@Column({ length: 100, nullable: false })
	source: string;

	@Column({ name: "path_report", nullable: false })
	pathReport: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;
}
