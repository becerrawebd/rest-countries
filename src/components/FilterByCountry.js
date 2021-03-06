import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"

const FilterByCountry = ({country,setCountry}) => {

  const handleSearchCountry = (event) => {
    setCountry(event.target.value)
  }

  return ( 
    <div className="w-full md:w-auto h-16 inline-flex items-center bg-light px-8 py-4 rounded-lg">
      <FontAwesomeIcon icon={faSearch} className="text-primary mr-4"/>
      <input onChange={handleSearchCountry} value={country}
        className=" bg-transparent outline-none placeholder-gray text-primary" type="text" placeholder="Search for a country..."
      />
    </div>
  );
}
 
export default FilterByCountry;