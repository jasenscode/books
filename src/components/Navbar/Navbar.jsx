import "./Navbar.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__icon">
        <FontAwesomeIcon icon="plus" />
      </div>
      <p className="navbar__text">Add Book</p>
    </div>
  );
};

export default Navbar;
