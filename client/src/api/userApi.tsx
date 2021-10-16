import axios from "axios";
import { apiUrl } from ".";
import { User } from "../store/user";

export type IUserLogin = {
  username: string;
  password: string;
};

export type UserLoginResponse = {
  data: {
    user: User;
    accessToken: string;
  };
};

export function login(body: IUserLogin): Promise<UserLoginResponse> {
  return axios.post(`${apiUrl}/users/login`, body);
}
