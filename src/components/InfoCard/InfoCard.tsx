import React, { useEffect, useState } from "react";
import { Country } from "../../types/country";
import { useNavigate } from "react-router-dom";

interface IInfoCardProps {
  country: Country;
}

export default function InfoCard({ country }: IInfoCardProps) {
  const languagesArr = Object.values(country.languages);
  const navigate = useNavigate();
  const borders = country.borders ? country.borders.join(",") : "";
  const [borderCountries, setBorderCountries] = useState<Country[]>([]);

  useEffect(() => {
    fetchBorders();
  }, [borders]);

  async function fetchBorders() {
    try {
      const res = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${borders}`
      );
      const data = await res.json();
      setBorderCountries(data);
    } catch (err) {
      console.log(err);
    }
  }

  //country.currencies и country.name.nativeName имеют динамические свойства в объекте, поэтому
  //использую переменную


  // так у тебя отображается только первая валюта, это точно то, что ты хотела?
  const dynamicCurrency = Object.keys(country.currencies)[0];
  const currencyValue = country.currencies[dynamicCurrency].name;
  const dynamicName = Object.keys(country.name.nativeName)[0];
  const nativeNameCommon = country.name.nativeName[dynamicName].common;

  return (
    <div className="info-card__body">
      <div className="info-card__flag">
        <img
          className="info-card__flag-img"
          src={country.flags.png}
          alt={country.flags.alt}
        />
      </div>
      <div className="info-card__info">
        <h1 className="info-card__title">{country.name.common}</h1>
        <div className="info-card__details">
          <div className="info-card__facts info-card__section1">
            <p className="info-card__subtitle">
              <span className="info-card__subtitle_bold">Native Name:</span>{" "}
              {nativeNameCommon}
            </p>
            <p className="info-card__subtitle">
              <span className="info-card__subtitle_bold">Population:</span>{" "}
              {country.population}
            </p>
            <p className="info-card__subtitle">
              <span className="info-card__subtitle_bold">Region:</span>{" "}
              {country.region}
            </p>
            <p className="info-card__subtitle">
              <span className="info-card__subtitle_bold">Sub Region:</span>{" "}
              {country.subregion}
            </p>
            <p className="info-card__subtitle">
              <span className="info-card__subtitle_bold">Capital:</span>{" "}
              {country.capital}
            </p>
          </div>
          <div className="info-card__facts info-card__section2">
            <p className="info-card__subtitle">
              <span className="info-card__subtitle_bold">
                Top Level Domain:
              </span>{" "}
              {country.tld}
            </p>
            <p className="info-card__subtitle">
              <span className="info-card__subtitle_bold">Currencies:</span>{" "}
              {currencyValue}
            </p>
            <p className="info-card__subtitle">
              <span className="info-card__subtitle_bold">Languages:</span>
              {languagesArr.map((l) => (
                <span> {l}, </span>
              ))}
            </p>
          </div>
        </div>
        <div className="info-card__border">
          <p className="info-card__subtitle">
            <span className="info-card__subtitle_bold">Border Countries:</span>
          </p>
          <div className="info-card__border-list">
            {borderCountries.length > 0
              ? borderCountries.map((c) => (
                  <div
                    className="info-card__border-country"
                    onClick={() => navigate(`/${c.cca2}`)}
                  >
                    {c.name.common}
                  </div>
                ))
              : "no borders"}
          </div>
        </div>
      </div>
    </div>
  );
}
