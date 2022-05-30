import React, { useState } from "react";

import { Link } from "react-router-dom";

import icon from "../../assets/svg/cloudy-weather-svgrepo-com.svg";
import Hamburger from "./Hamburger";
import MenuLinks from "./MenuLinks";

const Menu = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  return (
    <div className="flex items-center justify-around bg-sky-200 py-2 absolute  top-0 w-full backdrop-blur-xl bg-opacity-50 z-20">
      <MenuLinks isShowMenu={isShowMenu}/>
      <Hamburger isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
      <button onClick={() => setIsShowMenu(false)} className={isShowMenu && "h-screen w-screen bg-gray-900/50 z-10 absolute top-0"}></button>
      <Link to={"/"}>
        <img src={icon} alt="weather" className="w-16 z-0" />{" "}
      </Link>
    </div>
  );
};

export default Menu;
