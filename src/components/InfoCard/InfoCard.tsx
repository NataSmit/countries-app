import React from 'react'
import { Country } from '../../types/country'

interface IInfoCardProps {
  country: Country
}

export default function InfoCard({country}: IInfoCardProps) {
  return (
    <div className='country-page__body'>
      <div className='country-page__flag'>
        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
      <div className='country-page__info'>
        <h1 className='country-page__title'>{country.name.common}</h1>
        <div className='country-page__details'>
          <div className='country-page__facts country-page__section1'>
            <p className='country-page__subtitle'>
              <span className='country-page__subtitle_bold'>Native Name:</span>{country.name.nativeName.common}
            </p>
            <p className='country-page__subtitle'>
              <span className='country-page__subtitle_bold'>Population:</span> {country.population}
            </p>
            <p className='country-page__subtitle'>
              <span className='country-page__subtitle_bold'>Region:</span> {country.region}
            </p>
            <p className='country-page__subtitle'>
              <span className='country-page__subtitle_bold'>Sub Region:</span> {country.subregion}
            </p>
            <p className='country-page__subtitle'>
              <span className='country-page__subtitle_bold'>Capital:</span> {country.capital}
            </p>
            
          </div>
          <div className='country-page__facts country-page__section2'></div>
        </div>
        <div className='country-page__border'></div>
      </div>
    </div>
  )
}
