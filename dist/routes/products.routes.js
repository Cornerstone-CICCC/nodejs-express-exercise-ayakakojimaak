"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = require("../controller/products.controller");
const productsRouter = (0, express_1.Router)();
productsRouter.get("/products", (req, res) => {
    products_controller_1.productController.getProduct(req, res);
});
productsRouter.get("/products/:id", (req, res) => {
    products_controller_1.productController.getProductById(req, res);
});
productsRouter.post("/products", (req, res) => {
    products_controller_1.productController.addProduct(req, res);
});
productsRouter.put("/products/:id", (req, res) => {
    products_controller_1.productController.updateProduct(req, res);
});
productsRouter.delete("/products/:id", (req, res) => {
    products_controller_1.productController.deleteProduct(req, res);
});
exports.default = productsRouter;
