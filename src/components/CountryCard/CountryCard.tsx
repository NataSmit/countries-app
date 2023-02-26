import React from 'react';
import { Country } from '../../types/country';

interface ICountryCardProps {
  country: Country
}

export default function CountryCard({country}: ICountryCardProps) {

  
  return (
    <li className='card'>
      <div className='card__image'>
        <img className='card__image-item' src={country.flags.png} alt={country.flags.alt} />
      </div>
      <div className='card__body'>
        <h1 className='card__title'>{country.name.official}</h1>
        <p className='card__info'><span className='card__info card__info_bold'>Population:</span> {country.population}</p>
        <p className='card__info'><span className='card__info card__info_bold'>Region:</span> {country.region}</p>
        <p className='card__info'><span className='card__info card__info_bold'>Capital:</span> {country.capital}</p>
      </div>

    </li>
  )
}

