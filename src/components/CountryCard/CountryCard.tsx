import React from 'react'
;

export default function CountryCard() {
  return (
    <div className='card'>
      <div className='card__image'>
        <img  />
      </div>
      <div className='card__body'>
        <h1 className='card__title'>Germany</h1>
        <p className='card__info'><span className='card__info-bold'>Population:</span> 81 770 900</p>
        <p className='card__info'><span className='card__info-bold'>Region:</span> Europa</p>
        <p className='card__info'><span className='card__info-bold'>Capital:</span> Berlin</p>
      </div>

    </div>
  )
}

