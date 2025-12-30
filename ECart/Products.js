var productData = [
  // ---------- ELECTRONICS (1–7) ----------
  {
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cbb9f79",
    name: "Smartphone X200",
    price: 699,
    description: "High-performance smartphone with 128GB storage.",
    rating: 4.5,
    category: "electronics",
  },
  {
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    name: "UltraBook Pro 14",
    price: 1099,
    description: "Lightweight laptop with Intel i7 and 16GB RAM.",
    rating: 4.7,
    category: "electronics",
  },
  {
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796",
    name: "Noise Cancelling Headphones",
    price: 199,
    description: "Wireless headphones with deep bass.",
    rating: 4.4,
    category: "electronics",
  },
  {
    image: "https://images.unsplash.com/photo-1587790037313-5c5cf7a75184",
    name: "55-inch 4K Smart TV",
    price: 499,
    description: "Crystal-clear 4K display with streaming apps.",
    rating: 4.6,
    category: "electronics",
  },
  {
    image: "https://images.unsplash.com/photo-1584735175097-719d848f8448",
    name: "Tablet Max 10",
    price: 299,
    description: "HD 10-inch screen with fast processor.",
    rating: 4.3,
    category: "electronics",
  },
  {
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b",
    name: "SmartWatch Fit",
    price: 149,
    description: "Fitness watch with heart-rate tracking.",
    rating: 4.2,
    category: "electronics",
  },
  {
    image: "https://images.unsplash.com/photo-1519183071298-a2962be96c85",
    name: "Digital Camera ProShot",
    price: 899,
    description: "24MP camera with interchangeable lens.",
    rating: 4.8,
    category: "electronics",
  },

  // ---------- MEN CLOTHING (8–14) ----------
  {
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    name: "Men's Casual Shirt",
    price: 29,
    description: "Slim-fit cotton casual shirt.",
    rating: 4.1,
    category: "men-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1530845641050-2736e62e0919",
    name: "Men's Denim Jeans",
    price: 45,
    description: "Blue denim jeans with perfect fit.",
    rating: 4.3,
    category: "men-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543",
    name: "Men's Leather Jacket",
    price: 120,
    description: "Premium brown leather biker jacket.",
    rating: 4.6,
    category: "men-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    name: "Men's Graphic T-Shirt",
    price: 19,
    description: "Cotton t-shirt with modern print.",
    rating: 4.0,
    category: "men-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1528701800489-20be9ee1ed09",
    name: "Men's Running Shoes",
    price: 65,
    description: "Lightweight running shoes.",
    rating: 4.4,
    category: "men-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    name: "Men's Winter Sweater",
    price: 40,
    description: "Warm wool-blend sweater.",
    rating: 4.5,
    category: "men-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1520975930785-7d78268c3fcc",
    name: "Men's Formal Shirt",
    price: 35,
    description: "Classic white formal shirt.",
    rating: 4.2,
    category: "men-cloth",
  },

  // ---------- WOMEN CLOTHING (15–21) ----------
  {
    image: "https://images.unsplash.com/photo-1520974735194-6c55643f90b3",
    name: "Women's Summer Dress",
    price: 39,
    description: "Floral printed dress for summer.",
    rating: 4.4,
    category: "women-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1514996937319-344454492b37",
    name: "Women's Skinny Jeans",
    price: 49,
    description: "Comfort stretch skinny jeans.",
    rating: 4.3,
    category: "women-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1533652750687-1c00da094a0b",
    name: "Women's Stylish Top",
    price: 25,
    description: "Trendy top with soft fabric.",
    rating: 4.1,
    category: "women-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1523381098474-bd88ca0bb297",
    name: "Women's Denim Jacket",
    price: 55,
    description: "Classic light blue denim jacket.",
    rating: 4.5,
    category: "women-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1520975738530-b52f4a1c7cdc",
    name: "Women's High Heels",
    price: 70,
    description: "Elegant heels for parties.",
    rating: 4.3,
    category: "women-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    name: "Women's Silk Saree",
    price: 89,
    description: "Beautiful traditional silk saree.",
    rating: 4.6,
    category: "women-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1587764377692-8267971a52e9",
    name: "Women's Handbag",
    price: 50,
    description: "Stylish and durable handbag.",
    rating: 4.2,
    category: "women-cloth",
  },

  // ---------- KIDS CLOTHING (22–28) ----------
  {
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    name: "Kids Boys T-Shirt",
    price: 15,
    description: "Soft printed boys t-shirt.",
    rating: 4.3,
    category: "kids-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    name: "Kids Girls Dress",
    price: 25,
    description: "Cute floral dress for girls.",
    rating: 4.5,
    category: "kids-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1598550874172-28306c6c49da",
    name: "Kids Sneakers",
    price: 30,
    description: "Durable and comfy sneakers.",
    rating: 4.2,
    category: "kids-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1502404768591-f24d06cfac7e",
    name: "Kids Boys Pants",
    price: 20,
    description: "Comfortable cotton pants.",
    rating: 4.1,
    category: "kids-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1602810312351-7884b10f1f8c",
    name: "Kids Winter Jacket",
    price: 45,
    description: "Warm winter jacket with hood.",
    rating: 4.6,
    category: "kids-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1589571894960-20bbe2828a27",
    name: "Kids Girls Skirt",
    price: 18,
    description: "Soft cotton skirt.",
    rating: 4.2,
    category: "kids-cloth",
  },
  {
    image: "https://images.unsplash.com/photo-1561365458-1a31a322b8d4",
    name: "Kids Clothing Set",
    price: 29,
    description: "Two-piece top & pants set.",
    rating: 4.5,
    category: "kids-cloth",
  },

  // ---------- FURNITURE (29–34) ----------
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    name: "3-Seater Sofa",
    price: 499,
    description: "Comfortable modern fabric sofa.",
    rating: 4.6,
    category: "furniture",
  },
  {
    image: "https://images.unsplash.com/photo-1616628182501-a6e8f3c8e9d1",
    name: "Queen Size Bed",
    price: 699,
    description: "Solid wood queen bed.",
    rating: 4.5,
    category: "furniture",
  },
  {
    image: "https://images.unsplash.com/photo-1582582621959-48d5c4e8ce62",
    name: "Wooden Dining Table",
    price: 350,
    description: "4-seater wooden dining table.",
    rating: 4.4,
    category: "furniture",
  },
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    name: "Office Chair",
    price: 120,
    description: "Ergonomic office chair.",
    rating: 4.3,
    category: "furniture",
  },
  {
    image: "https://images.unsplash.com/photo-1598300053725-4f5e4d262e5f",
    name: "Wooden Bookshelf",
    price: 99,
    description: "5-tier wooden bookshelf.",
    rating: 4.2,
    category: "furniture",
  },
  {
    image: "https://images.unsplash.com/photo-1615870216519-2f9cf7f4a83c",
    name: "Double-Door Wardrobe",
    price: 399,
    description: "Spacious wardrobe with shelves.",
    rating: 4.4,
    category: "furniture",
  },

  // ---------- COSMETICS (35–40) ----------
  {
    image: "https://images.unsplash.com/photo-1585238342028-4cbc972f1d9d",
    name: "Matte Lipstick",
    price: 12,
    description: "Long-lasting matte lipstick.",
    rating: 4.3,
    category: "cosmetics",
  },
  {
    image: "https://images.unsplash.com/photo-1602763224383-46ef6a6cd664",
    name: "Liquid Foundation",
    price: 18,
    description: "Full coverage foundation.",
    rating: 4.5,
    category: "cosmetics",
  },
  {
    image: "https://images.unsplash.com/photo-1600185365483-26d7d6a0d1b7",
    name: "Moisturizing Cream",
    price: 15,
    description: "Hydrating daily face cream.",
    rating: 4.4,
    category: "cosmetics",
  },
  {
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    name: "Women's Perfume",
    price: 49,
    description: "Floral long-lasting fragrance.",
    rating: 4.6,
    category: "cosmetics",
  },
  {
    image: "https://images.unsplash.com/photo-1585386959984-a41552231693",
    name: "Waterproof Eyeliner",
    price: 10,
    description: "Smudge-proof black eyeliner.",
    rating: 4.2,
    category: "cosmetics",
  },
  {
    image: "https://images.unsplash.com/photo-1583241806765-de6f7c37c8d6",
    name: "Herbal Face Wash",
    price: 8,
    description: "Natural herbal face cleanser.",
    rating: 4.3,
    category: "cosmetics",
  },
];

function createCard(image, name, price, description) {
  //write the logic to create a card
  const img = document.createElement("img");
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const button = document.createElement("button");

  div.id = "card";
  img.src = image;

  h3.innerText = name;
  p1.innerText = price;
  p2.innerText = description;

  button.innerText = "Add to Cart";

  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p1);
  div.appendChild(p2);
  div.appendChild(button);

  const section = document.getElementById("products");
  section.appendChild(div);
}

function productCards() {
  productData.forEach(({ image, name, price, description }) => {
    createCard(image, name.slice(0, 21), price, description.slice(0, 80));
  });
}
