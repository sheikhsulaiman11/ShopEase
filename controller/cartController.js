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

// POST update cart item quantity

export const updateCart = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        const cart = await Cart.findOne ({ user: req.user._id});
        if (!cart){
            return res.render ('cart', { cart: null, user: req.user, error: 'Cart not found' });
        }
        const item = cart.items.find(item => item.productId === Number(productId));
        if (!item) {
            return res.render('cart', { cart, user: req.user, error: 'Item not found in cart' });
        }
        item.quantity = Number(quantity);
        await cart.save();
        res.redirect('/cart');
    } catch (error) {
        res.status(500).send('Failed to update cart');
    } 
}


// POST remove from cart
 export const removeFromCart = async (req, res) => {
    const { productId } = req.params;
    try{
        const cart = await Cart.findOne({ user: req.user._id });
        if (!cart){
            return res.render('cart', { cart: null, user: req.user, error: 'Cart not found' }); 
        }
        cart.items = cart.items.filter(item => item.productId !== Number(productId));
        await cart.save();
        res.redirect('/cart');
    } catch (error) {
        res.status(500).send('Failed to remove from cart');
    }
}