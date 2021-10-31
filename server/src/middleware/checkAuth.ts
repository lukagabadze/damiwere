import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JWTPayload {
  id: string;
  iat: number;
  exp: number;
}

export default function checkAuth(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["auth-token"] as string;
  const accessToken = process.env.JWT_ACCESS_SECRET as string;

  if (token) {
    try {
      const payload = jwt.verify(token, accessToken) as JWTPayload;

      res.locals.userId = payload.id;
    } catch (err) {
      console.log("jwt is expired or invalid");

      res.locals.userId = null;
    }
  }

  next();
}
