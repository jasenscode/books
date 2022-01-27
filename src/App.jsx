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
  const [singleBook, setSingleBook] = useState({});
  const [bookFocus, showBookFocus] = useState(false);
  const [bookId, setBookId] = useState(0);

  // GET API data

  // Retrieve all books
  const getBooks = () => {
    fetch("http://localhost:8080/books")
      .then((response) => response.json())
      .then((data) => setBooksArr(data));
  };

  useEffect(() => {
    getBooks();
  }, []);

  // Retrieve book by ID
  const getBookById = () => {
    fetch(`http://localhost:8080/book/${bookId}`)
      .then((response) => response.json())
      .then((data) => setSingleBook(data));
  };

  useEffect(() => {
    getBookById();
  }, [bookId]);

  // Book search function
  const handleSearchBook = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setTextSearch(searchTerm);
  };

  const booksArrFilter = booksArr.filter((book) => {
    return textSearch ? book.name.toLowerCase().includes(textSearch) : booksArr;
  });

  // Show/hide detailed book information on click

  // SHOW
  const handleClickCard = (event) => {
    showBookFocus(true);

    booksArr.forEach((book) => {
      if (book.name.toLowerCase() === event.target.innerText.toLowerCase() || book.author.toLowerCase() === event.target.innerText.toLowerCase() || book.imageUrl === event.target.currentSrc) {
        setBookId(book.id);
      }
    });
  };

  // HIDE
  const handleClickFocus = () => {
    showBookFocus(false);
  };

  // Use search value from search box input to filter over data from API

  return (
    <div className="App">
      <HeaderLogo text="Bibliotaph." />
      <ActionBar handleSearch={handleSearchBook} />
      {bookFocus && bookId ? <BookFocus book={singleBook} clickFocus={handleClickFocus} /> : <BookList booksArr={booksArrFilter} handleClick={handleClickCard} />}
    </div>
  );
};

export default App;
