import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


import './scss/app.scss';
import Header from './Components/Header';
import Home from './pages/Home';
import MainMenu from './Components/MainMenu';
import ExavatorPage from './pages/ExavatorPage';
import Cart from './pages/Cart/Cart';
import ItemPage from './pages/ItemPage';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className='content'>
        <MainMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exkavator" element={<ExavatorPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path={'/typepart' + '/:id'} element={<ItemPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
