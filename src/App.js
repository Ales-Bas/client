import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import './scss/app.scss';
import Header from './Components/header/Header';
import Home from './pages/Home';
import MainMenu from './Components/MainMenu';
import PKatalog from './pages/PKatalog';
import Cart from './pages/Cart/Cart';
import ItemPage from './pages/ItemPage';


function App() {
  return (
    <div className="wrapper">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pkatalog" element={<PKatalog />} />
        <Route path="/cart" element={<Cart />} />
        <Route path={'/typepart' + '/:id'} element={<ItemPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <MainMenu />
    </div>
  );
}

export default App;
