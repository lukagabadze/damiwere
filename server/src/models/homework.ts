import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Request } from "./request";
import { UserPublic } from "./userPublic";

@Entity({ name: "homeworks" })
export class Homework {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column({ type: "text", nullable: true })
  body!: string;

  @Column({ nullable: true })
  fileUrl!: string;

  @Column({ name: "user_id" })
  userId!: number;
  @ManyToOne((_type) => UserPublic, (user: UserPublic) => user.homeworks, {
    onDelete: "SET NULL",
  })
  @JoinColumn()
  user?: UserPublic;

  @Column({ name: "request_id" })
  requestId!: string;
  @ManyToOne(() => Request, (request: Request) => request.homeworks)
  request!: Request;

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt!: Date;
}
