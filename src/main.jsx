import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './components/header/Cart.jsx'
import { FavProvider } from './components/header/Fav.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/'>
        <CartProvider>
          <FavProvider>
            <App />
          </FavProvider>
        </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);