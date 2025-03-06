import { Request, Response, NextFunction } from "express";

export function signup(res: Request, req: Response, next: NextFunction) {
  console.log("Sign Up");
  next();
}
