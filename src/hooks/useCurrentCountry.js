import { useSelector } from "react-redux";

const useCurrentCountry = () => {
  const currentCountry = useSelector((state) => state.country.selectedCountry);
  const confirmed = useSelector((state) => state.stats.confirmed);
  const recovered = useSelector((state) => state.stats.recovered);
  const deaths = useSelector((state) => state.stats.deaths);
  return { currentCountry, confirmed, recovered, deaths };
};

export default useCurrentCountry;
