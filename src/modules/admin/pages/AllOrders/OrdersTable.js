/* eslint-disable react/prop-types */
import React from 'react';

import OrderItem from './OrderItem';

import { Table } from '~/shared/styles/showTable';

export default function ShowTable({ items, onUpdate = null, refresh }) {
  return (
    <Table>
      <colgroup>
        <col style={{ width: '10%' }} />
        <col style={{ width: '30%' }} />
        <col style={{ width: '20%' }} />
        <col style={{ width: '70px' }} />
      </colgroup>
      <thead>
        <tr>
          <th> </th>
          <th>#</th>
          <th>Cliente</th>
          <th>Quant.</th>
          <th>Total</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {items.map(
          item =>
            item.filtered && (
              <OrderItem
                item={item.data}
                onUpdate={onUpdate}
                refresh={refresh}
              />
            )
        )}
      </tbody>
    </Table>
  );
}
