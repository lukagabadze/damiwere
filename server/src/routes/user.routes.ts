import express from "express";
import { UserController } from "../controllers";
import { UserCreatePayload } from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.get("/", async (_req, res) => {
  const controller = new UserController();
  const response = await controller.getUsers();

  return res.send(response);
});

userRouter.post("/", async (_req, res) => {
  const controller = new UserController();
  const payload: UserCreatePayload = _req.body;

  const response = await controller.createUser(payload);
  return res.send(response);
});

export default userRouter;
