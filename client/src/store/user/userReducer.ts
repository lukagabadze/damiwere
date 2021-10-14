import { UserAction, UserState } from ".";
import * as userTypes from "./userTypes";

const initialState: UserState = {
  loading: false,
  user: null,
  error: "",
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case userTypes.FETCH_USER_REQUEST:
      console.log("fetch user request / congratz");
      return {
        ...state,
      };

    default:
      console.log("default switch");
      return {
        ...state,
      };
  }
};

export default userReducer;
