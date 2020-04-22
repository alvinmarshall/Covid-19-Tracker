import React from "react";

const Graphs = () => {
  return (
    <div className="card bg-default">
      <div className="card-header bg-transparent">
        <div className="row align-items-center">
          <div className="col">
            <h6 className="text-light text-uppercase ls-1 mb-1">Overview</h6>
            <h5 className="h3 text-white mb-0">Sales value</h5>
          </div>
          <div className="col">
            <ul className="nav nav-pills justify-content-end">
              <li className="nav-item mr-2 mr-md-0">
                <a
                  href="##"
                  className="nav-link py-2 px-3 active"
                  data-toggle="tab"
                >
                  <span className="d-none d-md-block">Month</span>
                  <span className="d-md-none">M</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="##" className="nav-link py-2 px-3" data-toggle="tab">
                  <span className="d-none d-md-block">Week</span>
                  <span className="d-md-none">W</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card-body">
        {/* Chart */}
        <div className="chart">
          {/* Chart wrapper */}
          <canvas id="chart-sales-dark" className="chart-canvas" />
        </div>
      </div>
    </div>
  );
};

export default Graphs;
