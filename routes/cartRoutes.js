import express from "express";
const router = express.Router();
import { isAuth } from "../middleware/auth.js";
import { getCart, addToCart,} from "../controller/cartController.js";

router.get("/", isAuth, getCart);
router.post("/add", isAuth, addToCart); 
// router.post("/update", isAuth, updateCart);     
// router.post("/remove/:productId", isAuth, removeFromCart);

export default router;