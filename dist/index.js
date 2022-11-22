"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1["default"])();
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.use("/api", index_1["default"]);
app.on("error", function (err) {
    console.error(err);
});
app.listen(3000, function () {
    console.log("Server started on port 3000");
});
exports["default"] = app;
