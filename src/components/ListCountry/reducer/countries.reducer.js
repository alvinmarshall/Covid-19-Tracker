import { GET_COUNTRIES, SELECTED_COUNTRY } from "./countries.constants";
import createReducer from "../../../app/reducer/reducerUtil";

const initialState = {
  countries: [{ name: "Global", iso2: "Gl", iso3: "none" }],
  selectedCountry: null,
};

const getCountries = (state, payload) => {
  return {
    ...state,
    countries: [...state.countries.concat(payload)],
  };
};

const getSelectedCountry = (state, payload) => {
  return { ...state, selectedCountry: payload || null };
};

export default createReducer(initialState, {
  [GET_COUNTRIES]: getCountries,
  [SELECTED_COUNTRY]: getSelectedCountry,
});
