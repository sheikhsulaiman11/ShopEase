import express from "express";
const router = express.Router();

import { signup, login, renderSignup, renderLogin } from "../controller/authController.js";
import { isAuth } from "../middleware/auth.js";

router.get("/", isAuth, (req, res) => {
    res.redirect('/products');
});


router.get("/login", renderLogin);
router.get("/signup", renderSignup);
router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", (req, res) => {
    res.clearCookie('token');
    res.redirect('/login');
});

export default router;