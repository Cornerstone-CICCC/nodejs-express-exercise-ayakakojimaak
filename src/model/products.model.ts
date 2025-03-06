import { Product } from "../types/product";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";

const filepath = path.join(__dirname, "../../");
const dataFilePath = path.join(filepath, "data/products.json");

function readProducts() {
  const data = fs.readFileSync(dataFilePath, "utf-8");
  return JSON.parse(data);
}

function writeProducts(products: Product[]) {
  fs.writeFileSync(dataFilePath, JSON.stringify(products, null, 2), "utf-8");
}

function getProduct() {
  return readProducts();
}

function getProductById(id: string) {
  return readProducts().find((product: Product) => product.id === id);
}

function addProduct(product: Product) {
  const products = readProducts();
  const newProduct = {
    id: uuidv4(),
    product_name: product.product_name,
    product_description: product.product_description,
    product_price: product.product_price,
  };
  products.push(newProduct);
  writeProducts(products);
  return newProduct;
}

function updateProduct(id: string, product: Product) {
  const products = readProducts();
  const index = products.findIndex((product: Product) => product.id === id);
  if (index === -1) {
    return null;
  } else {
    products[index] = { ...product, id };
    writeProducts(products);
    return products[index];
  }
}
function deleteProduct(id: string) {
  const products = readProducts();
  const index = products.findIndex((product: Product) => product.id === id);
  if (index === -1) {
    return null;
  } else {
    const deletedProduct = products.splice(index, 1);
    writeProducts(products);
    return deletedProduct[0];
  }
}

export const productModel = {
  getProduct,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
