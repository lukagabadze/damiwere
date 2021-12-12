import { UserPublic } from "../models";
import { getUser, getUsers } from "../repositories/user.repo";

export default class UserController {
  public async getUsers(): Promise<UserPublic[]> {
    return getUsers();
  }

  public async getUser(userId: string): Promise<UserPublic | undefined> {
    return getUser(userId);
  }
}
