import React from 'react';
import "./search-box.styles.css";

export const SearchBox = ({placeholder, handleSearchChange}) => (
    <input
        type="search"
        className="search"
        placeholder={placeholder}
        onChange={(event) => handleSearchChange(event.target.value)}
    />
)