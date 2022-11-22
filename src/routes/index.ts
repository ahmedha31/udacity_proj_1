import { Request, Response, Router } from "express";
import imgProcess from "../functions/imgProcess";
import { CheckImg, Checktmp } from "../middleware/CheckImg";
import fs from "fs";
const router = Router();
router.use( [CheckImg, Checktmp]);
router.get("/image", async (req: Request, res: Response) => {
  const { image, width, height } = req.query;
  imgProcess(image as string, width as string, height as string)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

export default router;
