import { Router } from "express";
const router = Router();
import { authUser, getUserProfile } from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";

//@desc     Fetch all products
//@route    GET /api/products
//@access   Public
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
