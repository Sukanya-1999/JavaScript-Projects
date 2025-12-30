const { Router } = require("express");

const Cart = require("../model/carts.js");

const { getAllCarts } = require("../Controller/cartController.js");

const route = Router();

//GET all carts

route.get("/getAllCarts", getAllCarts);
// http://localhost:3000/api/cart/getAllCarts

route.post("/addNewCart", async (req, res) => {
  const cart = new Cart(req.body);
  await cart.save();
  res.status(201).json(cart);
});

module.exports = route;
