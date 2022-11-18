import { Request, Response, Router } from "express";
import sharp from "sharp";
import fs from "fs";

const router = Router();

router.get("/image", async (req :Request, res:Response) => {
  const image = req.query.image;
  const width = req.query.width;
  const height = req.query.height;
  var imgpath = `./images/${image}.jpg`;
  try {
    if (width && height) {
      imgpath = `./tmp/${image}-${width}x${height}.jpg`;
      fs.readFile(imgpath, (err, data) => {
        if (err) {
          fs.readFile(`./images/${image}.jpg`, (err, data) => {
            if (err) {
              res.send("Image not found");
            } else {
              sharp(data)
                .resize(Number(width), Number(height))
                .toFormat("jpg")
                .toBuffer()
                .then((data) => {
                  fs.createWriteStream(
                    `./tmp/${image}-${width}x${height}.jpg`,
                    {
                      flags: "w",
                    }
                  ).write(data);
                  res.writeHead(200, { "Content-Type": "image/jpeg" });
                  res.end(data);
                });
            }
          });
        } else {
          res.writeHead(200, { "Content-Type": "image/jpeg" });
          res.end(data);
        }
      });
    } else {
      fs.readFile(imgpath, (err, data) => {
        if (err) {
          res.status(404).send("Image not found");
        } else {
          res.writeHead(200, { "Content-Type": "image/jpeg" });
          res.end(data);
        }
      });
    }
  } catch (error) {
    res.status(502).send("internal server error");
  }
});

export default router;
