import express from "express";
import userRouter from "./user.routes";
import homeworkRouter from "./homework.routes";
import AuthRouter from "./auth.routes";

const Router = express.Router();

Router.use("/users", userRouter);
Router.use("/homeworks", homeworkRouter);
Router.use("/auth", AuthRouter);

export default Router;
