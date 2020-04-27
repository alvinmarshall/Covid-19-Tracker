import React from "react";
import PropTypes from "prop-types";
import CountUp from "react-countup";

const StatsCard = ({ count, icon, gradient, title, date }) => {
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
              <span className="h2 font-weight-bold mb-0">
                <CountUp start={0} end={count} duration={2.5} separator="," />
              </span>
            </div>
            <div className="col-auto">
              <div className={gradient}>
                <i className={icon} />
              </div>
            </div>
          </div>
          <p className="mt-3 mb-0 text-sm">
            <span className="text-success mr-2">
              <i className="fa fa-arrow-up" /> 
            </span>
            <span className="text-nowrap">Since {new Date(date).toDateString()}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  icon: PropTypes.string,
  gradient: PropTypes.string,
  date: PropTypes.string,
};

StatsCard.defaultProps = {
  count: 0,
  icon: "ni ni-chart-pie-35",
  gradient:
    "icon icon-shape bg-gradient-orange text-white rounded-circle shadow",
};
export default StatsCard;
