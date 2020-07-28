/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('');

  function updateSearch(e) {
    e.preventDefault();
    onSearch(search);
  }
  return (
    <Container onSubmit={updateSearch}>
      <input
        type="text"
        onChange={e => setSearch(e.target.value)}
        value={search}
        placeholder="Pesquisar produtos ..."
      />
      <button type="submit">
        <MdSearch />
      </button>
    </Container>
  );
}
