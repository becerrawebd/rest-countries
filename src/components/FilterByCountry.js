import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"

const FilterByCountry = () => {
  return ( 
    <div className="mr-4 inline-flex items-center bg-light px-8 py-4 rounded-lg">
      <FontAwesomeIcon icon={faSearch} className="text-primary mr-4"/>
      <input className="bg-transparent outline-none placeholder-primary text-primary" type="text" placeholder="Search for a country..."/>
    </div>
  );
}
 
export default FilterByCountry;