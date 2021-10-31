import { getRepository } from "typeorm";
import { User } from "../models";

export function getUsers(): Promise<User[]> {
  const userRepository = getRepository(User);
  return userRepository.find();
}

export function getUser(userId: number): Promise<User | undefined> {
  const userRepository = getRepository(User);
  return userRepository.findOne({ id: userId });
}
