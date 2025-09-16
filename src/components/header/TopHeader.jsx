import React from 'react'
import logo from '../../img/logo.png'
import { Link } from 'react-router-dom'
import { useCart } from './Cart';   // ✅ استدعاء الكونتكست
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import './header.css';
import { useFav } from './Fav';
function TopHeader() {
    const { cart } = useCart();
        const { fav } = useFav();
  return (
    <div className='top-header '>
      <div className= "container ">

         <div className='' ><img className='main-logo mx-5 ' src={logo} alt="logo" /></div>

        <form action="" className='search-form  ms-5'>
          <input type="text" placeholder="search" className='search-input  ' />
          <button type="submit" className='search-btn'><FaSearch /></button>
        </form>

          <div className='header-icons '>
            
            <div className='icon'>

            </div>
             <Link  className='icon link ' to="/fav"><FaHeart />
              <span className="count">{fav.length}</span>
            </Link>


             
            <Link  className='icon link ' to="/cart"><FaShoppingCart />
              <span className="count">{cart.length}</span>
            </Link>


          </div>

        
      </div>
    </div>
  )
}

export default TopHeader