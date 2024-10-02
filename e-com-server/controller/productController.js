const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);
const Cart = require('../models/ProductModel');

const addToCart = async (req, res) => {
  try {
    const { email, id, product_name, quantity, selling_price, thumbnail } =
      req.body;

    let cart = await Cart.findOne({ email });

    if (!cart) {
      cart = new Cart({
        email,
        items: [
          {
            id,
            product_name,
            quantity,
            selling_price,
            thumbnail,
          },
        ],
      });
      await cart.save();
      return res.status(201).send({
        message: 'Cart created and item added successfully',
        status: true,
      });
    }

    const existingItemIndex = cart.items.findIndex((item) => item.id === id);

    if (existingItemIndex > -1) {
      cart.items[existingItemIndex].quantity += quantity;
      cart.items[existingItemIndex].selling_price = selling_price;
    } else {
      cart.items.push({
        id,
        product_name,
        quantity,
        selling_price,
        thumbnail,
      });
    }

    await cart.save();
    res.status(200).send({ message: 'Item added successfully', status: true });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getCartDetails = async (req, res) => {
  try {
    const cart = await Cart.find({ email: req.body.email }).sort({ _id: -1 });
    res.send({ results: { cart: cart?.length ? cart[0]?.items : [] } });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

module.exports = {
  addToCart,
  getCartDetails,
};
