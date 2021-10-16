import { User, UserAction, UserError } from ".";
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
