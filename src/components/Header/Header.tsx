import React from 'react'

interface IHeaderProps {
  toggleTheme: () => void,
  theme: string
}

export default function Header({toggleTheme, theme}: IHeaderProps) {
  return (
    <header className='header'>
      <div className='header__container'>
        <h1 className='header__title'>Where in the world?</h1>
        <div className='header__theme-switcher'>
          <span className='header__theme-img'></span>
          <button className='header__theme-button' onClick={toggleTheme} >
            {theme === 'light' ?  'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </header>
  )
}
