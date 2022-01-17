import "./SearchBox.scss";
import React from "react";

const SearchBox = (props) => {
  const { placeholder, handleSearch } = props;

  return <input type="text" className="search-box" placeholder={placeholder} onInput={handleSearch} />;
};

export default SearchBox;
