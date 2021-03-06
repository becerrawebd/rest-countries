import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { COUNTRY_DATA_URL } from "../api";
import CountryFlag from "./CountryFlag"
import CountryInfo from "./CountryInfo"
import useFetch from "../hooks/useFetch"

const CountryPage = () => {
  const { countryName } = useParams();
  const URL = `${COUNTRY_DATA_URL}/${countryName}`

  const [country] = useFetch(URL, (data) => 
    data.map(country => {
      console.log(country)
      return country
    })
  )

  /*useEffect(() => {
    const fields = [
      "flag",
      "name",
      "nativeName",
      "population",
      "region",
      "subregion",
      "capital",
      "topLevelDomain",
      "currencies",
      "languages",
      "borders",
    ];
    console.log('render CountryDetails')
    fetch(`${COUNTRY_DATA_URL}/${countryName}?fields=${fields.join(";")}`)
      .then((response) => response.json())
      .then((data) => setCountry(data[0]));
  }, [countryName]); */

  return (
    <section className="md:flex md:gap-x-8 lg:gap-x-24">
      <CountryFlag flag={country?.flag}/>
      <CountryInfo 
        {...country}
      />
    </section>
  );
};

export default CountryPage;
