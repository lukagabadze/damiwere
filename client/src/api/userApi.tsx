import axios, { AxiosError, AxiosResponse } from "axios";
import { apiUrl } from ".";
import { defaultError, User, UserError } from "../store/user";

export type UserGetResponse = User;

export async function getUser(): Promise<
  AxiosResponse<UserGetResponse> | UserError
> {
  try {
    const res = await axios.get<User>(`${apiUrl}/auth`);

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
