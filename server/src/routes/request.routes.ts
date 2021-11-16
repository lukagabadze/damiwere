import express from "express";
import { RequestController } from "../controllers/request.controller";

const requestRouter = express.Router();

requestRouter.get("/:id", async (_req, res) => {
  const controller = new RequestController();
  const requestId = _req.params.id;

  try {
    const response = controller.getRequest(requestId);
    return res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }
});

requestRouter.get("/:userId", async (_req, res) => {
  const controller = new RequestController();
  const userId = _req.params.userId;

  try {
    const response = await controller.getUserRequests(userId);
    return res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }
});

requestRouter.post("/", async (_req, res) => {
  const payload = _req.body;
  const controller = new RequestController();

  try {
    const response = await controller.createRequest(payload);

    return res.status(201).send(response);
  } catch (err) {
    console.log(err);
  }
});
