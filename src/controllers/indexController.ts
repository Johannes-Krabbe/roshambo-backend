import { Router, Request, Response } from "express";
import asyncHandler from "express-async-handler";

export const indexController = Router();

indexController.post(
  "/",
  asyncHandler(async (req: Request, res: Response) => {
      res.status(200).send()
  })
);
