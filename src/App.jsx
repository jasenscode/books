import "./App.scss";
import HeaderLogo from "./components/HeaderLogo/HeaderLogo";
import Navbar from "./components/Navbar/Navbar";

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
