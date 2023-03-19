export type Country = {
  name: Name,
  official: string,
  population: number,
  region: string,
  capital: string | string[],
  subregion: string,
  currencies: CurrencyObj,
  tld: string | string[],
  languages: Language,
  borders: string[],
  flags: Flag,
  cca2: string
}

type Name = {
  common: string,
  official: string,
  nativeName: NativeNameLang
}

type NativeNameLang = {
  [key: string]: NativeName
  
}

type NativeName = {
  official: string,
  common: string
}

type Flag = {
  png: string,
  svg: string,
  alt: string
}

export type Option = {
  value: string,
  label: string
}

type Language = {
  [key: string]: string
}

type Currency = {
  name: string,
  symbol: string
}

interface CurrencyObj  {
  [key: string]: Currency
}

