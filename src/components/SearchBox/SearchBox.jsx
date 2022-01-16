import "./SearchBox.scss";
import React from "react";

const SearchBox = (props) => {
  const { placeholder } = props;

  return <input type="text" className="search-box" placeholder={placeholder} />;
};

export default SearchBox;
