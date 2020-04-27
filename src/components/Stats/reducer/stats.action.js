import { toastr } from "react-redux-toastr";

import {
  getTotalCountAsync,
  getTotalCountryCountAsync,
} from "../../../app/api";

import { GET_TOTAL_COUNT, GET_TOTAL_COUNTRY_COUNT } from "./stats.constants";

export const getTotalCountAction = () => {
  return async (dispatch) => {
    try {
      const data = await getTotalCountAsync();
      dispatch({
        type: GET_TOTAL_COUNT,
        payload: data,
      });
    } catch (err) {
      toastr.error("oops", "Sorry something went wrong");
      console.error(err);
    }
  };
};

export const getTotalCountryCountAction = (payload) => {
  return async (dispatch) => {
    try {
      const data = await getTotalCountryCountAsync(payload);
      dispatch({
        type: GET_TOTAL_COUNTRY_COUNT,
        payload: data,
      });
    } catch (err) {
      toastr.error("oops", "Sorry something went wrong");
      console.error(err);
    }
  };
};
