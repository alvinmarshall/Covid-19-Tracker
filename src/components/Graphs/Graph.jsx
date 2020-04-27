import React from "react";
import PropTypes from "prop-types";
import { Line, Bar } from "react-chartjs-2";

const Graph = ({
  items,
  subItem: { confirmed, recovered, deaths, currentCountry },
}) => {
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

  const BarChartView = recovered ? (
    <Bar
      data={{
        labels: ["Confirmed Cases", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            data: [confirmed.value, recovered.value, deaths.value],
            backgroundColor: [
              "rgba(5, 155, 255,0.5)",
              "rgba(34, 206, 206,0.5)",
              "rgba(255, 61, 103,0.5)",
            ],
          },
        ],
      }}
      options={{
        title: {
          display: true,
          text: `Country: ${currentCountry}`,
          fontColor: "white",
        },
        legend: { display: false },
      }}
    />
  ) : null;

  return <div>{currentCountry ? BarChartView : LineChartView}</div>;
};

Graph.propTypes = {
  items: PropTypes.array,
  subItem: PropTypes.object,
  currentCountry: PropTypes.string,
};
export default Graph;
