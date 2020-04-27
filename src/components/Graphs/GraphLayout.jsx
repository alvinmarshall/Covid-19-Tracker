import React from "react";
import PropTypes from "prop-types";
import Graph from "./Graph";

const GraphLayout = ({ items, selectedCountry }) => {
  const Country = selectedCountry.currentCountry;
  const isGlobalActive = Country ? "" : "active";
  const isCountryActive = isGlobalActive === "active" ? "" : "active";
  return (
    <div className="card bg-default">
      <div className="card-header bg-transparent">
        <div className="row align-items-center">
          <div className="col">
            <h6 className="text-light text-uppercase ls-1 mb-1">Overview</h6>
            <h5 className="h3 text-white mb-0">Graph</h5>
          </div>
          <div className="col">
            <ul className="nav nav-pills justify-content-end">
              <li className="nav-item mr-2 mr-md-0">
                <a
                  href="##"
                  className={`nav-link py-2 px-3 ${isGlobalActive}`}
                  data-toggle="tab"
                >
                  <span className="d-none d-md-block">Global</span>
                  <span className="d-md-none">G</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="##"
                  className={`nav-link py-2 px-3 ${isCountryActive}`}
                  data-toggle="tab"
                >
                  <span className="d-none d-md-block">
                    {Country === null ? "Country" : Country}
                  </span>
                  <span className="d-md-none">C</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-body">
        {/* Chart */}
        <Graph items={items} subItem={selectedCountry} />
      </div>
    </div>
  );
};

GraphLayout.propTypes = {
  items: PropTypes.array,
  selectedCountry: PropTypes.object,
};
export default GraphLayout;
