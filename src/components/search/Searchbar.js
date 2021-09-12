import React from "react";

function Searchbar ({ onChange, value }) {
    return (
        <input type="text" value={value} onChange={(event) => onChange(event.target.value)} />
    )
}

export default Searchbar;