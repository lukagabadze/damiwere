import { User } from "../models";
import { getUser, getUsers } from "../repositories/user.repo";

export default class UserController {
  public async getUsers(): Promise<User[]> {
    return getUsers();
  }

  public async getUser(userId: string): Promise<User | undefined> {
    return getUser(Number(userId));
  }
}
