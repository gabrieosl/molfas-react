import React, { useState, useEffect } from 'react';
import { MdLoop } from 'react-icons/md';

import Header from '~/components/Header';
import ItemList from '~/components/ItemsList';

import OrdersTable from './OrdersTable';

import Footer from '~/components/Footer';
import api from '~/services/api';

import { Container, Title } from './styles';

function Orders() {
  return (
    <>
      <Header />
      <Container>
        <Title>
          <strong>Pedidos</strong>
        </Title>
        <ItemList api={api} cards={{ show: OrdersTable }} />
      </Container>
      <Footer />
    </>
  );
}

export default Orders;
