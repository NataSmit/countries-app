import React, {useState, useEffect, useLayoutEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import { Country } from '../../types/country';
import InfoCard from '../InfoCard/InfoCard';



export default function CountryPge() {
  const navigate = useNavigate()
  const { code } = useParams() as {code: string}
  console.log('code', code)
  const [country, setCountry] = useState<Country>()
  
  async function fetchCountry(val: string) {
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${val}`)
    const data = await res.json()
   
    setCountry(data[0])
  }

  useEffect(() => {
    fetchCountry(code)
  }, [code])

  console.log('country', country)



  return (
    <div className='country-page'>
      <div className='country-page__container'>
        <div className='country-page__btn-container'>
          <button className='country-page__btn' onClick={()=> navigate(-1)}>Back</button>
        </div>
        <div className='country-page__body'>
          {country?.name.common && < InfoCard country={country} />}
        </div>
        
      </div>

    </div>
  )
}
