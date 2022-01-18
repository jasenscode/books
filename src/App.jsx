import "./App.scss";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import BookList from "./containers/BookList/BookList";
import ActionBar from "./containers/ActionBar/ActionBar";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";

library.add(faSearch, faPlus);

const App = () => {
  const [booksArr, setBooksArr] = useState([]);
  const [textSearch, setTextSearch] = useState("");

  // Retrieve API data function
  const getBooks = () => {
    fetch("http://localhost:8080/books")
      .then((response) => response.json())
      .then((data) => setBooksArr(data));
  };

  // Add API data function
  // const addBook = () => {
  //   fetch("http://localhost:8080/book/")
  // };

  // Fetch data from API
  useEffect(() => {
    getBooks();
  }, []);

  // useEffect(() => {
  // only filter when searchTerm changes
  // }, [searchTerm]);

  console.log(booksArr);

  // Get search input value
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setTextSearch(searchTerm);
  };

  // Function to add book via POST
  // const handleAdd = (event)=>{
  //   event.preventDefault();
  // };

  // Use search value from search box input to filter over data from API
  const booksArrFilter = booksArr.filter((book) => {
    return textSearch ? book.name.toLowerCase().includes(textSearch) : booksArr;
  });

  return (
    <div className="App">
      <HeaderLogo text="Bibliotaph." />
      <ActionBar handleSearch={handleSearch} />
      <BookList booksArr={booksArrFilter} />
    </div>
  );
};

export default App;
