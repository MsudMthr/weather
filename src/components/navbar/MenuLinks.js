import React from "react";

import { Link } from "react-router-dom";

const MenuLinks = ({ isShowMenu }) => {
  return (
    <ul
      className={`menu-parent  ${
        isShowMenu ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
      } `}
    >
      <li>
        <Link to={'/search'} className="menu-link">
          Search
        </Link>
      </li>
      <li>
        <Link to={'/myCity'} className="menu-link">
          My City
        </Link>
      </li>
      <li>
        <Link to={'/services'} className="menu-link">
          Services
        </Link>
      </li>
      <li>
        <Link to={'/contactUs'} className="menu-link">
          Contact us
        </Link>
      </li>
    </ul>
  );
};

export default MenuLinks;
