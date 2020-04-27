import { useDispatch } from "react-redux";
import { selectCountryAction } from "../components/ListCountry/reducer/countries.action";

const useSearchCountry = () => {
  const dispatch = useDispatch();
  const onSearchCountry = (payload) => dispatch(selectCountryAction(payload));
  return { onSearchCountry };
};

export default useSearchCountry;
