"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
pageRouter.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});
// Fallback
pageRouter.use((req, res, next) => {
    res.status(404).send("Page not found");
});
exports.default = pageRouter;
