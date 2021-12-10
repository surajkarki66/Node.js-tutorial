"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var app = (0, express_1["default"])();
app.use(express_1["default"].json());
app.listen(5000, function () { return console.log("Server running"); });
//# sourceMappingURL=app.js.map