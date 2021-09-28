import { User } from "../models";
import { PublicUserInfo } from "../models/user";
import {
  createUser,
  getUser,
  getUsers,
  UserCreatePayload,
} from "../repositories/user";

export default class UserController {
  public async getUsers(): Promise<User[]> {
    return getUsers();
  }

  public async getUser(userId: string): Promise<User | undefined> {
    return getUser(Number(userId));
  }

  public async createUser(payload: UserCreatePayload): Promise<PublicUserInfo> {
    return createUser(payload);
  }
}
