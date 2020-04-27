import React from "react";
import ListCountry from "../components/ListCountry/ListCountry";
import useCountries from "../hooks/useCountries";

const ListCountryView = () => {
  const { countries, onCountryClick } = useCountries();

  return (
    <div>
      <ListCountry countries={countries} handleClickAction={onCountryClick}  />
    </div>
  );
};

export default ListCountryView;
