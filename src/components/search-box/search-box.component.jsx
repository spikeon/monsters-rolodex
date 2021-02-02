import React from 'react';
import {SearchBoxInput} from './search-box.styles';

export const SearchBox = ({placeholder, handleSearchChange}) => (
    <SearchBoxInput
        type="search"
        placeholder={placeholder}
        onChange={({ target: {value}}) =>
            handleSearchChange(value)
        }
    />
)