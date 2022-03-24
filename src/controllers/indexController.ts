import { Router, Request, Response } from "express";
import asyncHandler from "express-async-handler";

import { Game } from "../entity/Game/Game"

import { getConnection } from "typeorm";

export const indexController = Router();


indexController.post(
  "/get-game",
  asyncHandler(async (req: Request, res: Response) => {

    const gameID = parseInt(req.body.gameID)
    const game = await Game.findOne({id: gameID})
    
    console.log("yo")
    
    if(!game){
      res.status(500).send()
    }
    res.status(200).send(game)
  })
);

indexController.post(
  "/create-game",

  asyncHandler(async (req: Request, res: Response) => {
    const test = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Game)
        .values({
          player1: false,
          player2: false,
        })
        .execute()

      res.status(200).send(await Game.findOne({id: test.identifiers[0].id }))
    }
  )
)
