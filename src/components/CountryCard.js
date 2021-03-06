import React from 'react';
import { useHistory } from 'react-router-dom';

const Country = ({country}) => {
  
  const history = useHistory()

  const handleCountryDetails = (event) => {
    history.push(`/${country.name}`)
  }

  return ( 
    <div onClick={handleCountryDetails} className="w-4/5 h-72 sm:w-full bg-light rounded-md overflow-hidden shadow cursor-pointer">
      <div className="h-1/2">
        <img 
          className="object-cover w-full h-full" 
          src={country.flag} 
          alt={`flag-${country.name}`} 
          width="100%" 
          height="100%"
          loading="lazy"  
        />
      </div>
      <div className="h-1/2 p-4">
        <h2 className="font-extrabold md:text-sm">{country.name}</h2>
        <p className="font-semibold text-sm leading-6 ">Population: <span className="font-light">{Intl.NumberFormat().format(country.population)} </span></p>
        <p className="font-semibold text-sm leading-6 ">Region: <span className="font-light">{country.region || "No region"} </span></p>
        <p className="font-semibold text-sm leading-6 ">Capital: <span className="font-light">{country.capital || "No capital"} </span></p>
      </div>
    </div>
  );
}
 
export default Country;