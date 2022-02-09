import { Request, Response } from 'express';

export default interface AuthContext {
  req: Request;
  res: Response;
  payload?: { userId: string };
}
