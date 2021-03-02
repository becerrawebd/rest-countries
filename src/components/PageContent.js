import React from 'react';
import FilterByCountry from './FilterByCountry';
import FilterByRegion from './FilterByRegion';

const PageContent = () => {
  return (  
    <main>
      <section>
        <FilterByCountry />
        <FilterByRegion />
      </section>
      <section>
        <ListOfCountries />
      </section>
    </main>
  );
}
 
export default PageContent;