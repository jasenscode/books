import "./Navbar.scss";
import React from "react";
import NavButton from "../NavButton/NavButton";

const Navbar = (props) => {
  const { clickSearch, clickAdd } = props;

  return (
    <div className="navbar">
      <NavButton text="Add Book" icon="plus" handleClick={clickAdd} />
      <NavButton text="Find Book" icon="search" handleClick={clickSearch} />
    </div>
  );
};

export default Navbar;
