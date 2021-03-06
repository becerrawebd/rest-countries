import React from 'react';

const CountryFlag = ({flag}) => {
  return ( 
    <div className="w-100 min-h-72 h-72 md:h-96 md:min-h-96 md:w-1/2 lg:w-2/5 flex-shrink-0">
        <img
          className="object-cover w-full h-full"
          src={flag}
          alt="country-flag-img"
        />
    </div>
   );
}
 
export default CountryFlag;