import React from 'react'
import { Link } from 'react-router-dom'

interface IHeaderProps {
  toggleTheme: () => void,
  theme: string
}

export default function Header({toggleTheme, theme}: IHeaderProps) {
  return (
    <header className='header'>
      <div className='header__container'>
        <Link to='/' className='header__link'><h1 className='header__title'>Where in the world?</h1></Link>
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
