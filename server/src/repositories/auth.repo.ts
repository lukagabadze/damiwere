import { getRepository } from "typeorm";
import { User } from "../models";
import { PublicUserInfo } from "../models/user";
import bcrypt from "bcrypt";

export type UserCreatePayload = {
  username: string;
  password: string;
};
export type UserCreateResponse = {
  user: PublicUserInfo;
  accessToken: string;
};

export type UserLoginPayload = {
  username: string;
  password: string;
};
export type UserLoginResponse = {
  user: PublicUserInfo;
  accessToken: string;
};

export async function getUserPrivate(userId: string): Promise<User | null> {
  const repository = getRepository(User);

  try {
    const user = await repository.findOne(userId);

    if (user) {
      return user;
    }
  } catch (err) {
    console.log(err);
  }

  return null;
}

export async function createUser(
  payload: UserCreatePayload
): Promise<UserCreateResponse> {
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

    const userCreateResponse: UserCreateResponse = {
      user: {
        id: savedUser.id,
        username,
      },
      accessToken,
    };

    return userCreateResponse;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function loginUser(
  payload: UserLoginPayload
): Promise<UserLoginResponse> {
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
  const userLoginResponse: UserLoginResponse = {
    user: {
      id: user.id,
      username,
    },
    accessToken,
  };

  return userLoginResponse;
}
