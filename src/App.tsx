import React, { useEffect, useState } from "react";
import { Country } from "./types/country";
import "./App.css";
import Root from "./components/Root/Root";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Main from "./pages/Main/Main";
import Home from "./components/Home/Home";
import CountryPage from "./pages/CountryPage/CountryPage";

import { Routes, Route } from "react-router-dom";
import Preloader from "./components/Preloader/Preloader";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoding] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    if (!localStorage.allCountries) {
      try {
        setIsLoding(true);
        const data = await fetch("https://restcountries.com/v3.1/all");
        if (!data.ok) {
          setError(data.statusText)
        } else {
          const response = await data.json();
          console.log("response app", response)
          localStorage.setItem("allCountries", JSON.stringify(response));
          setCountries(response);
        }
        
      } catch (err: any) {
        setIsLoding(false);
        localStorage.removeItem("allCountries");
      } finally {
        setIsLoding(false);
      }
    } else {
      try {
        const list = JSON.parse(localStorage.getItem("allCountries") as string);
        setCountries(list);
      } catch (er) {
        console.log(er);
      }
    }
  }

  return (
    <div className="App">
      <Root>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home>
                <Search
                  countries={countries}
                  setFilteredCountries={setFilteredCountries}
                />
                <Preloader isLoading={isLoading} />
                <Main filteredCountries={filteredCountries} error={error} />
              </Home>
            }
          />

          <Route path="/:code" element={<CountryPage />} />
        </Routes>
      </Root>
    </div>
  );
}

export default App;
