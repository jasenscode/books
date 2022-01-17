import "./App.scss";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import BookList from "./containers/BookList/BookList";
import ActionBar from "./containers/ActionBar/ActionBar";
import BookCard from "./components/BookCard/BookCard";

library.add(faSearch, faPlus);

const App = () => {
  const [booksArr, setBooksArr] = useState([]);
  const [textSearch, setTextSearch] = useState("");

  // Fetch data from API
  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then((response) => response.json())
      .then((data) => setBooksArr(data));
  }, []);

  console.log(booksArr);

  // const handleAdd = () => {};

  // Get search input value
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setTextSearch(searchTerm);
  };

  const booksArrFilter = booksArr.filter((book) => {
    return textSearch ? book.name.toLowerCase().includes(textSearch) : booksArr;
  });

  // useEffect(() => {
  //   // filter the list of books when the searchter mchanges?
  // }, [searchTerm]);

  return (
    <div className="App">
      <HeaderLogo text="Bibliotaph." />
      <ActionBar handleSearch={handleSearch} />
      <BookList booksArr={booksArrFilter} />
    </div>
  );
};

export default App;
