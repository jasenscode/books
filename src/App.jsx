import "./App.scss";
import { useState, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import BookList from "./containers/BookList/BookList";
import ActionBar from "./containers/ActionBar/ActionBar";

library.add(faSearch, faPlus);

const App = () => {
  const [booksArr, setBooksArr] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then((response) => response.json())
      .then((data) => setBooksArr(data));
  }, [booksArr]);

  return (
    <div className="App">
      <HeaderLogo text="Bibliotaph." />
      {/* <Navbar /> */}
      <ActionBar />
      <BookList books={booksArr} />

      {/* <div className="one">Test color</div> */}
      <div className="two">Test color</div>
      <div className="two">Test color</div>
      <div className="two">Test color</div>
      <div className="two">Test color</div>
      {/* <div className="three">Test color</div> */}
    </div>
  );
};

export default App;
