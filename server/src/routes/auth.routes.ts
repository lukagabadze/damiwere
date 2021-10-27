import express from "express";
import AuthController from "../controllers/auth.controller";

const AuthRouter = express.Router();

AuthRouter.get("/", async (_req, res) => {
  const controller = new AuthController();
  const userId = res.locals.userId;

  if (!userId) {
    return res.status(404).send("Not logged in");
  }

  try {
    const user = await controller.getUserPrivate(userId);

    console.log(user);

    res.status(200).send(user);
  } catch (err) {
    console.log(err);
  }
});

export default AuthRouter;
