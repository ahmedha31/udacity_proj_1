import app from "../index";
import req from "supertest";

const request = req(app);

describe("GET /", () => {
  it("should return 200 OK", (done) => {
    request.get("/").then((response) => {
      expect(response.status).toBe(200);
    });
    done();
  });
});
