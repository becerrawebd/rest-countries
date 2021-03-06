import React from 'react';
import FilterByCountry from "./FilterByCountry";
import FilterByRegion from "./FilterByRegion";

const FilterGroup = ({country,setCountry,setRegion}) => {
  return ( 
    <section className="flex flex-col md:flex-row md:justify-between gap-y-8 mb-8">
        <FilterByCountry country={country} setCountry={setCountry} />
        <FilterByRegion setRegion={setRegion} />
    </section>
   );
}
 
export default FilterGroup;