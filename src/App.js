import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import data from "./data";

function App() {
  const cards = data.map((item) => <Main item={item} />);
  return (
    <div className="App">
      <Nav />
      {cards}
      {/* <Main /> */}
    </div>
  );
}

export default App;
