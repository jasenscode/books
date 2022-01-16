import "./Navbar.scss";
import React from "react";
import NavButton from "../NavButton/NavButton";

const Navbar = (props) => {
  const { clickSearch } = props;

  return (
    <div className="navbar">
      <NavButton text="Add Book" icon="plus" />
      <NavButton text="Find Book" icon="search" handleClick={clickSearch} />
    </div>
  );
};

export default Navbar;
