import { defaultState, UserAction, UserState } from ".";
import * as userTypes from "./userTypes";

const userReducer = (state = defaultState, action: UserAction): UserState => {
  switch (action.type) {
    case userTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case userTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error!,
        user: null,
      };

    case userTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        user: action.user!,
      };

    case userTypes.EMPTY_USER:
      return {
        ...state,
        user: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
