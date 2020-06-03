/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Title } from './styles';

export default function AdminHeader({ selected }) {
  return (
    <Container>
      <Title>
        <small>Administração</small>
        <strong>{selected}</strong>
      </Title>
      <ul>
        <li>
          <Link
            to="/admin/products"
            className={selected === 'produtos' ? 'selected' : 'aaa'}
          >
            Produtos
          </Link>
        </li>
        <li>
          <Link
            to="/admin/machines"
            className={selected === 'máquinas' ? 'selected' : 'aaa'}
          >
            Injetoras
          </Link>
        </li>
        <li>
          <Link
            to="/admin/molds"
            className={selected === 'moldes' ? 'selected' : 'aaa'}
          >
            Moldes
          </Link>
        </li>
        <li>
          <Link
            to="/admin/materia-prima"
            className={selected === 'matéria prima' ? 'selected' : 'aaa'}
          >
            Matéria prima
          </Link>
        </li>
        <li>
          <Link
            to="/admin/staff"
            className={selected === 'staff' ? 'selected' : 'aaa'}
          >
            Staff
          </Link>
        </li>
      </ul>
    </Container>
  );
}
