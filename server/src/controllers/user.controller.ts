import { User } from "../models";
import {
  createUser,
  getUser,
  getUsers,
  loginUser,
  UserCreatePayload,
  UserCreateResponse,
  UserLoginPayload,
  UserLoginResponse,
} from "../repositories/user";

export default class UserController {
  public async getUsers(): Promise<User[]> {
    return getUsers();
  }

  public async getUser(userId: string): Promise<User | undefined> {
    return getUser(Number(userId));
  }

  public async createUser(
    payload: UserCreatePayload
  ): Promise<UserCreateResponse> {
    return createUser(payload);
  }

  public async loginUser(
    payload: UserLoginPayload
  ): Promise<UserLoginResponse> {
    return loginUser(payload);
  }
}
