const app = require("./app.js");
//const CartRoute = require("./routes/cartsRoute.js");
const createConnection = require("./config/mongodbconnection.js");

// app.use("/api/cart", CartRoute);
createConnection();

app.listen(3000, () => {
  console.log("Server is running on 3000 Port");
});
