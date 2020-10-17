import React from "react";
import { NavLink } from "react-router-dom";
import { routesList } from "../common/constant.route";

const Navigation = () => {
  return (
    <div className="col-lg-9 col-md-12">
      <ul>
        {
          routesList.map(item => (
            <li>
              <NavLink activeClassName="active" exact to={item.to}>
                {item.label}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Navigation;