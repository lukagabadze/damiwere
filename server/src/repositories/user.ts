import { getRepository } from "typeorm";
import { User } from "../models";

export type UserCreatePayload = {
  username: string;
  password: string;
};

export function getUsers(): Promise<User[]> {
  const userRepository = getRepository(User);
  return userRepository.find();
}

export function getUser(userId: number): Promise<User | undefined> {
  const userRepository = getRepository(User);
  return userRepository.findOne({ id: userId });
}

export async function createUser(payload: UserCreatePayload): Promise<User> {
  const userRepository = getRepository(User);
  const user = new User();

  const username = payload.username;
  const hashedPassword = await user.hashPassword(payload.password);

  const userExists = await userRepository.find({ username });
  if (userExists.length) {
    throw { code: "username-taken" };
  }

  const data = {
    username,
    password: hashedPassword,
  };

  return userRepository.save({ ...user, ...data });
}
