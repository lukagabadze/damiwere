import express from "express";
import userRouter from "./user.routes";
import homeworkRouter from "./homework.routes";
import authRouter from "./auth.routes";
import requestRouter from "./request.routes";

const Router = express.Router();

Router.use("/users", userRouter);
Router.use("/homeworks", homeworkRouter);
Router.use("/auth", authRouter);
Router.use("/request", requestRouter);

export default Router;
