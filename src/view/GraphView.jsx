import React from "react";
import GraphLayout from "../components/Graphs/GraphLayout";
import useGlobalTotal from "../hooks/useGlobalTotal";
import useCurrentCountry from "../hooks/useCurrentCountry";

const GraphView = () => {
  const { globalData } = useGlobalTotal();
  const { currentCountry, confirmed, deaths, recovered } = useCurrentCountry();
  const selectedCountry = {
    currentCountry,
    confirmed,
    deaths,
    recovered,
  };

  return <GraphLayout items={globalData} selectedCountry={selectedCountry} />;
};

export default GraphView;
