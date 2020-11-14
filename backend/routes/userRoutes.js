import { Router } from "express";
const router = Router();
import { authUser } from "../controllers/userControllers.js";

//@desc     Fetch all products
//@route    GET /api/products
//@access   Public
router.post("/login", authUser);
//@desc     Fetch a single product
//@route    GET /api/products/:id
//@access   Public

export default router;
