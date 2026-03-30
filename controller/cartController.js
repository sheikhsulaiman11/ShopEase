import { Cart } from '../model/cartModel.js';


// GET cart page
export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id });
    res.render('cart', { cart, user: req.user });
  } catch (error) {
    res.status(500).send('Failed to load cart');
  }
};

// POST add to cart
export const addToCart = async (req, res) => {
  const { productId, title, price, image } = req.body;
    try {
        let cart = await Cart.findOne({ user: req.user._id });
        if (!cart) {
            cart = new Cart({ user: req.user._id, items: [] });
        }
        const existingItem = cart.items.find(item => item.productId === Number(productId));
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.items.push({ productId, title, price, image });
        }
        await cart.save();
        res.redirect('/cart');
    } catch (error) {
        res.status(500).send('Failed to add to cart');
    }
};