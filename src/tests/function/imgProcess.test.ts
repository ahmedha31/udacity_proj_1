import imgProcess from "../../functions/imgProcess";
import fs from "fs";
describe("Image Processing", () => {
  it("should return a path to the resized image", async () => {
    const image = "fjord";
    const width = "200";
    const height = "200";
    try {
      const data = await imgProcess(image, width, height);
      console.log(data, "expected");
      expect(data).toEqual(`./tmp/${image}-${width}x${height}.jpg`);
      fs.unlink(data, (err) => {
        if (err) throw err;
      });
    } catch (err_1) {
      expect(err_1).toBeNull();
    }
  });
});
