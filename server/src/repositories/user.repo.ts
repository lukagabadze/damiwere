import { getRepository } from "typeorm";
import { UserPublic } from "../models";

export function getUsers(): Promise<UserPublic[]> {
  const userRepository = getRepository(UserPublic);
  return userRepository.find();
}

export function getUser(userId: string): Promise<UserPublic | undefined> {
  const userRepository = getRepository(UserPublic);
  return userRepository.findOne({ id: userId });
}
