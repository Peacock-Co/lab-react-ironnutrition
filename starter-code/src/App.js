import React, { Component } from "react";
import FoodBox from "../src/components/FoodBox";
import "./App.css";
import SearchBox from "./components/SearchBox";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBox />
        <FoodBox />
      </div>
    );
  }
}

export default App;
