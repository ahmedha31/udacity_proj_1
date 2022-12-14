"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var index_1 = __importDefault(require("../index"));
var supertest_1 = __importDefault(require("supertest"));
var request = (0, supertest_1["default"])(index_1["default"]);
describe("GET /", function () {
    it("should return 200 OK", function (done) {
        request.get("/").then(function (response) {
            expect(response.status).toBe(200);
        });
        done();
    });
});
