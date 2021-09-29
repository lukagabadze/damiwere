import { Homework } from "../models";
import {
  createHomework,
  CreateHomeworkPayload,
  getHomework,
  getHomeworks,
} from "../repositories/homework";

export default class HomeworkController {
  public getHomeworks(): Promise<Homework[]> {
    return getHomeworks();
  }

  public getHomework(id: string): Promise<Homework | undefined> {
    return getHomework(Number(id));
  }

  public createHomework(payload: CreateHomeworkPayload): Promise<Homework> {
    return createHomework(payload);
  }
}
