import './App.css'
import {BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom'
import ProductDetails from './page/ProductDetails/ProductDetails'
import Login from './page/login/Login'
import Home from './page/home/Home'
import TopHeader from './components/header/TopHeader'
import CartPage from './page/CartPage'
import FavPage from './page/FavPage'
import { useState , useEffect } from 'react'
import BottomHeader from './components/header/BottomHeader'

function App() {
const [loggedIn, setLoggedIn] = useState(
  localStorage.getItem("loggedIn") === "true"
);

useEffect(() => {
  const checkLogin = () => {
    setLoggedIn(localStorage.getItem("loggedIn") === "true");
  };
  window.addEventListener("storage", checkLogin);
  return () => window.removeEventListener("storage", checkLogin);
}, []);
  return (
    <>
        <header>
          <TopHeader/>
           <BottomHeader/>
        </header>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/products/:id' element={loggedIn ? <ProductDetails /> : <Navigate to="/login" />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<CartPage/>}/>
         <Route path='/fav' element={<FavPage/>}/>

      </Routes>
    </>
  )
}

// خلي <Router> في index.jsx بدل ما تحطه هنا
export default App;

