import { UserPublic } from "../models";
import {
  createUser,
  getUserPrivate,
  loginUser,
  UserCreatePayload,
  UserCreateResponse,
  UserLoginPayload,
  UserLoginResponse,
} from "../repositories/auth.repo";

export default class AuthController {
  public async getUserPrivate(userId: string): Promise<UserPublic | null> {
    return getUserPrivate(userId);
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
