import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCountAction } from "../components/Stats/reducer/stats.action";
import Stats from "../components/Stats/Stats";

const StatsView = () => {
  const dispatch = useDispatch();

  const confirmed = useSelector((state) => state.stats.confirmed);
  const recovered = useSelector((state) => state.stats.recovered);
  const deaths = useSelector((state) => state.stats.deaths);
  const lastUpdate = useSelector((state) => state.stats.lastUpdate);

  useEffect(() => {
    const handleTotalCounts = () => {
      dispatch(getTotalCountAction());
    };
    handleTotalCounts();
  }, [dispatch]);
  return (
    <Stats
      confirmed={confirmed}
      recovered={recovered}
      deaths={deaths}
      lastUpdate={lastUpdate}
    />
  );
};

export default StatsView;
