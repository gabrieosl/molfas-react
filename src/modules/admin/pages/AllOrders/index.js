import React from 'react';

import NavBar from '~/modules/admin/components/NavBar';
import ItemList from '~/shared/components/ItemsList';

import OrdersTable from './OrdersTable';

import { Container } from './styles';

export default function AllOrders() {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Pedidos</h1>
        <ItemList
          cards={{ show: OrdersTable, update: () => null }}
          apiURL="/api/orders"
          readOnly={false}
        />
      </Container>
    </>
  );
}
