import { getRepository } from "typeorm";
import { User } from "../models";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

export async function getUserPrivate(userId: number): Promise<User | null> {
  const repository = getRepository(User);

  try {
    const user = await repository.findOne(userId);

    if (user) {
      return user;
    }
  } catch (err) {
    console.log(err);
  }

  return null;
}
