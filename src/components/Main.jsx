import React from "react";
import BaseFooter from "./Footer/BaseFooter";
import StatsCard from "./Stats/StatsCard";
import ListCountry from "./ListCountry/ListCountry";
import Graphs from "./Graphs/Graphs";

const Main = () => {
  return (
    <div className="main-content" id="panel">
      {/* Topnav */}

      <nav className="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
        <div className="container-fluid"></div>
      </nav>
      {/* Header */}
      <div className="header bg-primary pb-6">
        <div className="container-fluid">
          <div className="header-body">
            <div className="row align-items-center py-4">
              <div className="col-lg-6 col-7">
                <h6 className="h2 text-white d-inline-block mb-0">Default</h6>
              </div>
            </div>
            {/* Card stats */}
            <div className="row">
              <StatsCard
                title="Infected"
                icon="ni ni-atom"
                gradient="icon icon-shape bg-gradient-red text-white rounded-circle shadow"
              />

              <StatsCard
                title="Recovered"
                icon="ni ni-chart-pie-35"
                gradient="icon icon-shape bg-gradient-orange text-white rounded-circle shadow"
              />

              <StatsCard
                title="Deaths"
                icon="ni ni-ambulance"
                gradient="icon icon-shape bg-gradient-blue text-white rounded-circle shadow"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Page content */}
      <div className="container-fluid mt--6">
        <div className="row">
          <div className="col-xl-8">
            <Graphs />
          </div>
          <div className="col-xl-4">
            <ListCountry />
          </div>
        </div>
        {/* Footer */}
        <BaseFooter />
      </div>
    </div>
  );
};

export default Main;
