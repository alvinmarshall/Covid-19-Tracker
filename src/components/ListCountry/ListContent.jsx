import React from "react";
import PropTypes from "prop-types";
const ListContent = ({ country, OnCountryClick }) => {
  const handleCountryClick = (payload) => {
    OnCountryClick(payload.name);
  };

  return (
    <div className="list-group list-group-flush">
      <a
        href="#!"
        onClick={() => handleCountryClick(country)}
        className="list-group-item list-group-item-action flex-column align-items-start py-4 px-4"
      >
        <div className="row align-items-center">
          <div className="col ">
            <h4 className="mb-0">{country.name}</h4>
            <span className="text-success">●</span>
            <small>{country.iso2}</small>
          </div>
          <div className="col-auto">
            <button type="button" className="btn btn-sm btn-primary">
              View
            </button>
          </div>
        </div>
      </a>
    </div>
  );
};

ListContent.propTypes = {
  country: PropTypes.object.isRequired,
  OnCountryClick: PropTypes.func,
};
export default ListContent;
