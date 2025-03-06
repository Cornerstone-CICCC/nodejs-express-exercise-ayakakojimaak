import { Request, Response } from "express";
import { Product } from "../types/product";
import { productModel } from "../modal/products.modal";

function getProduct(req: Request, res: Response) {
  const product = productModel.getProduct();
  res.json(product);
}

function addProduct(req: Request, res: Response) {
  const reqBody = req.body;
  const product = productModel.addProduct(reqBody);
  res.json(product);
}

function getProductById(req: Request<{ id: string }>, res: Response) {
  const { id } = req.params;
  const product = productModel.getProductById(id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  } else {
    return res.status(200).json(product);
  }
}

function updateProduct(req: Request<{ id: string }>, res: Response) {
  const { id } = req.params;
  const product = productModel.updateProduct(id, req.body);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  } else {
    return res.status(200).json(product);
  }
}

function deleteProduct(req: Request<{ id: string }>, res: Response) {
  const { id } = req.params;
  const product = productModel.deleteProduct(id);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  } else {
    return res.status(200).json(product);
  }
}

export const productController = {
  getProduct,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
