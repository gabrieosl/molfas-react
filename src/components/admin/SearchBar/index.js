/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { MdSearch, MdCancel } from 'react-icons/md';

import { Container } from './styles';

export default function SearchBar({ onChange }) {
  const [search, setSearch] = useState('');
  const [active, setActive] = useState(false);

  // eslint-disable-next-line
  useEffect(() => onChange(search), [search]);

  return (
    <Container>
      {active && (
        <input
          type="text"
          placeholder="Buscar..."
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
      )}
      {active && search && (
        <button
          type="button"
          className="clearButton"
          onClick={() => setSearch('')}
        >
          <MdCancel />
        </button>
      )}
      <button type="button" onClick={() => setActive(!active)}>
        <MdSearch />
      </button>
    </Container>
  );
}
