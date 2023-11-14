import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// import Product from './components/Product';
// import Category from './components/Category';
import Home from './components/Home';
import ShoppingCart from './components/Cart';

function App() {
  
  return (

    <>
     <nav>
        <a href="/home">Home</a>
      |
      <a href="/TopCat">Home</a>
      |
        <a href="/category">cagegory</a>
      |
        <a href="/product">product</a>
      |
        <a href='/cart'>Shopping Cart</a>
     </nav>

     <h1>welcome to our store</h1>

      <BrowserRouter>
        <Routes>
          {/* <Route path="/product/:id" element={<Product />} /> */}
          <Route path="/home" element={<Home />} />
          {/* <Route path="/category" element={<Category />} /> */}
          <Route path='/cart' element={<ShoppingCart />}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
