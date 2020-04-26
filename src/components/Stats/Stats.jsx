import React from "react";
import PropTypes from "prop-types";
import StatsCard from "./StatsCard";

const Stats = ({ confirmed, recovered, deaths }) => {
  return (
    <div className="row">
      <StatsCard
        title="Confirmed Cases"
        icon="ni ni-atom"
        count={(confirmed && confirmed.value) || 0}
        gradient="icon icon-shape bg-gradient-red text-white rounded-circle shadow"
      />

      <StatsCard
        title="Recovered"
        icon="ni ni-chart-pie-35"
        count={(recovered && recovered.value) || 0}
        gradient="icon icon-shape bg-gradient-orange text-white rounded-circle shadow"
      />

      <StatsCard
        title="Deaths"
        icon="ni ni-ambulance"
        count={(deaths && deaths.value) || 0}
        gradient="icon icon-shape bg-gradient-blue text-white rounded-circle shadow"
      />
    </div>
  );
};

Stats.propTypes = {
  confirmed: PropTypes.object,
  recovered: PropTypes.object,
  deaths: PropTypes.object,
};
export default Stats;
