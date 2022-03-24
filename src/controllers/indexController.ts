import { Router, Request, Response } from "express";
import asyncHandler from "express-async-handler";

export const indexController = Router();

indexController.post(
  "/get-items",
  asyncHandler(async (req: Request, res: Response) => {

    const lobbycode = req.body.lobbycode  

    res.status(200).send()
  })
);
