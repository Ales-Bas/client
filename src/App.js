import React from 'react';
import './scss/app.scss';
import Header from './Components/header/Header';
import Footer from './Components/footer/Footer';
import AppRouter from './Components/AppRouter';

export const SearchPContext = React.createContext();

function App() {

  const [searchPValue, setSearchPValue] = React.useState('');

  return (
    <div className="wrapper">
      <SearchPContext.Provider value={{ searchPValue, setSearchPValue }}>
        <Header />
        <AppRouter />
        <Footer />
      </SearchPContext.Provider>
    </div>
  );
}

export default App;
