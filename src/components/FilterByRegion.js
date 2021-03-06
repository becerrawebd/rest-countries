import React from 'react';

const FilterByRegion = ({setRegion}) => {

  const handleSelectRegion = (event) => {
    const { selectedIndex }= event.target.options
    const region = event.target.options[selectedIndex].value
    setRegion(region)
  }

  return ( 
    <select onChange={handleSelectRegion} defaultValue="Filter by Region" className="w-2/3 md:w-auto h-16 bg-light text-primary px-8 py-4 outline-none rounded-lg">
      <option disabled hidden value="">Filter by Region</option>
      <option value="">All regions</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
   );
}
 
export default FilterByRegion;