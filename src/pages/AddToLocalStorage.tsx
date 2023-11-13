function AddToLocalStorage (product) {
  function addToCart (product) {
    localStorage.setItem('Cart', JSON.stringify(product));
  }
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <img src={product.img}></img>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
      <button onClick={()=>{addToCart}}>add to cart</button>
    </div>
  )
}

export default AddToLocalStorage