import { GET_COUNTRIES } from "./countries.constants";
import createReducer from "../../../app/reducer/reducerUtil";

const initialState = {
  countries: [],
};

const getCountries = (state, payload) => {
  return { ...state, ...payload };
};

export default createReducer(initialState, {
  [GET_COUNTRIES]: getCountries,
});
