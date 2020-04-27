import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";

const Graph = ({ items }) => {
  const LineChartView =
    items.length === 0 ? null : (
      <Line
        data={{
          labels: items.map(({ date }) => date),
          datasets: [
            {
              data: items.map(({ confirmed }) => confirmed),
              label: "Confirmed",
              borderColor: "#36A2EB",
              fill: true,
            },
            {
              data: items.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "#FF6384",
              fill: true,
              backgroundColor: "rgba(205,0,0,0.5)",
            },
          ],
        }}
      />
    );

  return <div>{LineChartView}</div>;
};

Graph.propTypes = {
  items: PropTypes.array,
};
export default Graph;
