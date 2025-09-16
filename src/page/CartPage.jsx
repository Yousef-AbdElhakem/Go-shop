import React from 'react';
import { useCart } from '../components/header/Cart';
import { Button } from 'react-bootstrap';
import './pages.css'

function CartPage() {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart mt-5">
      <div className="container">
        <h1 className="mb-4">Cart</h1>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            <div className="row">
              {cart.map((item) => (
                <div key={item.id} className="col-md-6 mb-4">
                  <div className="card d-flex flex-row align-items-center">
                    <img src={item.images[0]} alt={item.title} className="card-img-left" />
                    <div className="card-body">
                      <h5 className="card-title text-white fs-4">{item.title}</h5>
                      <p className="card-text text-light fs-5">${Math.floor(item.price*item.quantity)}</p>
                      <div className="d-flex align-items-center">
                        <Button 
                          className="btn w-25 mx-2" 
                          onClick={() => removeFromCart(item.id)}  variant="secondary"
                        >
                          Delete
                        </Button>
                        <Button className =" btnplus"onClick={() => decreaseQuantity(item.id)}>-</Button>

                        {/* عرض الكمية */}
                        <span className="quan mx-2 text-white">{item.quantity}</span>

                        {/* زرار الزيادة */}
                        <Button className =" btnplus" onClick={() => increaseQuantity(item.id, item.stock)}>+</Button>
                      
                      
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="secondary" onClick={clearCart}>
              Delete All
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
