const { connect } = require("mongoose");

const url = "mongodb://localhost:27017/product";

function createConnection() {
  connect(url)
    .then(() => {
      console.log("connected successfully with MongoDB");
    })
    .catch((error) => {
      console.log("failed to connect with database");
      console.log(error);
    });
}

module.exports = createConnection;
