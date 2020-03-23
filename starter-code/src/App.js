import React from "react";
import FoodBox from "../src/components/FoodBox";
import "./App.css";
import SearchBox from "./components/SearchBox";

export default function App() {
  return (
    <div className="App">
      <SearchBox />
      <FoodBox />
    </div>
  );
}
