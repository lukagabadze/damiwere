import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import userReducer from "./user/userReducer";

const store = createStore(
  combineReducers({ user: userReducer }),
  applyMiddleware(thunk as ThunkMiddleware)
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
