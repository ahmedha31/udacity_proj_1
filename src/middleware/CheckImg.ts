import { NextFunction, Request, Response } from "express";
import fs from "fs";
export async function CheckImg(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { image } = req.query;
  var imgpath = `./images/${image}.jpg`;
  if (fs.existsSync(imgpath)) {
    next();
  } else {
    res.status(404).send("Image not found");
  }
}

export async function Checktmp(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { image, width, height } = req.query;
  var imgpath = `./tmp/${image}-${width}x${height}.jpg`;
  if (fs.existsSync(imgpath)) {
    fs.createReadStream(imgpath).pipe(res);
  } else {
    next();
  }
}
