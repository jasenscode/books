import "./Navbar.scss";
import React from "react";
import NavButton from "../NavButton/NavButton";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavButton text="Add Book" icon="plus" />
      <NavButton text="Find Book" icon="search" />
    </div>
  );
};

export default Navbar;
