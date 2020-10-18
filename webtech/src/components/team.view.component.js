import React from "react";

const TeamView = ({designation, name, imgUrl}) => {
  return (
    <div class="col-md-4 col-sm-6">
      <div class="card">
        <img src={imgUrl} class="card-img-top" alt="Team" />
        <div class="card-body">
          <div class="card-text">
              {designation}
            <span></span>
          </div>
            <div class="card-title">{name}</div>
        </div>
      </div>
    </div>
  );
};

export default TeamView;
