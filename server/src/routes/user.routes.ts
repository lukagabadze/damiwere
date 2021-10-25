import express from "express";
import { UserController } from "../controllers";
import { UserCreatePayload, UserLoginPayload } from "../repositories/user";

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

userRouter.post("/", async (_req, res) => {
  const controller = new UserController();
  const payload: UserCreatePayload = _req.body;

  try {
    const response = await controller.createUser(payload);
    return res.status(201).json(response);
  } catch (err: any) {
    switch (err.code) {
      case "username-taken":
        res.status(403).json({ message: "სახელი დაკავებულია" });
        break;

      case "hash-failed":
        res.status(500).json({
          error: {
            message: "Failed to hash the password, please try again later",
          },
        });

      case "token-failed":
        res.status(500).json({
          error: {
            message: "Failed to create necessary tokens, please try to login",
          },
        });

      default:
        res.status(500).json({ message: "სერვერი დაზიანებულია" });
        break;
    }
  }
});

userRouter.post("/login", async (_req, res) => {
  const controller = new UserController();
  const payload: UserLoginPayload = _req.body;

  try {
    const response = await controller.loginUser(payload);
    res.status(200).json(response);
  } catch (err: any) {
    switch (err.code) {
      case "user-not-found":
        res.status(404).json({ message: "სახელი ვერ მოიძებნა" });
        break;

      case "password-incorrect":
        res.status(401).json({ message: "მითითებული პაროლი არასწორია" });
        break;

      default:
        res.status(500).json({ message: "სერვერი დაზიანებულია" });
        break;
    }
  }
});

export default userRouter;
