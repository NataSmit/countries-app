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
  flags: Flag,
  cca2: string
}

type Name = {
  common: string,
  official: string,
  nativeName: NativeName
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