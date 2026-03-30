import { User } from "../model/userModel.js";


// GET all products — renders home page

export const getAllProducts = async (req, res) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    res.render('products', { products, user: req.user });
  } catch (error) {
    res.status(500).send('Failed to fetch products');
  }
};

