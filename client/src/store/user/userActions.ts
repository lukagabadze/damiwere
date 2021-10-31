//import { AxiosError } from "axios";
import { User, UserAction, UserError } from ".";
import { AppDispatch } from "..";
import { userApi } from "../../api";
import * as userTypes from "./userTypes";

export const fetchUserRequest = (): UserAction => {
  return {
    type: userTypes.FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (user: User): UserAction => {
  return {
    type: userTypes.FETCH_USER_SUCCESS,
    user,
  };
};

export const fetchUserFailure = (error: UserError): UserAction => {
  return {
    type: userTypes.FETCH_USER_FAILURE,
    error: error,
  };
};

export const emptyUser = (): UserAction => {
  return {
    type: userTypes.EMPTY_USER,
  };
};

export const fetchUser = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(fetchUserRequest());
    const res = await userApi.getUser();

    if ("data" in res) {
      return dispatch(fetchUserSuccess(res.data));
    } else {
      return dispatch(fetchUserFailure(res));
    }
  };
};

//export function fetchUser: ActionCreator<UserAction>() {
