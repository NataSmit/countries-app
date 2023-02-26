export type Country = {
  name: Name,
  official: string,
  population: number,
  region: string,
  capital: string | string[],
  subregion: string,
  currencies: string | object,
  tld: string | string[],
  languages: string | object,
  borders: string[],
  flags: Flag
}

type Name = {
  common: string,
  official: string,
  nativeName: object
}

type NativeName = {
  
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