import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Homework } from "./homework";
import { Request } from "./request";

@Entity({ name: "user_public" })
export class UserPublic {
  @PrimaryColumn()
  id!: string;

  @Column()
  username!: string;

  @OneToMany(() => Request, (request) => request.user)
  requests?: Request[];

  @OneToMany((_type) => Homework, (homework: Homework) => homework.user)
  homeworks?: Homework[];
}
