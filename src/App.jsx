import "./App.scss";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import Navbar from "./components/Navbar/Navbar";

library.add(faSearch, faPlus);

const App = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, [books]);

  return (
    <div className="App">
      <HeaderLogo text="Bibliotaph" />
      <div className="one">
        {books.map((book) => {
          return <div>{book.name}</div>;
        })}
      </div>
      <Navbar />
      <h2 className="one">Test color</h2>
      <h3 className="two">Test color</h3>
      <h4 className="three">Test color</h4>
    </div>
  );
};

export default App;
