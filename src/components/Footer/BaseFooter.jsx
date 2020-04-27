import React from "react";

const BaseFooter = () => {
  return (
    <footer className="footer pt-0">
      <div className="row align-items-center justify-content-lg-between">
        <div className="col-lg-6">
          <div className="copyright text-center  text-lg-left  text-muted">
            © 2020{" "}
            <a
              href="https://www.creative-tim.com"
              className="font-weight-bold ml-1"
            >
              Covid-19-Tracker
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <ul className="nav nav-footer justify-content-center justify-content-lg-end">
            <li className="nav-item">
              <a href="https://www.creative-tim.com" className="nav-link">
                Powered by Infordas Ghana Limited
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.creative-tim.com/presentation"
                className="nav-link"
              >
                About Us
              </a>
            </li>
            
            <li className="nav-item">
              <a
                href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md"
                className="nav-link"
              >
                MIT License
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default BaseFooter;
