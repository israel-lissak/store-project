import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Product from './pages/AddToLocalStorage';
import Category from './pages/Category';
import Home from './pages/Home';
import ShoppingCart from './Cart';
function App() {
  
  return (

    <>
     <nav>
        <a href="/home">Home</a>
      |
        <a href="/category">cagegory</a>
      |
        <a href="/product">product</a>
      |
        <a href='/cart'>store</a>
     </nav>

     <h1>welcome to our store</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path='/cart' element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
