import express from "express";
import userRouter from "./user.routes";
import homeworkRouter from "./homework.routes";

const Router = express.Router();

Router.use("/users", userRouter);
Router.use("/homeworks", homeworkRouter);

export default Router;
