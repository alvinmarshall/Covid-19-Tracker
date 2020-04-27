import React from "react";
import Stats from "../components/Stats/Stats";
import useTotalCount from "../hooks/useTotalCount";

const StatsView = () => {
  const { confirmed, recovered, deaths, lastUpdate } = useTotalCount();

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
