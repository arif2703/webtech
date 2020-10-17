import React from "react";
import Badge from "./badge.component";

const About = ({ title1, title2, imgUrl, description }) => {
  return (
    <div className="container-fluid aboutWrap p-5 mt-5 padLzero">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img src={imgUrl} alt="About Us" className="img-fluid" />
        </div>
        <div className="col-md-6 col-sm-12">
          <h2 className="m-4 mt-4 text-white">
            {title1}
            <span>{title2}</span>
          </h2>
          <p className="m-4 mt-4 text-white">{description}</p>

          <div className="container-fluid mt-5">
            <div className="row">
              <Badge number="106" content="Project Worked completed" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
