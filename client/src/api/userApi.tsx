import axios from "axios";
import { apiUrl } from ".";
import { User, UserError } from "../store/user";

export type IUserLogin = {
  username: string;
  password: string;
};

export type UserLoginResponse = {
  user: User;
  accessToken: string;
};

export async function login(
  body: IUserLogin
): Promise<UserLoginResponse | UserError> {
  try {
    const res = await axios.post<UserLoginResponse>(
      `${apiUrl}/users/login`,
      body
    );

    return res.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      return { message: err.message };
    }

    return { message: "Something went wrong" };
  }
}
