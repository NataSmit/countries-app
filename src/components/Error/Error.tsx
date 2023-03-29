import React from 'react';

interface ErrorProps {
  errorMessage: {
    message: string,
    _links: object
  }
}

export default function Error({errorMessage}: ErrorProps) {
  return (
    <div className='error-page'>
      <div className='error-page__container'>
        <p className='error-page__text'>Error occured: {errorMessage.message}</p>
        {/*Было б классно, если тут была кнопка, делающая перезапрос. Но это уже сложновато немного )*/}
        <p className='error-page__text'>Try again</p>
      </div>
    </div>
  )
}
