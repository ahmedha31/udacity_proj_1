import app from "../../index";
import req from "supertest";

const request = req(app);

describe("test get image without resizing", () => {
  it("should return 200 OK", () => {
    request
      .get("/api/imgage")
      .query({ image: "santamonica" })
      .then((response) => {
        expect(response.status).toBe(200);
      });
  });
});

describe("test get image with resizing", () => {
  it("should return 200 OK", () => {
    request
      .get("/api/imgage")
      .query({ image: "santamonica", width: "600", height: "500" })
      .then((response) => {
        expect(response.status).toBe(200);
      });
  });
});
