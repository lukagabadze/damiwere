import { defaultState, UserAction, UserState } from ".";
import * as userTypes from "./userTypes";

const userReducer = (state = defaultState, action: UserAction): UserState => {
  switch (action.type) {
    case userTypes.FETCH_USER_REQUEST:
      console.log("request dispatch");
      return {
        ...state,
        loading: true,
        error: null,
      };

    case userTypes.FETCH_USER_FAILURE:
      console.log("error dispatch");
      return {
        ...state,
        loading: false,
        error: action.error!,
      };

    case userTypes.FETCH_USER_SUCCESS:
      console.log("success dispatch");
      return {
        ...state,
        loading: false,
        error: null,
        user: action.user!,
      };

    default:
      console.log("default switch");
      return {
        ...state,
      };
  }
};

export default userReducer;
