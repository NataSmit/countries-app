import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from "../../hooks/useTheme"


export default function Header() {
  const { theme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

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
