import React from "react";

function Searchbar({ onChange, value }) {
  return (
    <div className="container-fluid bg-light">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default Searchbar;
