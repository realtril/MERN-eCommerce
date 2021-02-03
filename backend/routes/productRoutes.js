import { Router } from "express";
const router = Router();
import {
  getProductById,
  getProducts,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

//@desc     Fetch all products
//@route    GET /api/products
//@access   Public
router.route("/").get(getProducts).post(protect, admin, createProduct);
//@desc     Fetch a single product
//@route    GET /api/products/:id
//@access   Public
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
