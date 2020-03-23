import React from "react";

const SearchBox = () => {
  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>
      <div>
        <input
          type="text"
          className="input search-bar"
          name="search"
          placeholder="Search"
          value=""
        />
      </div>
    </div>
  );
};

export default SearchBox;
