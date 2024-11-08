import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductByCategory,
  getProductById,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/createproduct", createProduct);
router.get("/allproducts", getAllProducts);
router.get("/:id", getProductById);
router.get("/category/:category", getProductByCategory);


export { router as productRoute };
