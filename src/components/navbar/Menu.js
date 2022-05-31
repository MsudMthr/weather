import React, { useState } from "react";

import { Link } from "react-router-dom";

import icon from "../../assets/svg/cloudy-weather-svgrepo-com.svg";
import Hamburger from "./Hamburger";
import MenuLinks from "./MenuLinks";

const Menu = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div className="absolute top-0 z-20 mx-auto flex w-full max-w-screen-2xl items-center  justify-around bg-sky-200 bg-opacity-50 py-2 backdrop-blur-xl">
      <MenuLinks isShowMenu={isShowMenu} />
      <Hamburger isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
      <button
        onClick={() => setIsShowMenu(false)}
        className={
          isShowMenu
            ? "absolute top-0 z-10 h-screen w-screen bg-gray-900/50"
            : ""
        }
      ></button>
      <Link to={"/"}>
        <img src={icon} alt="weather" className="z-0 w-16" />{" "}
      </Link>
    </div>
  );
};

export default Menu;
