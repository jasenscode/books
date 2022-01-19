import "./ActionBar.scss";
import { useState } from "react";
import NavBar from "../../components/Navbar/Navbar";
import SearchBox from "../../components/SearchBox/SearchBox";
import AddForm from "../../components/AddForm/AddForm";

const ActionBar = (props) => {
  const { handleSearch } = props;
  const [searchBox, showSearchbox] = useState(false);
  const [addForm, showAddForm] = useState(false);

  const handleClickSearch = () => {
    showSearchbox(!searchBox);
    if (addForm) {
      showAddForm(false);
    }
  };

  const handleClickAdd = () => {
    showAddForm(!addForm);
    if (searchBox) {
      showSearchbox(false);
    }
  };

  return (
    <div className="action-bar">
      <NavBar clickSearch={handleClickSearch} clickAdd={handleClickAdd} />
      {searchBox && <SearchBox placeholder="Type book name here ... " handleSearch={handleSearch} />}
      {addForm && <AddForm />}
    </div>
  );
};

export default ActionBar;
