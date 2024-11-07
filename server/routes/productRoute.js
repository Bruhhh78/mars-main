import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/createproduct", createProduct);
router.get("/allproducts", getAllProducts);
router.get("/:id", getProductById);

export { router as productRoute };
