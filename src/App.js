import React from 'react';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { CartView } from './components/CartView/CartView';
import { CartProvider } from './context/CartContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { Checkout } from './components/Checkout/Checkout';
import './App.scss'


function App() {




  return (
<div className="body">
  <DarkModeProvider>
    <CartProvider>
      
      <BrowserRouter>
          <NavBar/>
          <Routes>  
            <Route path="/" element={ <ItemListContainer/> }/>
            <Route path="/producto/:catId" element={ <ItemListContainer/> }/>
            <Route path="/detail/:itemId" element={ <ItemDetailContainer/> }/>
            <Route path="/cart" element={ <CartView/> }/>
            <Route path="/checkout" element={ <Checkout/> }/>
            <Route path="*" element={ <Navigate to="/"/> }/>
          </Routes> 
      </BrowserRouter>
      
    </CartProvider>
  </DarkModeProvider>
  </div>
  );
}

export default App;
