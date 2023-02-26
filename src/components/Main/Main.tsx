import React from 'react';
import CountryCard from '../CountryCard/CountryCard';
import { Country } from '../../types/country';

interface IMainProps {
  countries: Country[]
}

export default function Main({countries}: IMainProps) {
  return (
    <main className='main'>
      <ul className='main__container'>
         {countries.map((country) => (
           <CountryCard country={country} key={country.name.common}/>
         ))}
      </ul>
      
    </main>
  )
}
