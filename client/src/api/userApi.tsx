import axios, { AxiosError, AxiosResponse } from "axios";
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
  //): Promise<UserLoginResponse | UserError> {
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
        //console.log("response test - ", error.response.data);
        //return { message: err.response.message };
        return error.response.data;
      }
    }

    return { message: "Something went wrong" };
  }
}
