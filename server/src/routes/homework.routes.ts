import express from "express";
import HomeworkController from "../controllers/homework.controller";

const homeworkRouter = express.Router();

homeworkRouter.get("/", async (_req, res) => {
  const controller = new HomeworkController();

  try {
    const response = await controller.getHomeworks();
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }
});

homeworkRouter.get("/:id", async (_req, res) => {
  const controller = new HomeworkController();
  const id = _req.params.id;

  try {
    const response = await controller.getHomework(id);
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
  }
});

homeworkRouter.post("/", async (_req, res) => {
  const controller = new HomeworkController();
  const payload = _req.body;

  try {
    const response = await controller.createHomework(payload);
    res.status(201).send(response);
  } catch (err: any) {
    console.log(err.message);
  }
});

export default homeworkRouter;
