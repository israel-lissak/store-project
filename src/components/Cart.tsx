import { useState, useEffect} from 'react';

function ShoppingCart() {  
  console.log(1)
  localStorage.setItem('cart',JSON.stringify([
    {id:'3', quantity:4},
    {id:'78', quantity:45},
    {id:'4', price:78, name:'67', quantity:45}
  ]))
  console.log(2);
  
  let cart = []
  // let quantity = {}
  if (localStorage.getItem('logIn')==='true') {
    const user = localStorage.getItem('userID');
    const arrOfProducts = await getFromUserInDB(user);
    cart = await fromProductIDToListOfProducts(arrOfProducts);
  }else {
    const arrOfProducts = localStorage.getItem('cart')
    cart = await fromProductIDToListOfProducts(arrOfProducts)
      console.log(cart);
      console.log(3);
  }
  const [cartData, setCartData] = useState(cart || []);
  console.log(4);
  console.log(cartData);
  
  
  async function getFromUserInDB(userID:string) {
    const jsonData = await fetch(`http://localhost:3000/cart/${userID}`)
    const data = await jsonData.json()
    return data
  }
  
  const addOne = async (productID:string, quantity:number) => {
    const updatedCart = cartData.map((item) => {
      if (item.id === productID) {
        return { ...item, quantity: quantity+1 };
      }
      return item;
    });
    setCartData(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  };

  const reduceOne = async (productID:string, quantity:number) => {
    const updatedCart = cartData.map((item) => {
      if (item.id === productID) {
        return { ...item, quantity: quantity-1 };
      }
      return item;
    }).filter((item) => item.quantity > 0); // Remove items with quantity zero.
    setCartData(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  };

  const removeItem = (productId:string) => {
    const updatedCart = cartData.filter((item)=>
        item.id !== productId
    )
    setCartData(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  };

  const clearCart = () => {
    const emptyCart = [{
      id:'no id',
      name:'the cart is empty',
      price:0,
      quantity:0
    }]
    setCartData(emptyCart);
    localStorage.setItem('cart', JSON.stringify(emptyCart));
  };

  const buy = ()=>{
    //לשנות בתוך הדאטה בייס
    console.log('mean time dont work, delete the cart in the local storge');
    clearCart()
  };
  
  const calculateTotal = () => {
    return cartData.reduce((total, item) => total + item.price * item.quantity, 0);
  };

    
  async function fromProductIDToListOfProducts(arr:{product_id:string}[]){
    const list = []
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i].product_id;
      const jsonItem = await fetch(`http://localhost:3000/shop/${element}`);
      const listItem = await jsonItem.json();
      list.push(listItem);
    }
    return list
  }
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartData));
    console.log('render');
  }, [cartData]);

  return (
    <div>
      fgfgf
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
              <td><h4>{item.title}</h4></td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => reduceOne(item.id, item.quantity)}>-</button>
                  {item.quantity}
                <button onClick={() => addOne(item.id, item.quantity)}>+</button>
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

