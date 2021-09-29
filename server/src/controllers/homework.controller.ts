import { Homework } from "../models";
import {
  createHomework,
  CreateHomeworkPayload,
  getHomeworks,
} from "../repositories/homework";

export default class HomeworkController {
  public getHomeworks() {
    return getHomeworks();
  }

  public createHomework(payload: CreateHomeworkPayload): Promise<Homework> {
    return createHomework(payload);
  }
}
