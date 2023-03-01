import React, {useEffect, useState} from 'react';
import { Country } from './types/country';
import './App.css';
import Root from './components/Root/Root';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import CountryCard from './components/CountryCard/CountryCard';
import CountryPage from './components/CountryPage/CountryPage';
import { useTheme } from './hooks/useTheme';
import {Routes, Route} from 'react-router-dom';

function App() {
  const {theme, setTheme} = useTheme()
  const [countries, setCountries] = useState<Country[]>([])
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])

  function toggleTheme() {
    setTheme( theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    fetchCountries();
  }, [])

  async function fetchCountries() {
    const data = await fetch('https://restcountries.com/v3.1/all');
    console.log('data', data)
    const response = await data.json()
    localStorage.setItem('allCountries', JSON.stringify(response))
    setCountries(response)
  }


  return (
    <div className="App">
      <Root>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path='/' element={
            <Home>
              <Search countries={countries} setFilteredCountries={setFilteredCountries} />
              <Main filteredCountries={filteredCountries} />
            </Home>
          } 
          />
          
          <Route path='/:code' element={<CountryPage />} />
          
        </Routes>
        
      </Root>
    </div>
  );
}

export default App;
