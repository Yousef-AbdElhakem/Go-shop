import React, { useState } from 'react';
import { useFav } from '../components/header/Fav';
import { Button } from 'react-bootstrap';

function FavPage() {
  const { fav, removeFromFav, clearFav } = useFav();



  return (
    <div className="cart mt-5">
      <div className="container">
        <h1 className="mb-4">Favorites</h1>
        {fav.length === 0 ? (
          <p>Fav is empty</p>
        ) : (
          <>
            <div className="row">
              {fav.map((item) => (
                <div key={item.id} className="col-md-6 mb-4">
                  <div className="card d-flex flex-row align-items-center">
                    <img src={item.images[0]} alt={item.title} className="card-img-left" />
                    <div className="card-body">
                      <h5 className="card-title text-white fs-4">{item.title}</h5>
                      <p className="card-text text-white fs-5 ">${item.price}</p>
                      <div className="d-flex align-items-center">
                        <Button 
                          className="btn mx-2 w-25 " 
                          onClick={() => removeFromFav(item.id)}  variant="secondary"
                        >
                          Del
                        </Button>
                        

                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="btn secondary" onClick={clearFav}>
              Delete All
            </Button>
          </>
        )}
      </div>
    </div>
  );
}
export default FavPage;