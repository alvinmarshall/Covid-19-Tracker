import React from "react";
import PropTypes from "prop-types";

const StatsCard = ({ count, icon, gradient, title }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div className="card card-stats">
        {/* Card body */}
        <div className="card-body">
          <div className="row">
            <div className="col">
              <h5 className="card-title text-uppercase text-muted mb-0">
                {title}
              </h5>
              <span className="h2 font-weight-bold mb-0">{count}</span>
            </div>
            <div className="col-auto">
              <div className={gradient}>
                <i className={icon} />
              </div>
            </div>
          </div>
          <p className="mt-3 mb-0 text-sm">
            <span className="text-success mr-2">
              <i className="fa fa-arrow-up" /> 3.48%
            </span>
            <span className="text-nowrap">Since last month</span>
          </p>
        </div>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  icon: PropTypes.string,
  gradient: PropTypes.string,
};

StatsCard.defaultProps = {
  count: "0",
  icon: "ni ni-chart-pie-35",
  gradient:
    "icon icon-shape bg-gradient-orange text-white rounded-circle shadow",
};
export default StatsCard;
