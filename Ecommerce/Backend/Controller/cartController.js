const CartModel = require("../model/carts.js");

function getAllCarts(req, res) {
  CartModel.find()
    .then((data) => {
      res.json({ ok: true, result: data });
    })
    .catch((error) => {
      res.send({ ok: false, error: "something went wrong" });
    });
}

function addNewCart() {}
module.exports = { getAllCarts };
