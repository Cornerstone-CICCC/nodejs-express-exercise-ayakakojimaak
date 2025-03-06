import express from "express";
import dotenv from "dotenv";
import { signup } from "./middleware/signup.middleware";
import pageRouter from "./routes/page.routes";
import productsRouter from "./routes/products.routes";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// MVC
// Model:
// View: Rendered by the Controller
// Controller:

// Middleware
app.use(signup);

// Routes
app.use(express.json());
app.use("/", productsRouter);
app.use("/", pageRouter);

// Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
