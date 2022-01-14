import "./HeaderLogo.scss";
import React from "react";

const HeaderLogo = (props) => {
  const { text } = props;

  return <h1 className="header-text">{text}</h1>;
};

export default HeaderLogo;
