import { validateHeaderName } from 'http';
import React, { useState, useEffect } from 'react';
import Select, { OnChangeValue, ActionMeta } from 'react-select'
import { Option, Country } from '../../types/country'

interface ISearchProps {
  countries: Country[],
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>
}

export default function Search({countries, setCountries}: ISearchProps) {

  const options: Option[] = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' }
  ]

   const [searchValue, setSearchValue] = useState('');
   const [region, setRegion] = useState<Option | any>();

   useEffect(() => {
    filterCountries(searchValue, region)
  }, [searchValue, region])


   //const [filteredCountries, setFilteredCountries] = useState(countries)

   //function onChange(val: OnChangeValue<Option, boolean>) {
   //  setRegion((val as Option[]).map(v => v.value))
   //}

  function onSelectChange(option: Option | null, actionMeta: ActionMeta<Option>) {
    if (option) {
      setRegion(option)
    } else {
      setRegion(null)
    }
  }

  function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value)
  }

  console.log(searchValue, region)

  function filterCountries(searchValue: string, region: Option | undefined) {
    let filteredCountries = [...countries]

    if (searchValue) {
      filteredCountries = filteredCountries.filter((country) => country.name.official.includes(searchValue))
    }
    
    if (region) {
      const value = region.value || '';
      filteredCountries = filteredCountries.filter((country) => country.region.includes(value))
    } 
    
    setCountries(filteredCountries)
  }

  
  return (
    <div className='serach'>
      <div className='search__container'>
        <form className='search__form'>
          <input 
          value={searchValue} 
          onChange={handleSearchInput}
          className='search__input' type="text" 
          placeholder='Search for a country...' 
          />
        </form>
        <Select 
        options={options} 
        isClearable
        value={region} 
        onChange={onSelectChange} 
        placeholder="Filter by Region" 
        isSearchable={false} 
        autoFocus={true}
        styles={{
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
