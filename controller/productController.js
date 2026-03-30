import { User } from "../model/userModel.js";


// GET all products — renders home page

export const getAllProducts = async (req, res) => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    console.log('FakeStore response status:', response.status); // ← add this
    const products = await response.json();
    res.render('products', { products, user: req.user });
  } catch (error) {
    console.log('FakeStore fetch error:', error.message); // ← add this
    res.status(500).send('Failed to fetch products');
  }
};

