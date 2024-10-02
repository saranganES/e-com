const express = require('express');
const router = express.Router();
const {
  addToCart,
  getCartDetails,
} = require('../controller/productController');

router.post('/add-cart', addToCart);

router.post('/get-cart', getCartDetails);

module.exports = router;
