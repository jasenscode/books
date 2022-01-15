import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch, faPlus } from "@fortawesome/free-solid-svg-icons";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import Navbar from "./components/Navbar/Navbar";

library.add(faSearch, faPlus);

const App = () => {
  return (
    <div className="App">
      <HeaderLogo text="Bibliotaph" />
      <Navbar />
      <h2 className="one">Test color</h2>
      <h3 className="two">Test color</h3>
      <h4 className="three">Test color</h4>
    </div>
  );
};

export default App;
