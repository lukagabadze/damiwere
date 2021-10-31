import express from "express";
import AuthController from "../controllers/auth.controller";
import { UserCreatePayload, UserLoginPayload } from "../repositories/auth.repo";

const authRouter = express.Router();

authRouter.get("/", async (_req, res) => {
  const controller = new AuthController();
  const userId = res.locals.userId;

  if (!userId) {
    return res.status(404).send({ message: "Not logged in" });
  }

  try {
    const user = await controller.getUserPrivate(userId);

    res.status(200).send(user);
  } catch (err) {
    console.log(err);
  }
});

authRouter.post("/signup", async (_req, res) => {
  const controller = new AuthController();
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

authRouter.post("/login", async (_req, res) => {
  const controller = new AuthController();
  const payload: UserLoginPayload = _req.body;

  try {
    const response = await controller.loginUser(payload);
    console.log("user has successfully logged in");
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

export default authRouter;
