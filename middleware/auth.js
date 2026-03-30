import jwt from "jsonwebtoken";
import { User } from "../model/userModel.js";

export const isAuth = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers['authorization'];
        console.log('Token received:', token);
        console.log('All cookies:', req.cookies);
        console.log('Headers:', req.headers.cookie);
        if (!token) return res.redirect('/login');

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);
        if (!user) return res.redirect('/login');

        req.user = user;
        next();
    } catch (err) {
        console.log('Auth error:', err.message);
        return res.redirect('/login');
    }
};