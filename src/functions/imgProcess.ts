import sharp from "sharp";
import { imagespath, tmppath } from "./getpath";
export default async function imgProcess(
  image: string,
  width: string,
  height: string
): Promise<string> {
  var imgpath = imagespath()+ `/${image}.jpg`;

  return sharp(imgpath)
    .resize(Number(width), Number(height))
    .toFormat("jpg")
    .toFile(tmppath+ `/${image}-${width}x${height}.jpg`)
    .then((data) => {
      return  tmppath()+`/${image}-${width}x${height}.jpg`;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}
