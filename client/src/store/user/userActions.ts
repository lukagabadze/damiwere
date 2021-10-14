import { User, UserAction } from ".";
import * as userTypes from "./userTypes";

export const fetchUserRequest = (user: User): UserAction => {
  return {
    type: userTypes.FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (user: User): UserAction => {
  return {
    type: userTypes.FETCH_USER_SUCCESS,
  };
};

export const fetchUserFailure = (): UserAction => {
  return {
    type: userTypes.FETCH_USER_FAILURE,
  };
};
