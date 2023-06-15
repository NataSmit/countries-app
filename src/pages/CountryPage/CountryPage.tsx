import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Country } from "../../types/country";
import InfoCard from "../../components/InfoCard/InfoCard";
import Preloader from "../../components/Preloader/Preloader";

export default function CountryPge() {
  const navigate = useNavigate();
  const { code } = useParams() as { code: string };
  const [country, setCountry] = useState<Country>();
  const [isLoading, setIsLoding] = useState(false);
  const [error, setError] = useState("");

  async function fetchCountry(val: string) {
    try {
      setIsLoding(true);
      const res = await fetch(`https://restcountries.com/v3.1/alpha/${val}`);
      if (!res.ok) {
        setError(res.statusText)
      } else {
        const data = await res.json();
        setCountry(data[0]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoding(false);
    }
  }

  useEffect(() => {
    fetchCountry(code);
  }, [code]);

  if (isLoading) {
    return <Preloader isLoading={isLoading} />;
  }
  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <div className="country-page">
      <div className="country-page__container">
        <div className="country-page__btn-container">
          <button className="country-page__btn" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
        <div className="country-page__body">
          {country?.name.common && (
            <InfoCard country={country} key={country.name.common} />
          )}
        </div>
      </div>
    </div>
  );
}
