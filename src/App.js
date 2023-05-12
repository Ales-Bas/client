import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './scss/app.scss';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import Home from './pages/Home';
//import MainMenu from './Components/MainMenu';
import PKatalog from './pages/PKatalog';
import TKatalog from './pages/TKatalog';
import Cart from './pages/Cart/Cart';
import ItemPage from './pages/ItemPage';
import InfoPage from './pages/InfoPage';
import ServicePage from './pages/ServicePage';
import CompanyPage from './pages/CompanyPage';

export const SearchPContext = React.createContext();

function App() {

  const [searchPValue, setSearchPValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchPContext.Provider value={{ searchPValue, setSearchPValue }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pkatalog" element={<PKatalog />} />
          <Route path="/tkatalog" element={<TKatalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path={'/typepart' + '/:id'} element={<ItemPage />} />
          <Route path={'/infopage' + '/:id'} element={<InfoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/company" element={<CompanyPage />} />
        </Routes>
        <Footer />
      </SearchPContext.Provider>
    </div>
  );
}

export default App;
