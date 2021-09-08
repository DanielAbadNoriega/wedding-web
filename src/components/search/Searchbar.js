import React from "react";

function Searchbar ({ onSearch, value }) {
    return (
        <input type="text" value={value} onChange={(event) => onSearch(event.target.value)} />
    )
}

export default Searchbar;