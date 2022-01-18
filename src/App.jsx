import "./App.scss";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import BookList from "./containers/BookList/BookList";
import ActionBar from "./containers/ActionBar/ActionBar";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import BookFocus from "./components/BookFocus/BookFocus";

library.add(faSearch, faPlus);

const App = () => {
  const [booksArr, setBooksArr] = useState([]);
  const [textSearch, setTextSearch] = useState("");

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

  console.log(booksArr);

  // Get search input value
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setTextSearch(searchTerm);
  };

  // Function to add book via POST
  const handleAdd = (event) => {
    event.preventDefault();

    // can use name properties on inputs in addform to get value
    console.log(event.target.imageurl.value);
  };

  // Use search value from search box input to filter over data from API
  const booksArrFilter = booksArr.filter((book) => {
    return textSearch ? book.name.toLowerCase().includes(textSearch) : booksArr;
  });

  return (
    <div className="App">
      <HeaderLogo text="Bibliotaph." />
      <ActionBar handleSearch={handleSearch} handleAdd={handleAdd} />
      <BookFocus />
      <BookList booksArr={booksArrFilter} />
    </div>
  );
};

export default App;
