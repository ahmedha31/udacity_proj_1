import sharp from "sharp";
export default async function imgProcess(
  image: string,
  width: string,
  height: string
): Promise<string> {
  var imgpath = `./images/${image}.jpg`;

  return sharp(imgpath)
    .resize(Number(width), Number(height))
    .toFormat("jpg")
    .toFile(`./tmp/${image}-${width}x${height}.jpg`)
    .then((data) => {
      return `./tmp/${image}-${width}x${height}.jpg`;
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
}
