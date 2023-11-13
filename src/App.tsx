import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Product from './pages/AddToLocalStorage';
import Category from './pages/Category';
import Home from './pages/Home';
import ShoppingCart from './Cart';
function App() {
  
  return (

    <>
    <header style={{position:'sticky', top:0}}>
     <nav>
        <a href="/home">Home</a>
      |
        <a href="/category">cagegory</a>
      |
        <a href="/product">product</a>
      |
        <a href='y'>shopping</a>
     </nav>

     <h1>welcome to our store</h1>
     </header>
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path='/y' element={<ShoppingCart/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
