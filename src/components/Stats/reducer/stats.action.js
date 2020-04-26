import { toastr } from "react-redux-toastr";

import { getTotalCountAsync } from "../../../app/api";

import { GET_TOTAL_COUNT } from "./stats.constants";

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
