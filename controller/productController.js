import { User } from "../model/userModel.js";


// GET all products — renders home page
export const getAllProducts = async (req, res) => {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=20');
    const data = await response.json();
    const products = data.products.map(p => ({
      id: p.id,
      title: p.title,
      description: p.description,
      price: p.price,
      image: p.thumbnail  // ← map thumbnail to image
    }));
    res.render('products', { products, user: req.user });
  } catch (error) {
    console.log('Fetch error:', error.message);
    res.status(500).send('Failed to fetch products');
  }
};
