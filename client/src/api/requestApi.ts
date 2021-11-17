import axios from "axios";
import { apiUrl } from ".";

export type CreateRequestPayload = {
  title: string;
  fileUrl?: string;
};

export async function getRequests(id: string): Promise<Request[]> {
  const res = await axios.get(`${apiUrl}/request/${id}`);
  console.log(res);

  return res.data as Request[];
}

export async function createRequest(
  payload: CreateRequestPayload
): Promise<Request> {
  const res = await axios.post(`${apiUrl}/request`, payload);
  console.log(res);

  return res.data as Request;
}
