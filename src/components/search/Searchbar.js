import React from "react";

function Searchbar ({ onChange, onSearch, value }) {
    return (
        <div>
            <input type="text" value={value} onChange={(event) => onChange(event.target.value)} />
            <button onClick={onSearch}>Search!</button>
        </div>
    )
}

export default Searchbar;