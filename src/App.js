import React, { useState } from "react";
import Header from "./components/Header";
import FilterGroup from "./components/FilterGroup";
import BackButton from "./components/BackButton";
import CountryPage from "./components/CountryPage";
import ListOfCountries from "./components/ListOfCountries";
import Spin from "./components/Spin"
import { BrowserRouter as Router, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import { COUNTRIES_URL } from "./api";

function App() {
  /*
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  */

  const [countries, loading] = useFetch(COUNTRIES_URL, (data) =>
    data.map((country) => country)
  );
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  return (
    <div className="App bg-dark">
      <Router>
        <Header />
        <main className="px-4 py-8 lg:px-24">
          <Route exact path="/">
            <FilterGroup
              country={country}
              setCountry={setCountry}
              setRegion={setRegion}
            />
            {loading ? (
              <Spin />
            ) : (
              <ListOfCountries
                countries={countries}
                countryName={country}
                regionName={region}
              />
            )}
          </Route>
          <Route path="/:countryName">
            <BackButton />
            <CountryPage />
          </Route>
        </main>
      </Router>
    </div>
  );
}

export default App;
