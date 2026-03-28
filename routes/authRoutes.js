import express from "express";
const router = express.Router();

import { signup, login, renderSignup, renderLogin } from "../controller/authController.js";


router.get("/login", renderLogin);
router.get("/signup", renderSignup);
router.post("/signup", signup);
router.post("/login", login);

export default router;