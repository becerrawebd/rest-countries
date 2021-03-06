import React from 'react';
import CountryCard from "./CountryCard"

const ListOfCountries = ({countries,countryName,regionName}) => {

  return (  
    <section className="flex flex-col gap-y-8 items-center p-y-8 sm:grid sm:grid-cols-2 sm:gap-8 md:grid-cols-3 lg:grid-cols-4">
      {
        countries
          ?.filter(country => 
            country.name.includes(countryName) &&
            (
            country.region === regionName ||
            regionName === ""
            )
          )
          .map(country => <CountryCard country={country} key={country.name}/>)
      }
    </section>
  );
}
 
export default ListOfCountries;