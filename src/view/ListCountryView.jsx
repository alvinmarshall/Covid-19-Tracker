import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountriesAction } from "../components/ListCountry/reducer/countries.action";
import ListCountry from "../components/ListCountry/ListCountry";

const ListCountryView = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.countries);

  const handleClickAction = (payload) => {
    console.log("payload", payload);
  };
  useEffect(() => {
    const loadCountries = () => dispatch(getCountriesAction());
    loadCountries();
  }, [dispatch]);
  return (
    <div>
      <ListCountry
        countries={countries}
        handleClickAction={handleClickAction}
      />
    </div>
  );
};

export default ListCountryView;
