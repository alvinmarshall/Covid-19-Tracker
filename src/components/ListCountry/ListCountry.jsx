import React from "react";

const ListCountry = () => {
  return (
    <div className="card">
      <div className="card-header bg-transparent">
        <div className="row align-items-center">
          <div className="col">
            <h6 className="text-uppercase text-muted ls-1 mb-1">Countries</h6>
            <h5 className="h3 mb-0">Available</h5>
          </div>
        </div>
      </div>
      <div className="card-body">
        {/* Chart */}
        <div className="chart">
          <canvas id="chart-bars" className="chart-canvas" />
        </div>
      </div>
    </div>
  );
};

export default ListCountry;
