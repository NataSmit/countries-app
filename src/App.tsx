import React, {useEffect, useState} from 'react';
import { Country } from './types/country';
import './App.css';
import Root from './components/Root/Root';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Main from './components/Main/Main';
import CountryCard from './components/CountryCard/CountryCard';

function App() {

  const [countries, setCountries] = useState<Country[]>([])

  useEffect(() => {
    fetchCountries();
  }, [])

  async function fetchCountries() {
    const data = await fetch('https://restcountries.com/v3.1/all');
    console.log('data', data)
    const response = await data.json()
    setCountries(response)
  }

  


  return (
    <div className="App">
      <Root>
        <Header />
        <Search countries={countries} setCountries={setCountries} />
        <Main countries={countries} />
      </Root>
    </div>
  );
}

export default App;
