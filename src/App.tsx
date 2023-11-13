import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


import Product from './pages/Product';
import Category from './pages/Category';
import Home from './pages/Home';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
// import TopFiveCategories from './pages/topFiveCategories';
// import TopCategories from './pages/topCategories';

function App() {

  return (

    <>
      <nav>
        <a href="/home"> Home </a>
        |
        <a href="/category"> Category </a>
        |
        <a href="/product"> Product </a>
        |
        <a href="/SignIn"> Sign In </a>
        |
        <a href="/SignUp"> Sign Up</a>
      </nav>

      <h1>Welcome to our store</h1>

      {/* <TopFiveCategories>Top Five Categories</TopFiveCategories> */}

      

      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          {/* <Route path="/TopFiveCategories" element={<TopFiveCategories />} /> */}
          {/* <Route path="/topCtegories" element={<TopCategories />} /> */}
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
