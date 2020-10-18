import React from "react";

const ClientReviewView = ({ title, description, name, city }) => {
  return (
    <div className="col-md-4 col-sm-6 text-center">
      <img
        src="images/client3.jpg"
        className="rounded-circle mt-5 mx-auto d-block"
        alt="client 1"
      />
      <h1>{title}</h1>
      <p className="mt-3">{description}</p>
      <div className="ratings">
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star checked"></span>
        <span className="fa fa-star"></span>
      </div>
      <p className="mt-3">
        <b className="block">{name}</b>
        <i>{city}</i>
      </p>
    </div>
  );
};

export default ClientReviewView;
