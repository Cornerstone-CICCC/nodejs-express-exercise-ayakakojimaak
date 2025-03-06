"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const products_model_1 = require("../model/products.model");
function getProduct(req, res) {
  const product = products_model_1.productModel.getProduct();
  res.json(product);
}
function addProduct(req, res) {
  const reqBody = req.body;
  const product = products_model_1.productModel.addProduct(reqBody);
  res.json(product);
}
function getProductById(req, res) {
  const { id } = req.params;
  const product = products_model_1.productModel.getProductById(id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  } else {
    return res.status(200).json(product);
  }
}
function updateProduct(req, res) {
  const { id } = req.params;
  const product = products_model_1.productModel.updateProduct(id, req.body);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  } else {
    return res.status(200).json(product);
  }
}
function deleteProduct(req, res) {
  const { id } = req.params;
  const product = products_model_1.productModel.deleteProduct(id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  } else {
    return res.status(200).json(product);
  }
}
exports.productController = {
  getProduct,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
