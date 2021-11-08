import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Homework } from "./homework";

export type PublicUserInfo = {
  id: string;
  username: string;
};

//export type PublicUserInfo = Omit<User, "password">;

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @OneToMany((_type) => Homework, (homework: Homework) => homework.user)
  homeworks!: Homework[];

  @CreateDateColumn({ name: "created_at" })
  createdAt!: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt!: Date;

  @DeleteDateColumn({ name: "deleted_at" })
  deletedAt!: Date;

  async hashPassword(plainPassword: string) {
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);

    return hashedPassword;
  }

  generateAccessToken(id: string) {
    const JWTAccessSecret = process.env.JWT_ACCESS_SECRET;
    if (!JWTAccessSecret) {
      throw { message: "JWT access secret has not been provided" };
    }

    try {
      const accessToken = jwt.sign({ id }, JWTAccessSecret, {
        expiresIn: "1h",
      });

      return accessToken;
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
