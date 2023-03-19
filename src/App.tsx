import React, {useEffect, useState} from 'react';
import { Country } from './types/country';
import './App.css';
import Root from './components/Root/Root';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Main from './components/Main/Main';
import Home from './components/Home/Home';
import CountryPage from './components/CountryPage/CountryPage';
import { useTheme } from './hooks/useTheme';
import {Routes, Route} from 'react-router-dom';
import {ALL_COUNTRIES_URL} from './api/api'
import Preloader from './components/Preloader/Preloader';

function App() {
  const {theme, setTheme} = useTheme()
  const [countries, setCountries] = useState<Country[]>([])
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([])
  const [isLoading, setIsLoding] = useState(false)
  type Error = {
    state: boolean,
    message: string
  }
  const [error, setError] = useState<Error>({
    state: false,
    message: '' 
  })

  useEffect(() => {
    fetchCountries();
  }, [])

  function toggleTheme() {
    setTheme( theme === 'light' ? 'dark' : 'light')
  }

  async function fetchCountries() {
    try {
      setIsLoding(true)
      const data = await fetch('https://restcountries.com/v3.1/all');
      const response = await data.json()
      localStorage.setItem('allCountries', JSON.stringify(response))
      setCountries(response)
    } catch (err: any) {
      console.log(err)
      setError({
        state: true,
        message: err
      })
    } finally {
      setIsLoding(false)
    }
    
  }


  return (
    <div className="App">
      <Root>
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path='/' element={
            <Home>
              <Search countries={countries} setFilteredCountries={setFilteredCountries} />
              <Preloader isLoading={isLoading} />
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
