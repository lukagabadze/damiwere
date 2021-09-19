import { getRepository } from "typeorm";
import { User } from "../models";

export type UserCreatePayload = {
  username: string;
  password: string;
};

export default class UserController {
  public async getUsers(): Promise<User[]> {
    const userRepository = getRepository(User);
    return userRepository.find();
  }

  public async createUser(payload: UserCreatePayload): Promise<User> {
    const userRepository = getRepository(User);
    const user = new User();

    console.log("creating user...");
    console.log(payload.username, "\n", payload.password);

    return userRepository.save({ ...user, ...payload });
  }
}
