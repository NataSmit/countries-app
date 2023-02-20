import React from 'react';
import Select from 'react-select'

export default function Search() {
  const options = [
    { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europa', label: 'Europa' },
  { value: 'Oceania', label: 'Oceania' }
  ]

  return (
    <div className='serach'>
      <div className='search__container'>
        <form className='search__form'>
          <input className='search__input' type="text" placeholder='Search for a country...' />
        </form>
        <Select options={options} placeholder="Filter by Region"  styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? 'grey' : 'transparent',
            boxShadow: '0 0 12px -5px rgb(0 0 0 / 20%)',
            padding: '3px 0',
            minWidth: '150px'
          }),
        }}/>
      </div>
    </div>
  )
}
