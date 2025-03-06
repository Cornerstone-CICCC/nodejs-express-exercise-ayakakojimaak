"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const uuid_1 = require("uuid");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filepath = path_1.default.join(__dirname, "../../");
const dataFilePath = path_1.default.join(filepath, "data/products.json");
function readProducts() {
    const data = fs_1.default.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(data);
}
function writeProducts(products) {
    fs_1.default.writeFileSync(dataFilePath, JSON.stringify(products, null, 2), "utf-8");
}
function getProduct() {
    return readProducts();
}
function getProductById(id) {
    return readProducts().find((product) => product.id === id);
}
function addProduct(product) {
    const products = readProducts();
    const newProduct = {
        id: (0, uuid_1.v4)(),
        product_name: product.product_name,
        product_description: product.product_description,
        product_price: product.product_price,
    };
    products.push(newProduct);
    writeProducts(products);
    return newProduct;
}
function updateProduct(id, product) {
    const products = readProducts();
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) {
        return null;
    }
    else {
        products[index] = Object.assign(Object.assign({}, product), { id });
        writeProducts(products);
        return products[index];
    }
}
function deleteProduct(id) {
    const products = readProducts();
    const index = products.findIndex((product) => product.id === id);
    if (index === -1) {
        return null;
    }
    else {
        const deletedProduct = products.splice(index, 1);
        writeProducts(products);
        return deletedProduct[0];
    }
}
exports.productModel = {
    getProduct,
    addProduct,
    getProductById,
    updateProduct,
    deleteProduct,
};
