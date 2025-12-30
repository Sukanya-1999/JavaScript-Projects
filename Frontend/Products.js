function createMultipleCart() {
  //access the data
  let products = localStorage.getItem("products");
  products = JSON.parse(products);

  let carts = localStorage.getItem("carts");
  carts = JSON.parse(carts);

  products.forEach(function (product) {
    var dataArray = carts.filter((cart) => cart.name == product.name);

    createCard(product, dataArray);
  });
  createCard();
}

function createCard(product, dataArray) {
  const div = document.createElement("div");
  div.style.width = "370px";

  div.style.boxShadow =
    dataArray.length > 0 ? "0 0 10px red" : "0 0 10px green";
  div.style.margin = "10px";
  div.style.textAlign = "center";
  div.style.padding = "20px";

  var img = document.createElement("img");
  img.style.width = "100%";
  img.style.height = "200px";
  img.src = product.image;

  const h2 = document.createElement("h2");
  h2.textContent = product.name;
  h2.style.color = dataArray.length > 0 ? "red" : "green";
  h2.style.margin = "20px 0px 10px";

  const price = document.createElement("p");
  price.textContent = `$ ${product.price}`;
  price.style.marginTop = "10px";

  const para = document.createElement("p");
  para.textContent = product.description;
  para.style.margin = "20px 0px";
  para.style.fontStyle = "italic";

  const addToCart = document.createElement("button");
  addToCart.textContent = "Add To Cart";
  addToCart.classList.add("addtocart");
  addToCart.style.display = dataArray.length > 0 ? "none" : "inline";
  addToCart.onclick = function () {
    addToCart.style.display = "none";
    removeCart.style.display = "inline";
    h2.style.color = "red";
    div.style.boxShadow = " 0 0 10px red";
    addInCart(product);
  };

  const removeCart = document.createElement("button");
  removeCart.textContent = "Remove From Cart";
  removeCart.classList.add("removecart");
  removeCart.style.display = dataArray.length > 0 ? "inline" : "none";
  removeCart.onclick = function () {
    addToCart.style.display = "inline";
    removeCart.style.display = "none";
    h2.style.color = "green";
    div.style.boxShadow = " 0 0 10px green";
    removeProduct(product.name);
  };

  div.appendChild(img);
  div.appendChild(h2);
  div.appendChild(price);
  div.appendChild(para);
  div.appendChild(addToCart);
  div.appendChild(removeCart);

  document.querySelector("#products").appendChild(div);
}
function addInCart(product) {
  let carts = localStorage.getItem("carts");

  carts = JSON.parse(carts);

  carts.push(product);
  localStorage.setItem("carts", JSON.stringify(carts));
}

function removeProduct(name) {
  let carts = localStorage.getItem("carts");
  carts = JSON.parse(carts);

  var newcart = carts.filter((cart) => cart.name !== name);

  localStorage.setItem("carts", JSON.stringify(newcart));
}

function filterProducts(categoryName) {
  var productsDiv = document.getElementById("products");
  var products = JSON.parse(localStorage.getItem("products"));
  let carts = localStorage.getItem("carts");
  carts = JSON.parse(carts);
  while (productsDiv.firstChild) {
    productsDiv.firstChild.remove();
  }

  if (categoryName === "all") {
    var filteredProducts = products;
  } else {
    var filteredProducts = products.filter(
      (product) => product.category === categoryName
    );
  }

  filteredProducts.forEach((product) => {
    var dataArray = carts.filter((cart) => cart.name == product.name);
    createCard(product, dataArray);
  });
}
