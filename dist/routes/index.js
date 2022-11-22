"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var fs_1 = __importDefault(require("fs"));
var imgProcess_1 = __importDefault(require("../functions/imgProcess"));
var CheckImg_1 = require("../middleware/CheckImg");
var router = (0, express_1.Router)();
router.use([CheckImg_1.CheckImg, CheckImg_1.Checktmp]);
router.get("/image", function (req, res) {
    var _a = req.query, image = _a.image, width = _a.width, height = _a.height;
    (0, imgProcess_1["default"])(image, width, height)
        .then(function (data) {
        fs_1["default"].createReadStream(data).pipe(res);
    })["catch"](function (err) {
        res.status(500).send(err);
    });
});
exports["default"] = router;
