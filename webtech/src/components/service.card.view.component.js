import React from "react";

const ServiceCardView = ({ title, description }) => {
  return (
    <div className="card col-md-6 col-lg-4">
      <div className="row no-gutters">
        <div className="col-md-2 icony">
          <i className="fa fa-desktop" aria-hidden="true"></i>
        </div>
        <div className="col-md-10">
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardView;
