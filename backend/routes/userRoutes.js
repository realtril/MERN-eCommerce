import { Router } from "express";
const router = Router();
import {
  authUser,
  registerUser,
  getUserProfile,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

//@desc     Fetch all products
//@route    GET /api/products
//@access   Public
router.route("/").post(registerUser);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
