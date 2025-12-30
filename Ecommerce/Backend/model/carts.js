const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  image: String,
  name: String,
  price: String,
  description: String,
});

const CartModel = mongoose.model("Cart", cartSchema, "product");
module.exports = CartModel;
