import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export type PublicUserInfo = {
  username: string;
  accessToken: string;
};

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  password!: string;

  @CreateDateColumn()
  createdAt!: Date;

  async hashPassword(plainPassword: string) {
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(plainPassword, salt);

    return hashedPassword;
  }

  generateAccessToken(id: number) {
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
