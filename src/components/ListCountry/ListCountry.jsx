import React, { useState } from "react";
import PropTypes from "prop-types";
import { Typeahead } from "react-bootstrap-typeahead";
import ListContent from "./ListContent";
import usePagination from "../../hooks/usePagination";
import useSearchCountry from "../../hooks/useSearchCountry";

const ListCountry = ({ countries, handleClickAction }) => {
  const { currentData, next, currentPage, prev } = usePagination(countries, 5);
  const [searchValue, setSearchValue] = useState("");
  const { onSearchCountry } = useSearchCountry();
  const newCountry = currentData();

  const handleFormSubmit = (evt) => {
    if (evt.keyCode === 13) {
      if (searchValue.length) {
        const value = searchValue[0].name;
        onSearchCountry(value);
      }
    }
  };

  return (
    <div className="card">
      <div className="card-header bg-transparent">
        <div className="row align-items-center">
          <div className="col">
            <h6 className="text-uppercase text-muted ls-1 mb-1">Countries</h6>
            <h5 className="h3 mb-0">Available</h5>
            <form>
              <div className="form-group mb-0">
                <div className="input-group input-group-lg input-group-flush">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <span className="fas fa-search" />
                    </div>
                  </div>
                  <div className="form-control">
                    <Typeahead
                      onKeyDown={handleFormSubmit}
                      id="country_opt"
                      labelKey={(option) => `${option.name}`}
                      options={countries}
                      onChange={(selected) => {
                        setSearchValue((searchValue) => selected);
                      }}
                      selected={searchValue}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="card-body">
        {/* List */}
        {newCountry &&
          newCountry.map((country, index) => (
            <ListContent
              key={`${country.iso2}_${index}`}
              country={country}
              OnCountryClick={handleClickAction}
            />
          ))}
      </div>

      <div className="card-footer">
        <nav>
          <ul className="pagination justify-content-end mb-0">
            <li
              className={`page-item ${currentPage > 1 ? "enable" : "disabled"}`}
            >
              <a
                className="page-link"
                href="#!"
                tabIndex={-1}
                onClick={() => prev()}
              >
                <i className="fas fa-angle-left" />
                <span className="sr-only">Previous</span>
              </a>
            </li>
            <li className="page-item active">
              <a id={1} className="page-link" href="#!">
                {currentPage}
              </a>
            </li>

            <li className="page-item">
              <a className="page-link" href="#!" onClick={() => next()}>
                <i className="fas fa-angle-right" />
                <span className="sr-only">Next</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

ListCountry.propTypes = {
  countries: PropTypes.array.isRequired,
  handleClickAction: PropTypes.func.isRequired,
};

export default ListCountry;
