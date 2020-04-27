import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountriesAction,
  selectCountryAction,
} from "../components/ListCountry/reducer/countries.action";

const useCountries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.countries);

  const onCountryClick = (payload) => {
    if (payload && payload === "Global") payload = null;
    dispatch(selectCountryAction(payload));
  };

  useEffect(() => {
    const loadData = () => dispatch(getCountriesAction());
    loadData();
  }, [dispatch]);

  return { countries, onCountryClick };
};

export default useCountries;
