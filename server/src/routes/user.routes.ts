import express from "express";
import { UserController } from "../controllers";

const userRouter = express.Router();

userRouter.get("/", async (_req, res) => {
  const controller = new UserController();
  const response = await controller.getUsers();

  return res.send(response);
});

userRouter.get("/:userId", async (_req, res) => {
  const controller = new UserController();
  const userId = _req.params.userId;

  const response = await controller.getUser(userId);
  return res.send(response);
});

export default userRouter;
