import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Homework } from "./homework";
import { UserPublic } from "./userPublic";

@Entity({ name: "requests" })
export class Request {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ name: "file_url", nullable: true })
  fileUrl!: string;

  @Column({ name: "user_id" })
  userId!: string;
  @ManyToOne(() => UserPublic, (user) => user.requests)
  user!: UserPublic;

  @OneToMany(() => Homework, (homework) => homework.request)
  homeworks!: Homework[];
}
