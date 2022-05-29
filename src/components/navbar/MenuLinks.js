import React from "react";

const MenuLinks = ({isShowMenu}) => {
  return (
    <ul
      className={`menu-parent  ${
        isShowMenu ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
      } `}
    >
      <li>
        <a href="#" className="menu-link">
          Search
        </a>
      </li>
      <li>
        <a href="#" className="menu-link">
          My City
        </a>
      </li>
      <li>
        <a href="#" className="menu-link">
          Services
        </a>
      </li>
      <li>
        <a href="#" className="menu-link">
          Contact us
        </a>
      </li>
    </ul>
  );
};

export default MenuLinks;
