import React from 'react';

const FilterByRegion = () => {
  return ( 
    <select className="bg-light text-primary px-8 py-4 outline-none rounded-lg">
      <option disabled selected hidden value="">Filter by Region</option>
      <option value="africa">Africa</option>
      <option value="america">America</option>
      <option value="asia">Asia</option>
      <option value="europa">Europe</option>
      <option value="oceania">Oceania</option>
    </select>
   );
}
 
export default FilterByRegion;