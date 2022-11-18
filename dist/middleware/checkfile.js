"use strict";
exports.__esModule = true;
function checkFile(req, res, next) {
    var image = req.query.image;
    var width = req.query.width;
    var height = req.query.height;
    var imgpath = "./images/".concat(image, ".jpg");
    if (width && height) {
        imgpath = "./images/".concat(image, "-").concat(width, "x").concat(height, ".jpg");
    }
    next();
}
exports["default"] = checkFile;
