import { toastr } from "react-redux-toastr";

import { getCountriesAsync } from "../../../app/api";
import { GET_COUNTRIES, SELECTED_COUNTRY } from "./countries.constants";

export const getCountriesAction = () => {
  return async (dispatch) => {
    try {
      const data = await getCountriesAsync();
      dispatch({
        type: GET_COUNTRIES,
        payload: data,
      });
    } catch (err) {
      console.error(err);
      toastr.error("Oops", "something went wrong");
    }
  };
};

export const selectCountryAction = (payload) => {
  return async (dispatch) => {
    dispatch({
      type: SELECTED_COUNTRY,
      payload,
    });
  };
};
