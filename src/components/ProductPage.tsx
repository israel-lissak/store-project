// ProductDetails.tsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface RouteParams {
  product_id: string;
}

const ProductDetails: React.FC = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState<any | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/shop/${product_id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [product_id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.title} Details</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {product.doors && <p>Doors: {product.doors}</p>}
      <p>Clicks: {product.clicks}</p>
      <img
        src={product.image}
        alt={product.title}
        style={{ maxWidth: "100%", maxHeight: "400px" }}
      />
    </div>
  );
};

export default ProductDetails;
