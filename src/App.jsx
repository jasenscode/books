import "./App.scss";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import BookList from "./containers/BookList/BookList";
import ActionBar from "./containers/ActionBar/ActionBar";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import BookFocus from "./components/BookFocus/BookFocus";

library.add(faSearch, faPlus, faTimes);

const App = () => {
  const [booksArr, setBooksArr] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [bookFocus, showBookFocus] = useState(false);
  const [bookList, showBookList] = useState(true);

  // GET API data function
  const getBooks = () => {
    fetch("http://localhost:8080/books")
      .then((response) => response.json())
      .then((data) => setBooksArr(data));
  };

  // POST API data function
  // const addBook = () => {
  //   fetch("http://localhost:8080/book/")
  // };

  // Fetch data from API
  useEffect(() => {
    getBooks();
  }, []);

  // Get search input value
  const handleSearchBook = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setTextSearch(searchTerm);
  };

  // Function to add book via POST
  const handleAddBook = (event) => {
    event.preventDefault();
    // can use name properties on inputs in addform to get value
    console.log(event.target.imageurl.value);
  };

  // Function to show/hide book focus
  const handleClickBook = (event) => {
    showBookFocus(true);
    showBookList(false);
  };

  // Function to close book focus
  const handleClickFocus = () => {
    showBookFocus(false);
    showBookList(true);
  };

  // Use search value from search box input to filter over data from API
  const booksArrFilter = booksArr.filter((book) => {
    return textSearch ? book.name.toLowerCase().includes(textSearch) : booksArr;
  });

  return (
    <div className="App">
      <HeaderLogo text="Bibliotaph." />
      <ActionBar handleSearch={handleSearchBook} handleAdd={handleAddBook} />
      {bookFocus && <BookFocus clickFocus={handleClickFocus} />}
      {bookList && <BookList booksArr={booksArrFilter} handleClick={handleClickBook} />}
    </div>
  );
};

export default App;
