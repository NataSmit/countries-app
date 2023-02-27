import React from 'react';
import CountryCard from '../CountryCard/CountryCard';
import { Country } from '../../types/country';

interface IMainProps {
  filteredCountries: Country[]
}

export default function Main({filteredCountries}: IMainProps) {

  if (filteredCountries.length === 0) {
    try {
      filteredCountries = JSON.parse(localStorage.getItem('allCountries') as string) 
    } catch (err) {
       console.log(err)
    }

  }


  return (
    <main className='main'>
      <ul className='main__container'>
         {filteredCountries.map((country) => (
           <CountryCard country={country} key={country.name.common}/>
         ))}
      </ul>
      
    </main>
  )
}
