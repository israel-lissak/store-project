import { useState } from "react";

function Yeis() {
  const initialProducts = [
    {
      "id": 1,
      "name": "Product A",
      "price": 19.99,
      "quantity": 50,
      "description": "High-quality product A for your needs."
    },
    {
      "id": 2,
      "name": "Product B",
      "price": 29.99,
      "quantity": 30,
      "description": "An excellent choice for your everyday use."
    },
    // ... (other products) ...
  ];

  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => {
    let total = 0;
    for (const product of cart) {
      total += product.price;
    }
    return total.toFixed(2);
  };

  return (
    <div className="Yeis">
      <h1>Welcome to Our Online Store</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity} in stock</p>
            <p>Description: {product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((product) => (
            <li key={product.id}>{product.name}</li>)
          )}
        </ul>
        <p>Total Payment: ${calculateTotal()}</p>
      </div>
    </div>
  );
}

export default Yeis;
