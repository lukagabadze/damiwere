import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Homework } from "./homework";
import { User } from "./user";

@Entity()
export class Request {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ name: "file_url", nullable: true })
  fileUrl!: string;

  @Column({ name: "user_id" })
  userId!: string;
  @ManyToOne(() => User, (user) => user.requests)
  user!: User;

  @OneToMany(() => Homework, (homework) => homework.request)
  homeworks!: Homework[];
}
