import React from "react";

const TopHeader = ({ mobileNo, mail, call }) => {
  return (
    <div className="headTop">
      <div className="container">
        <div className="row">
          <div className="col-md-12 align-middle">
            <ul>
              <li>
                <a href={`tel: ${mobileNo}`}>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  +91-{mobileNo}
                </a>
              </li>
              <li>
                <a href={`mailto: ${mail}`}>
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                  {mail}
                </a>
              </li>
              <li>
                <a href="#">{call}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;