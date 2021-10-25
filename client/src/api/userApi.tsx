import axios, { AxiosError, AxiosResponse } from "axios";
import { apiUrl } from ".";
import { defaultError, User, UserError } from "../store/user";

export type IUserLogin = {
  username: string;
  password: string;
};

export type UserLoginResponse = {
  user: User;
  accessToken: string;
};

export type UserSignupResponse = {
  user: User;
  accessToken: string;
};

export async function login(
  body: IUserLogin
): Promise<AxiosResponse<UserLoginResponse> | UserError> {
  try {
    const res = await axios.post<UserLoginResponse>(
      `${apiUrl}/users/login`,
      body
    );

    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const error = err as AxiosError<UserError>;
      if (error && error.response) {
        return error.response.data;
      }
    }

    return defaultError;
  }
}

export async function signup(
  body: IUserLogin
): Promise<AxiosResponse<UserSignupResponse> | UserError> {
  try {
    const res = await axios.post<UserLoginResponse>(`${apiUrl}/users`, body);
    return res;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const error = err as AxiosError<UserError>;
      if (error && error.response) {
        return error.response.data;
      }
    }

    return defaultError;
  }
}
