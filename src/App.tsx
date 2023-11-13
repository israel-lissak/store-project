import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


import Product from './components/Product';
import Category from './components/Category';
import Home from './components/Home';
import SignInSide from './components/SignIn';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

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
        <a href="/sign in">Sign In</a>
      |
      <a href="/sign Up">Sign Up</a>

     </nav>

     <h1>welcome to our store</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/sign in" element={<SignIn/>} />
          <Route path="/sign Up" element={<SignUp/>} />



        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
