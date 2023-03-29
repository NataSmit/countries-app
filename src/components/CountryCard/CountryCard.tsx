import React from "react";
import { Country } from "../../types/country";
import { useInView } from "react-intersection-observer";

interface ICountryCardProps {
  country: Country;
}

export default function CountryCard({ country }: ICountryCardProps) {
  // Прикольное использование inView! Как идея, еще анимацию на загрузку картинки (onLoad) добавить, чтобы плавно появлялась
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <li className="card">
      <div className="card__image" ref={ref}>
        {inView && (
          <img
            className="card__image-item"
            src={country.flags.png}
            alt={country.flags.alt}
          />
        )}
      </div>
      <div className="card__body">
        <h1 className="card__title">{country.name.official}</h1>
        {/*Можно переделать абзац в список*/}
        <p className="card__info">
          <span className="card__info card__info_bold">Population:</span>{" "}
          {country.population}
        </p>
        <p className="card__info">
          <span className="card__info card__info_bold">Region:</span>{" "}
          {country.region}
        </p>
        <p className="card__info">
          <span className="card__info card__info_bold">Capital:</span>{" "}
          {country.capital}
        </p>
      </div>
    </li>
  );
}
