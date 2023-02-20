import React from 'react';
import logo from './logo.svg';
import './App.css';
import Root from './components/Root/Root';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Main from './components/Main/Main';
import CountryCard from './components/CountryCard/CountryCard';

function App() {
  return (
    <div className="App">
      <Root>
        <Header />
        <Search />
        <CountryCard />
        <Main />
      </Root>
    </div>
  );
}

export default App;
