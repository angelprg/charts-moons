import React from "react";
import NavBar from "./components/nav-bar/nav-bar.component.js";
import Main from "./controllers/main.controller";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
