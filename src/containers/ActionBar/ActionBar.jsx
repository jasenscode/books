import "./ActionBar.scss";
import react from "react";
import { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import SearchBox from "../../components/SearchBox/SearchBox";

const ActionBar = () => {
  // import searchbar and form
  // useState for searchbar and form here
  const [searchBox, showSearchbox] = useState(false);

  const handleClickSearch = () => {
    showSearchbox(!searchBox);
  };

  return (
    <div className="action-bar">
      <NavBar clickSearch={handleClickSearch} />
      {searchBox && <SearchBox placeholder="Type the book name here ... " />}
    </div>
  );
};

export default ActionBar;
