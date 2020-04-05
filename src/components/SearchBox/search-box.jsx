import React from 'react';
import { StyledSearchBox } from './search-box.styles';

export const SearchBox = ({ placeholder, handleChange }) => (
  <StyledSearchBox
    name='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);
