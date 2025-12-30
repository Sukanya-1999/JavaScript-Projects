const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const CartRoute = require("./routes/cartsRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/cart", CartRoute);

module.exports = app;
