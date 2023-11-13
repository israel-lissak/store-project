// ProductList.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails"; // Import your ProductDetails component

interface Product {
  _id: string;
  title: string;
  description: string;
  quantity: number;
  image: string;
  available_in: {
    height: number;
    width: number;
  }[];
  price: number;
  clicks: number;
  liters?: number;
  brand?: string;
  watts?: number;
  screen_size?: number;
  size?: string;
  doors?: number;
}

interface Category {
  _id: {
    $oid: string;
  };
  name: string;
  filter: string;
  clicks: number;
  products: Product[];
}

const ProductList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/shop/top_categories")
      .then((response) => response.json())
      .then((data) => {
        // Sort categories based on total clicks in descending order
        const sortedCategories = data.sort((a, b) => b.clicks - a.clicks);

        // Create an array to store the top 5 products for each category
        const topProducts: Product[] = [];

        // Iterate through categories and get the top 5 products for each
        sortedCategories.forEach((category) => {
          const sortedProducts = category.products.sort(
            (a, b) => b.clicks - a.clicks
          );
          topProducts.push(...sortedProducts.slice(0, 5));
        });

        setCategories(sortedCategories);
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div>
      <h1>Top Categories and Products</h1>
      {categories.map((category, index) => (
        <div key={index}>
          <h2>{category.name}</h2>
          <p>Total Clicks: {category.clicks}</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "16px", // Adjust the gap between cards
            }}
          >
            {category.products.slice(0, 5).map((product) => (
              <Link
                to={`/shop/${product._id}`} // Link to the product details page
                key={product._id}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  width: "200px", // Set a fixed width for each card
                }}
              >
                <div
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    margin: "10px",
                    width: "100%", // Ensure the link takes the full width of the container
                  }}
                >
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p>Price: ${product.price}</p>
                  {product.doors && <p>Doors: {product.doors}</p>}
                  <p>Clicks: {product.clicks}</p>
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ maxWidth: "100%", maxHeight: "120px" }} // Adjust image height
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
