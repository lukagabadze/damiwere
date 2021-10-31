import axios from "axios";
import * as userApi from "./userApi";
import * as authApi from "./authApi";

export const apiUrl = "http://localhost:8000";

axios.interceptors.request.use(
  (req) => {
    const accessToken = localStorage.getItem("accessToken");
    console.log("accessToken ", accessToken);

    if (accessToken && req.headers) {
      req.headers["auth-token"] = accessToken;
    }

    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export { userApi, authApi };
