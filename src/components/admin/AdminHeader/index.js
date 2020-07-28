/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';

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
          <Link href="/admin/products">
            <a className={selected === 'produtos' ? 'selected' : 'aaa'}>
              Produtos
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/machines">
            <a className={selected === 'máquinas' ? 'selected' : 'aaa'}>
              Injetoras
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/molds">
            <a className={selected === 'moldes' ? 'selected' : 'aaa'}>Moldes</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/materia-prima">
            <a className={selected === 'matéria prima' ? 'selected' : 'aaa'}>
              Matéria prima
            </a>
          </Link>
        </li>
        <li>
          <Link href="/admin/staff">
            <a className={selected === 'staff' ? 'selected' : 'aaa'}>Staff</a>
          </Link>
        </li>
      </ul>
    </Container>
  );
}
