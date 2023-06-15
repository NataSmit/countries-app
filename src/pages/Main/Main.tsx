import React from "react";
import CountryCard from "../../components/CountryCard/CountryCard";
import { Country } from "../../types/country";
import { Link } from "react-router-dom";

interface IMainProps {
  filteredCountries: Country[];
  error: string;
}

export default function Main({ filteredCountries, error }: IMainProps) {

  if (filteredCountries.length === 0) {
    try {
      filteredCountries = JSON.parse(
        localStorage.getItem("allCountries") as string
      );
    } catch (err) {
      console.log("parse err", err);
    }
  }


  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <main className="main">
      <ul className="main__container">
        {filteredCountries &&
          filteredCountries.length > 0 &&
          filteredCountries.map((country) => (
            <Link
              className="main__country-link"
              to={`/${country.cca2}`}
              key={country.name.common}
            >
              <CountryCard country={country} />
            </Link>
          ))}
      </ul>
    </main>
  );
}
