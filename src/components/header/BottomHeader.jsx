import React from 'react'

import { FiAlignJustify } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link,useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CiLogin } from "react-icons/ci";
import { IoPersonAdd } from "react-icons/io5";

function BottomHeader() {
  const myPages = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Accessories", link: "/Accessories" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];
  const location = useLocation();
const [categories,setCategories] = useState([]);
const [isActive, setIsActive] = useState(false);
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
useEffect(() => {
  fetch('https://dummyjson.com/products/categories')
    .then(response => response.json())
    .then(data => setCategories(data))
}, [])
const handleLogout = () => {
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('loggedIn');
  localStorage.removeItem('cart');
  localStorage.removeItem('fav');
  navigate('/');
};
  console.log(categories);
  return (
    <div className='btm_header ' >
      <div className='container'>
        <nav>
          <div className='category_nav '>
            <div className='category_btn' onClick={() => setIsActive(!isActive)}>
              <FiAlignJustify/>
              Browser Category
              <IoMdArrowDropdown />
              
            </div>
            <div className={`category_nav_list ${isActive ? 'active' : ''}`}>
            {categories.map((category) =>(
              <Link className='link' to={category.slug}>{category.name}</Link>
              )
              )}

            </div>
          </div>
          <div className="nav_links">
           {myPages.map((page, index) => (
           <li className={ location.pathname=== page.link ? "active" :"" }  key={index}>
              <Link id="link" to={page.link}>{page.name}</Link>
            </li>
        ))}
      </div>
        </nav>
        <div className='nav-icons pb-3'>
          <div className="icon login mt-3 ">
            {user ? (
              <div className='d-flex'>
              <span className="text-white fs-5 mt-4  "> Hello {user.email}</span>
              <div className= "logout mt-3 mx-3">
              <Link className="link fs-3"   onClick={handleLogout} to="/"><CiLogin /></Link>
              </div>

              </div>

            ) : (
              <Link className="link login-logo fs-3 " to="/login">
                <IoPersonAdd  className='mt-2 me-4'/>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>

  )
}

export default BottomHeader


