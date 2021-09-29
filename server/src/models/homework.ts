import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user";

@Entity()
export class Homework {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ type: "text", nullable: true })
  body!: string;

  @Column({ nullable: true })
  fileUrl!: string;

  @Column()
  userId!: number;
  @ManyToOne((_type) => User, (user) => user.homeworks)
  @JoinColumn()
  user!: User;

  @CreateDateColumn()
  createdAt!: Date;

  @CreateDateColumn()
  updatedAt!: Date;
}
