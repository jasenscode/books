import "./NavButton.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavButton = (props) => {
  const { text, icon, handleClick } = props;

  return (
    <button className="nav-btn">
      <FontAwesomeIcon className="nav-btn__icon" icon={icon} />
      <p className="nav-btn__text">{text}</p>
    </button>
  );
};

export default NavButton;
