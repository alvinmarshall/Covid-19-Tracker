import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCountryCountAction } from "../components/Stats/reducer/stats.action";

const useTotalCount = () => {
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country.selectedCountry);
  const confirmed = useSelector((state) => state.stats.confirmed);
  const recovered = useSelector((state) => state.stats.recovered);
  const deaths = useSelector((state) => state.stats.deaths);
  const lastUpdate = useSelector((state) => state.stats.lastUpdate);

  useEffect(() => {
    const loadData = () => dispatch(getTotalCountryCountAction(country));
    loadData();
  }, [dispatch, country]);

  return { confirmed, recovered, deaths, lastUpdate };
};

export default useTotalCount;
