import { useState, useEffect } from 'react';

function ShoppingCart() {
    localStorage.setItem('Cart', JSON.stringify([{id:0, title:'rytr', price:97, quantity:3}, {id:1, title:'fytt', price:67, quantity:34}, {id:2, title:'gftyfh', price:67, quantity:5}]))
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem('Cart')) || []
  );

  const updateQuantity = (productId, newQuantity) => {
    console.log(productId);
    const updatedCart = cartData.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter((item) => item.quantity > 0); // Remove items with quantity zero.
    setCartData(updatedCart);
    localStorage.setItem('Cart', JSON.stringify(updatedCart));
    console.log(localStorage.getItem('Cart'));
  };

  const removeItem = (productId) => {
    console.log(productId);
    const updatedCart = cartData.filter((item)=>
        item.id !== productId
    )
    setCartData(updatedCart);
  };

  const clearCart = () => {
    setCartData([]);
    localStorage.setItem('Cart', cartData)
    console.log(localStorage.getItem('Cart'));
  };
  const buy = ()=>{
    //לשנות בתוך הדאטה בייס
    console.log('mean time dont work, delete the cart in the local storge');
    clearCart()
  };
  const calculateTotal = () => {
    return cartData.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(cartData));
  }, [cartData]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Total: ${calculateTotal().toFixed(2)}</h2>
        <button onClick={clearCart}>Empty Cart</button>
        <button onClick={buy}>payment</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
