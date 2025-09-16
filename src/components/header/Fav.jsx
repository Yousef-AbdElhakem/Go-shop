import React, { createContext, useContext, useState, useEffect } from "react";

const FavContext = createContext();

export const FavProvider = ({ children }) => {
  // نجيب الإيميل من المستخدم الحالي
  const [email, setEmail] = useState(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    return user?.email || null;
  });

  // أول ما يفتح التطبيق، نجيب الفيف المخزّن للمستخدم
  const [fav, setFav] = useState(() => {
    if (!email) return [];
    const usersData = JSON.parse(localStorage.getItem("usersData")) || {};
    return usersData[email]?.fav || [];
  });

  // لما يتغير المستخدم (الإيميل)
  useEffect(() => {
    if (!email) {
      setFav([]);
      return;
    }
    const usersData = JSON.parse(localStorage.getItem("usersData")) || {};
    setFav(usersData[email]?.fav || []);
  }, [email]);

  // تحديث localStorage أول ما الفيف يتغير
  useEffect(() => {
    if (!email) return;
    const usersData = JSON.parse(localStorage.getItem("usersData")) || {};
    usersData[email] = {
      ...(usersData[email] || {}),
      fav,
    };
    localStorage.setItem("usersData", JSON.stringify(usersData));
  }, [fav, email]);

  // دوال للتحكم في الفيف
  const addToFav = (product) => {
    setFav((prev) => [...prev, product]);
  };

  const removeFromFav = (id) => {
    setFav((prev) => prev.filter((item) => item.id !== id));
  };

  const isInFav = (id) => fav.some((item) => item.id === id);
  

  const clearFav = () => setFav([]);

  return (
    <FavContext.Provider value={{ fav, addToFav, removeFromFav, clearFav, isInFav }}>
      {children}
    </FavContext.Provider>
  );
};

// hook جاهز
export const useFav = () => useContext(FavContext);
