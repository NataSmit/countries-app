import React from 'react'

export default function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <h1 className='header__title'>Where in the world?</h1>
        <div className='header__theme-switcher'>
          <span className='header__theme-img'></span>
          <button className='header__theme-button'>Dark Mode</button>
        </div>
      </div>
    </header>
  )
}
