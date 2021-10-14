import { UserAction, UserState } from ".";
import * as userTypes from "./userTypes";

const initialState = {
  loading: false,
  user: { count: 0 },
  error: "",
};

const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case userTypes.FETCH_USER_REQUEST:
      console.log("fetch user request / congratz");
      return {
        ...state,
      };

    case userTypes.INCREMENT:
      return {
        ...state,
        user: { count: state.user.count + 1 },
      };

    default:
      console.log("default switch");
      return {
        ...state,
      };
  }
};

export default userReducer;
