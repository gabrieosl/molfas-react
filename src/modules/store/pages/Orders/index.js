import React, { useState, useEffect } from 'react';
import { MdLoop } from 'react-icons/md';

import Header from '~/modules/store/components/Header';
import ItemList from '~/shared/components/ItemsList';

import OrdersTable from './OrdersTable';

import Footer from '~/modules/store/components/Footer';
import api from '~/modules/store/services/api';

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
