import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 2rem;
  text-align: center;
  margin: 10px 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border-radius: 2rem;
  border: none;
  font-weight: 600;
  outline: 3px solid orange;
  &:hover {
    outline: 3px solid aqua;
  }
`;

const Button = styled.button`
  padding: 10px 26px;
  background-color: aqua;
  color: black;
  border: none;
  border-radius: 2rem;
  text-align: center;
  align-item: center;

  margin: 1rem;
  cursor: pointer;
  &:hover {
    background-color: white;
    outline: 3px solid aqua;
  }
`;

const SearchForm = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [state, setState] = useState('');
  const [minArea, setMinArea] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = event => {
    event.preventDefault(); 
    const searchCriteria = {
      location: location.toLowerCase(),
      state: state.toLowerCase(),
      minArea: parseFloat(minArea) || 0,
      maxPrice: parseFloat(maxPrice) || Infinity
    };
    onSearch(searchCriteria);
  };

  return (
    <FormContainer onSubmit={handleSearch}>
      <Input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter state"
        value={state}
        onChange={e => setState(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Min area"
        value={minArea}
        onChange={e => setMinArea(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Max price"
        value={maxPrice}
        onChange={e => setMaxPrice(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </FormContainer>
  );
};

export default SearchForm;
