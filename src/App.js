import "./App.css";
import "./styles/style.scss";

import Body from "./components/body.js";
import Header from "./components/header.js";

function App() {
  return (
    <div className="App">
      <div className="home">
        <Header/>
        <Body />
      </div>
    </div>
  );
}

export default App;
