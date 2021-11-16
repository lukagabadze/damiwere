import { getRepository } from "typeorm";
import { Homework } from "../models";

export type CreateHomeworkPayload = Homework;

export function getHomeworks(): Promise<Homework[]> {
  const homeworkRepository = getRepository(Homework);
  const homeworks = homeworkRepository
    .createQueryBuilder("h")
    .leftJoinAndSelect("h.user", "user")
    .getMany();

  return homeworks;
}

export async function getHomework(id: string): Promise<Homework | undefined> {
  const homeworkRepository = getRepository(Homework);
  return homeworkRepository.findOne({ id });
}

export function createHomework(
  payload: CreateHomeworkPayload
): Promise<Homework> {
  const homeworkRepository = getRepository(Homework);
  const homework = new Homework();

  return homeworkRepository.save({ ...homework, ...payload });
}
