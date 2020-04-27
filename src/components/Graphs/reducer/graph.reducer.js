import createReducer from "../../../app/reducer/reducerUtil";
import { GET_GLOBAL_DAILY } from "./graph.constants";

const initialState = {
  global: [],
};

const getGlobalDaily = (state, payload) => {
  return { ...state, global: payload };
};

export default createReducer(initialState, {
  [GET_GLOBAL_DAILY]: getGlobalDaily,
});
