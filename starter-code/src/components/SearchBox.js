import React from "react";

const SearchBox = () => {
  return (
    <div class="container">
      <h1 class="title">IronNutrition</h1>
      <div>
        <input
          type="text"
          class="input search-bar"
          name="search"
          placeholder="Search"
          value=""
        />
      </div>
    </div>
  );
};

export default SearchBox;
