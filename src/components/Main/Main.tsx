import React from 'react';
import CountryCard from '../CountryCard/CountryCard';
import { Country } from '../../types/country';
import {Link} from 'react-router-dom'

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
            <Link className='main__country-link' to={`/${country.cca2}`} key={country.name.common}>
              <CountryCard country={country} />
            </Link>
           
         ))}
      </ul>
      
    </main>
  )
}
