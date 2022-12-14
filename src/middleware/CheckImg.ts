import { NextFunction, Request, Response } from "express";
import fs from "fs";
import { imagespath, tmppath } from "../functions/getpath";
export async function CheckImg(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const { image } = req.query;
  const imgpath = imagespath() + `/${image}.jpg`;
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
): Promise<void> {
  const { image, width, height } = req.query;
  fs.mkdir(tmppath(), { recursive: true }, (err) => {
    if (err) throw err;
  });

  const imgpath = tmppath() + `/${image}-${width}x${height}.jpg`;
  if (fs.existsSync(imgpath)) {
    fs.createReadStream(imgpath).pipe(res);
  } else {
    next();
  }
}
