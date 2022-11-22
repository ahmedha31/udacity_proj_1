import { Request, Response, Router } from "express";
import fs from "fs";
import imgProcess from "../functions/imgProcess";
import { CheckImg, Checktmp } from "../middleware/CheckImg";
const router = Router();
router.use([CheckImg, Checktmp]);
router.get("/image", (req: Request, res: Response): void => {
  const { image, width, height } = req.query;
  imgProcess(image as string, width as string, height as string)
    .then((data) => {
      fs.createReadStream(data).pipe(res);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

export default router;
