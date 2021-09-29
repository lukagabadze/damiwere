import { getRepository } from "typeorm";
import { Homework } from "../models";

export type CreateHomeworkPayload = {
  userId: number;
  title: string;
  body?: string;
  fileUrl?: string;
};

export function getHomeworks(): Promise<Homework[]> {
  const homeworkRepository = getRepository(Homework);
  return homeworkRepository.find();
}

export function createHomework(
  payload: CreateHomeworkPayload
): Promise<Homework> {
  const homeworkRepository = getRepository(Homework);

  const homework = new Homework();

  return homeworkRepository.save({ ...homework, ...payload });
}
