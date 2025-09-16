import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaCartArrowDown, FaHeart, FaShare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useCart } from '../header/Cart';
import { useFav } from '../header/Fav';

function Product({ item }) {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const { addToFav, removeFromFav, isInFav } = useFav();
  const navigate = useNavigate();

  // حالة خاصة بالـ Cart
  const [isCart, setIsCart] = useState(false);

  // إضافة للكارت
  const handleAddToCart = (item) => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
      navigate("/login"); 
      return;
    }

    // لو المنتج موجود بالفعل
   if (isInCart(item.id)) {
      removeFromCart(item.id);
    } else {
      addToCart(item);
    }
      
  };

  // إضافة أو إزالة من الفيف
  const handleAddToFav = (item) => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user) {
      navigate("/login");
      return;
    }

    if (isInFav(item.id)) {
      removeFromFav(item.id);
    } else {
      addToFav(item);
    }
  };

  // الذهاب لتفاصيل المنتج
  const handleAddDet = (item) => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!user || !user.email ) {
      navigate("/login");
      return;
    }
    navigate(`products/${item.id}`);
  };

  return (
    <div className='product'>
      <div className='content' onClick={() => handleAddDet(item)}>
        <div className="img_product">
          <img src={item.images[0]} alt={item.title} />
        </div>
        <p className="name_product">{item.title}</p>
        <div className="stars">
          <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
        </div>
        <div className="price">${item.price}</div>
      </div>

      <div className="icons">
        {/* زر الكارت */}
        <span className={`${isCart || isInCart(item.id) ? 'cartin' : ''}`}>
          <FaCartArrowDown onClick={() => handleAddToCart(item)} />
        </span>

        {/* زر الفيف */}
        <span className={`${isInFav(item.id) ? 'favin' : ''}`}>
          <FaHeart onClick={() => handleAddToFav(item)} />
        </span>

        <span><FaShare /></span>
      </div>
    </div>
  );
}

export default Product;



