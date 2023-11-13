import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Product from './pages/Product';
import Category from './pages/Category';
import Home from './pages/Home';
// import Cart from './pages/Cart';
import Yeis from './pages/Yeis';

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
        {/* <a href='/cart'>Cart</a> */}
      |
      <a href='y'>yeis</a>
     </nav>

     <h1>welcome to our store</h1>
     </header>

      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          {/* <Route path='/cart' element={<Cart/>}/> */}
          <Route path='/y' element={<Yeis/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
