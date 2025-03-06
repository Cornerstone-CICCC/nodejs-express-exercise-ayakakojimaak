import { Router, Request, Response, NextFunction } from "express";

const pageRouter = Router();

pageRouter.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World!");
});

// Fallback
pageRouter.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Page not found");
});

export default pageRouter;
