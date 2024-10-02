const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  product_name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  selling_price: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
}, { _id: false });

const CartSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  items: [CartItemSchema],
}, { timestamps: true });

const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
