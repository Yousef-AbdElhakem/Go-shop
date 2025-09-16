import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [email, setEmail] = useState(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    return user?.email || null;
  });

  const [cart, setCart] = useState(() => {
    if (!email) return [];
    const usersData = JSON.parse(localStorage.getItem("usersData")) || {};
    return usersData[email]?.cart || [];
  });

  // لما الـ email يتغير (لما يغير المستخدم)
  useEffect(() => {
    if (!email) {
      setCart([]);
      return;
    }
    const usersData = JSON.parse(localStorage.getItem("usersData")) || {};
    setCart(usersData[email]?.cart || []);
  }, [email]);

  // تحديث cart في localStorage
  useEffect(() => {
    if (!email) return;
    const usersData = JSON.parse(localStorage.getItem("usersData")) || {};
    usersData[email] = {
      ...(usersData[email] || {}),
      cart,
    };
    localStorage.setItem("usersData", JSON.stringify(usersData));
  }, [cart, email]);

  // إضافة منتج (لو موجود نزود الكمية)
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev; // موجود بالفعل → مش نزود هنا
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // زيادة الكمية مع شرط المخزون
  const increaseQuantity = (id, stock) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (item.quantity < stock) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            alert("Sorry !! This is the maximum product in stock");
          }
        }
        return item;
      })
    );
  };

  // نقصان الكمية ولو وصلت 1 يتم حذف المنتج
  const decreaseQuantity = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // لو وصلت 0 → يتحذف
    );
  };

  // مسح منتج بالكامل
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  // هل المنتج موجود؟
  const isInCart = (id) => cart.some((item) => item.id === id);

  // مسح الكارت
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, isInCart ,increaseQuantity,decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext); 

