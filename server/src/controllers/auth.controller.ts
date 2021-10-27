import { User } from "../models";
import { getUserPrivate } from "../repositories/auth.repo";

export default class AuthController {
  public async getUserPrivate(userId: string): Promise<User | null> {
    return getUserPrivate(parseInt(userId));
  }
}
