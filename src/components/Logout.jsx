import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // امسح كل البيانات
localStorage.removeItem("loggedIn");
    localStorage.removeItem('loggedInUser');
    localStorage.removeItem('cart');
    localStorage.removeItem('fav');
      localStorage.clear();
    // بعد المسح روح للصفحة الرئيسية
    navigate('/');
  }, [navigate]);

  return null; // الصفحة فاضية ومجرد بتحول
}

export default Logout;