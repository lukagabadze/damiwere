import { Request } from "../models";
import { CreateHomeworkPayload } from "../repositories/homework.repo";
import {
  createRequest,
  getRequest,
  getUserRequests,
} from "../repositories/request.repo";

export class RequestController {
  public getRequest(id: string): Promise<Request | null> {
    return getRequest(id);
  }

  public getUserRequests(userId: string): Promise<Request[]> {
    return getUserRequests(userId);
  }

  public createRequest(payload: CreateHomeworkPayload): Promise<Request> {
    return createRequest(payload);
  }
}
