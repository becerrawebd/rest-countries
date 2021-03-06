import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { COUNTRIES_BY_CODES_URL } from "../api";

const CountryInfo = ({
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies,
  languages,
  borders = [],
}) => {
  const [borderNames, setBorderNames] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const borderCodes = borders.join(";");
    if (borders.length !== 0) {
      fetch(`${COUNTRIES_BY_CODES_URL}?codes=${borderCodes}&fields=name`)
        .then((response) => response.json())
        .then((data) => setBorderNames(data));
    }
  }, [borders]);

  const handleShowBorderCountry = (event) => {
    const { name } = event.target;
    history.push(name);
  };

  return (
    <div className="py-4 md:py-0">
      <h2 className="font-semibold text-xl my-4">{name}</h2>
      <div className="md:flex md:gap-x-8">
        <div>
          <p className="font-semibold leading-8">
            Native Name: <span className="font-light">{nativeName}</span>
          </p>
          <p className="font-semibold leading-8">
            Population:{" "}
            <span className="font-light">
              {Intl.NumberFormat().format(population)}
            </span>
          </p>
          <p className="font-semibold leading-8">
            Region: <span className="font-light">{region}</span>
          </p>
          <p className="font-semibold leading-8">
            Sub Region: <span className="font-light">{subregion}</span>
          </p>
          <p className="font-semibold leading-8">
            Capital: <span className="font-light">{capital}</span>
          </p>
        </div>
        <div>
          <p className="font-semibold leading-8">
            Top Level Domain:{" "}
            <span className="font-light">{topLevelDomain}</span>
          </p>
          <p className="font-semibold leading-8">
            Currencies:{" "}
            <span className="font-light">
              {currencies
                ?.map((singleCurrency) => singleCurrency.name)
                .join(", ")}
            </span>
          </p>
          <p className="font-semibold leading-8">
            Languages:{" "}
            <span className="font-light">
              {languages?.map((singleLang) => singleLang.name).join(", ")}
            </span>
          </p>
        </div>
      </div>
      <div className="py-8">
        <h3 className="font-semibold md:flex-shrink-0">Border Countries:</h3>
        <div className="flex flex-wrap gap-y-2 gap-x-2 flex-grow py-4">
          {borderNames.map((singleBorderName) => (
            <button
              name={singleBorderName.name}
              onClick={handleShowBorderCountry}
              className="bg-light px-4 py-2 rounded text-base shadow outline-none border-none"
              key={singleBorderName.name}
            >
              {singleBorderName.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
