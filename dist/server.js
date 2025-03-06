"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const signup_middleware_1 = require("./middleware/signup.middleware");
const page_routes_1 = __importDefault(require("./routes/page.routes"));
const products_routes_1 = __importDefault(require("./routes/products.routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
// MVC
// Model:
// View: Rendered by the Controller
// Controller:
// Middleware
app.use(signup_middleware_1.signup);
// Routes
app.use(express_1.default.json());
app.use("/", products_routes_1.default);
app.use("/", page_routes_1.default);
// Server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
