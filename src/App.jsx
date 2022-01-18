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
  const [individualBook, setIndividualBook] = useState({});

  // FETCHES
  // GET
  const getBooks = () => {
    fetch("http://localhost:8080/books")
      .then((response) => response.json())
      .then((data) => setBooksArr(data));
  };

  // POST
  // const addBook = () => {
  //   fetch("http://localhost:8080/book/")
  // };

  // GET data from API
  useEffect(() => {
    getBooks();
  }, []);

  // POST data to API
  const handleAddBook = (event) => {
    event.preventDefault();
    // can use name properties on inputs in addform to get value
    console.log(event.target.imageurl.value);
  };

  // Get search input value
  const handleSearchBook = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setTextSearch(searchTerm);
  };

  // Function to show book focus
  const handleClickCard = (event) => {
    showBookFocus(true);

    booksArr.forEach((book) => {
      if (book.name.toLowerCase() === event.target.innerText.toLowerCase() || book.author.toLowerCase() === event.target.innerText.toLowerCase() || book.imageUrl === event.target.currentSrc) {
        setIndividualBook(book);
      }
    });
  };

  console.log(individualBook);

  // Function to hide book focus
  const handleClickFocus = () => {
    showBookFocus(false);
  };

  // Use search value from search box input to filter over data from API
  const booksArrFilter = booksArr.filter((book) => {
    return textSearch ? book.name.toLowerCase().includes(textSearch) : booksArr;
  });

  return (
    <div className="App">
      <HeaderLogo text="Bibliotaph." />
      <ActionBar handleSearch={handleSearchBook} handleAdd={handleAddBook} />
      {bookFocus && individualBook ? <BookFocus book={individualBook} clickFocus={handleClickFocus} /> : <BookList booksArr={booksArrFilter} handleClick={handleClickCard} />}
    </div>
  );
};

export default App;
