import express from "express";
import {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router(); // Create a new router object to define routes

// @route   GET /products
// @desc    Get all products
router.get("/", getAllProducts);

// @route   POST /products
// @desc    Create a new product
router.post("/", createProduct);

// @route   GET /products/:id
// @desc    Get a single product by ID
router.get("/:id", getProduct);

// @route   DELETE /products/:id
// @desc    Delete a product by ID
router.delete("/:id", deleteProduct);

// @route   PUT /products/:id
// @desc    Update a product by ID
router.put("/:id", updateProduct);

export default router; // Export the router to use in other parts of the app
