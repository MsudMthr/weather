import React from "react";

const Hamburger = ({ isShowMenu, setIsShowMenu }) => {
  return (
    <div
      className={`hamburger-parent ${isShowMenu && "rotate-180 scale-0"}`}
      onClick={() => setIsShowMenu(!isShowMenu)}
    >
      <span className={`hamburger-line  ${isShowMenu && "rotate-45"}`}></span>
      <span className={`hamburger-line  ${isShowMenu && "scale-0"}`}></span>
      <span className={`hamburger-line  ${isShowMenu && "-rotate-45"}`}></span>
    </div>
  );
};

export default Hamburger;
