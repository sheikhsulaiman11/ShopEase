import express from "express";
const router = express.Router();
import { isAuth } from "../middleware/auth.js";
import {getAllProducts} from "../controller/productController.js";

// All routes protected — must be logged in
router.get("/", isAuth, getAllProducts);

export default router;