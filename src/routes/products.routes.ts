import { Router, Request, Response } from "express";
import { Product } from "../types/product";
import { productController } from "../controller/products.controller";

const productsRouter = Router();

productsRouter.get("/products", (req: Request, res: Response) => {
  productController.getProduct(req, res);
});

productsRouter.get("/products/:id", (req: Request<{ id: string }>, res: Response) => {
  productController.getProductById(req, res);
});

productsRouter.post("/products", (req: Request<{}, {}, Omit<Product, "id">>, res: Response) => {
  productController.addProduct(req, res);
});

productsRouter.put("/products/:id", (req: Request<{ id: string }, {}, Omit<Product, "id">>, res: Response) => {
  productController.updateProduct(req, res);
});

productsRouter.delete("/products/:id", (req: Request<{ id: string }>, res: Response) => {
  productController.deleteProduct(req, res);
});

export default productsRouter;
