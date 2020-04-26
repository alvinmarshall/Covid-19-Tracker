import React from "react";
import BaseFooter from "./Footer/BaseFooter";
import Graphs from "./Graphs/Graphs";
import StatsView from "../view/StatsView";
import ListCountryView from "../view/ListCountryView";

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
            <StatsView />
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
            <ListCountryView />
          </div>
        </div>
        {/* Footer */}
        <BaseFooter />
      </div>
    </div>
  );
};

export default Main;
