import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import { Country } from "../../types/country";
import { Link } from "react-router-dom";

interface IMainProps {
  filteredCountries: Country[];
}

export default function Main({ filteredCountries }: IMainProps) {
  console.log("filteredCountries1", filteredCountries);

  if (filteredCountries.length === 0) {
    try {
      filteredCountries = JSON.parse(
        localStorage.getItem("allCountries") as string
      );
    } catch (err) {
      console.log("parse err", err);
    }
  }

  console.log("filteredCountries2", filteredCountries);

  return (
    <main className="main">
      <ul className="main__container">
        {filteredCountries && filteredCountries.length > 0 ?
          filteredCountries.map((country) => (
            <Link
              className="main__country-link"
              to={`/${country.cca2}`}
              key={country.name.common}
            >
              <CountryCard country={country} />
            </Link>
          ))
          :<p className="main__error"> Something went wrong</p>
        }
      </ul>
    </main>
  );
}
