import { useState, useEffect } from 'react';

function ShoppingCart() {
  localStorage.setItem('cart', undefined)
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem('cart')) || []
  );
  if(!cartData.length){
    console.log(45);
    setCartData(
      localStorage.setItem(
        'cart', JSON.stringify(
          [
            {
              id:'no id',
              name:'the cart is empty',
              price:0,
              quantity:0
            }
          ]
        )
      )
    )
  };

  const updateQuantity = (productId:string, newQuantity:number) => {
    console.log(productId);
    const updatedCart = cartData.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter((item) => item.quantity > 0); // Remove items with quantity zero.
    setCartData(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    console.log(localStorage.getItem('cart'));
  };

  const removeItem = (productId:string) => {
    console.log(productId);
    const updatedCart = cartData.filter((item)=>
        item.id !== productId
    )
    setCartData(updatedCart);
    localStorage.setItem('cart', updatedCart)
    console.log(localStorage.getItem('cart'));
  };

  const clearCart = () => {
    setCartData([{
      id:'no id',
      name:'the cart is empty',
      price:0,
      quantity:0
    }]);
    localStorage.setItem('cart', cartData);
    console.log(localStorage.getItem('cart'));
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
    localStorage.setItem('cart', JSON.stringify(cartData));
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
              <td><h4>{item.name}</h4></td>
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
