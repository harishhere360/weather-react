import React from "react";

const SearchInput = ({ handleSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Enter city name" onChange={(e) => handleSearch(e.target.value)} />
    </div>
  );
};

export default SearchInput;
