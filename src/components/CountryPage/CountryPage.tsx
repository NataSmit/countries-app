import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { Country } from '../../types/country';


export default function CountryPge() {
  const { code } = useParams() as {code: string}
  console.log('code', code)
  const [country, setCountry] = useState<Country>()
  
  async function fetchCountry(val: string) {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${val}`)
    const data = await res.json()
    console.log('data page', data)
    setCountry(data)
  }

  useEffect(() => {
    fetchCountry(code)
  }, [code])



  return (
    <div className='country-page'>
      <div className='country-page__container'>
        <div className='country-page__btn-container'>
          <button className='country-page__btn'>Back</button>
        </div>
        <div className='country-page__body'>
          <div className='country-page__flag'>
            <img src={country?.flags.png} alt={country?.flags.alt} />
          </div>
          <div className='country-page__info'>
            <h1 className='country-page__title'></h1>
            <div className='country-page__details'></div>
            <div className='country-page__border'></div>
          </div>
        </div>
        
      </div>

    </div>
  )
}
