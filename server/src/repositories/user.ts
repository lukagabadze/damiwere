import { getRepository } from "typeorm";
import { User } from "../models";
import { PublicUserInfo } from "../models/user";
import bcrypt from "bcrypt";

export type UserCreatePayload = {
  username: string;
  password: string;
};
export type UserLoginPayload = {
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
      throw { code: "hash-failed" };
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
    if (!accessToken) throw { code: "token-failed" };

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

export async function loginUser(
  payload: UserLoginPayload
): Promise<PublicUserInfo> {
  const userRepository = getRepository(User);

  const username = payload.username;
  const password = payload.password;

  const user = await userRepository.findOne({ username });

  if (!user) {
    throw { code: "user-not-found" };
  }

  const userHashedPassword = user.password;

  const passwordCorrect = await bcrypt.compare(password, userHashedPassword);

  if (!passwordCorrect) throw { code: "password-incorrect" };

  const accessToken = user.generateAccessToken(user.id);
  const publicUserInfo: PublicUserInfo = {
    username,
    accessToken,
  };

  return publicUserInfo;
}
