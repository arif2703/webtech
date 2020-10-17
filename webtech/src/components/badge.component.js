import React from "react";

const Badge = ({ number, content }) => {
  return (

        <div className="col-md-4 col-sm-4 text-center text-white">
          <i className="fa fa-handshake-o faIconSize" aria-hidden="true"></i>
          <h4 className="mt-3">{number}</h4>
          <p className="text-white">{content}</p>
       
    </div>
  );
};

export default Badge;
