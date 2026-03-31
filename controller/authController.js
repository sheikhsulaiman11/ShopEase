import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from "../model/userModel.js";



// Render login page
export const renderLogin = (req, res) => {
    res.render('login', { error: null });
};


// Render signup page
export const renderSignup = (req, res) => {
    res.render('signup', { error: null });
};



// Signup user
export const signup = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        
        if (!firstname || !lastname || !email || !password) {
            return res.render('signup', { error: 'All fields are required' });
        }
        const existing = await User.findOne({ email });
        if (existing) {
            return res.render('signup', { error: 'Email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ firstname, lastname, email, password: hashedPassword });

        const token = jwt.sign({ id: user._id },
                                 process.env.JWT_SECRET,
                               { expiresIn: '1d' });

        res.cookie('token', token, {
                    httpOnly: true,
                    secure: true, 
                    sameSite: "none",  
             });

        res.redirect('/');

    } catch (err) {
        console.log(err);
        res.render('signup', { error: 'Something went wrong, try again' });
    }
};


// Login user
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
    return res.render('login', { error: 'All fields are required' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.render('login', { error: 'Invalid email or password' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.render('login', { error: 'Invalid email or password' });
        }
        const token = jwt.sign({ id: user._id },
                                 process.env.JWT_SECRET,
                               { expiresIn: '1d' });
          res.cookie('token', token, {
                    httpOnly: true,
                    secure: true, 
                    sameSite: "none",  
             });
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.render('login', { error: 'Something went wrong, try again' });
    }
};