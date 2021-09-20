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

export function createUser(payload: UserCreatePayload): Promise<User> {
  const userRepository = getRepository(User);
  const user = new User();

  return userRepository.save({ ...user, ...payload });
}
