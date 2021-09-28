import { getRepository } from "typeorm";
import { User } from "../models";
import { PublicUserInfo } from "../models/user";

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

export async function createUser(
  payload: UserCreatePayload
): Promise<PublicUserInfo> {
  const userRepository = getRepository(User);
  const user = new User();

  try {
    const username = payload.username;
    const hashedPassword = await user.hashPassword(payload.password);

    if (!hashedPassword) {
      throw { message: "Password hashin has failed" };
    }

    const userExists = await userRepository.find({ username });
    if (userExists.length) {
      throw { code: "username-taken" };
    }

    const data = {
      username,
      password: hashedPassword,
    };
    const savedUser = await userRepository.save({ ...user, ...data });

    const accessToken = user.generateAccessToken(savedUser.id);
    if (!accessToken) throw { message: "Could not generate access token" };

    const publicUser: PublicUserInfo = {
      username,
      accessToken,
    };

    return publicUser;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
