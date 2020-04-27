import { toastr } from "react-redux-toastr";
import { getDailyTotalCountAsync } from "../../../app/api";
import { GET_GLOBAL_DAILY } from "./graph.constants";

export const getGlobalTotalAction = () => {
  return async (dispatch) => {
    try {
      const data = await getDailyTotalCountAsync();
      dispatch({
        type: GET_GLOBAL_DAILY,
        payload: data,
      });
    } catch (err) {
      console.error(err);
      toastr.error("oops", "something went wrong");
    }
  };
};
