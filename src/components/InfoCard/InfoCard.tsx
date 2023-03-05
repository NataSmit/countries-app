import React from 'react'
import { Country } from '../../types/country'

interface IInfoCardProps {
  country: Country
}

export default function InfoCard({country}: IInfoCardProps) {

  const languagesArr = Object.values(country.languages) 
  //console.log(country.currencies.name)

  console.log('country.currencies', country.currencies)
  return (
    <div className='info-card__body'>
      <div className='info-card__flag'>
        <img className='info-card__flag-img' src={country.flags.png} alt={country.flags.alt} />
      </div>
      <div className='info-card__info'>
        <h1 className='info-card__title'>{country.name.common}</h1>
        <div className='info-card__details'>
          <div className='info-card__facts info-card__section1'>
            <p className='info-card__subtitle'>
              <span className='info-card__subtitle_bold'>Native Name:</span> {country.name.nativeName.common}
            </p>
            <p className='info-card__subtitle'>
              <span className='info-card__subtitle_bold'>Population:</span> {country.population}
            </p>
            <p className='info-card__subtitle'>
              <span className='info-card__subtitle_bold'>Region:</span> {country.region}
            </p>
            <p className='info-card__subtitle'>
              <span className='info-card__subtitle_bold'>Sub Region:</span> {country.subregion}
            </p>
            <p className='info-card__subtitle'>
              <span className='info-card__subtitle_bold'>Capital:</span> {country.capital}
            </p>
            
          </div>
          <div className='info-card__facts info-card__section2'>
            <p className='info-card__subtitle'>
              <span className='info-card__subtitle_bold'>Top Level Domain:</span> {country.tld}
            </p>
            <p className='info-card__subtitle'>
              <span className='info-card__subtitle_bold'>Currencies:</span> {country.currencies.currencies?.name}
            </p>
            <p className='info-card__subtitle'>
              <span className='info-card__subtitle_bold'>Languages:</span>  
              {languagesArr.map((l) => (
                <span> {l} </span>
              ))}
            </p>
          </div>
        </div>
        <div className='info-card__border'>
          <p className='info-card__subtitle'>
            <span className='info-card__subtitle_bold'>Border Countries:</span>  
            {country.borders.map((b) => (
              <span> {b} </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  )
}
