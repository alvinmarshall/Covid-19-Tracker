import createReducer from "../../../app/reducer/reducerUtil";
import { GET_TOTAL_COUNT } from "./stats.constants";

const initialState = {
  confirmed: null,
  recovered: null,
  deaths: null,
};

const getTotalCount = (state, payload) => {
  return { ...state, ...payload };
};

export default createReducer(initialState, {
  [GET_TOTAL_COUNT]: getTotalCount,
});
