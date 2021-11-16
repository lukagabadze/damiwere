import { getRepository } from "typeorm";
import { Request } from "../models";

export type CreateHomeworkPayload = {
  title: string;
  fileUrl?: string;
};

export async function getRequest(id: string): Promise<Request | null> {
  const repository = getRepository(Request);

  try {
    const request = await repository.findOne({ id });
    if (request) {
      return request;
    }
  } catch (err) {
    console.log(err);
  }

  return null;
}

export async function getUserRequests(userId: string): Promise<Request[]> {
  const repository = getRepository(Request);
  const userRequests = repository.find({ userId });

  return userRequests;
}

export async function createRequest(
  payload: CreateHomeworkPayload
): Promise<Request> {
  const repository = getRepository(Request);
  const request = new Request();

  return repository.save({ ...request, ...payload });
}
