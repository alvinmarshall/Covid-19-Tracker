import createReducer from "../../../app/reducer/reducerUtil";
import { GET_TOTAL_COUNTRY_COUNT } from "./stats.constants";

const initialState = {
  confirmed: null,
  recovered: null,
  deaths: null,
  lastUpdate: null,
};

const getTotalCountry = (state, payload) => {
  return { ...state, ...payload };
};

export default createReducer(initialState, {
  [GET_TOTAL_COUNTRY_COUNT]: getTotalCountry,
});
