import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [
    {
      productId: {
        type: Number,  
        required: true
      },
      title: String,   //  store product data directly
      price: Number,
      image: String,
      quantity: {
        type: Number,
        default: 1
      }
    }
  ]
});

const Cart = mongoose.model('Cart', cartSchema);
export { Cart };