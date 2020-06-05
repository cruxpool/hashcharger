import React from "react";
import "./App.css";
import config from "./config"
import HashCharger from "./HashCharger"

function App() {
  return (
    <div className="App">
      <HashCharger config={config}/>
    </div>
  );
}

export default App;
