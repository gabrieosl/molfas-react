/* eslint-disable react/prop-types */
import React from 'react';
import { formatPrice } from '~/shared/util/format';

import { Table } from '~/shared/styles/showTable';

export default function ShowTable({ items }) {
  return (
    <Table>
      <colgroup>
        <col style={{ width: '10%' }} />
        <col style={{ width: '30%' }} />
        <col style={{ width: '20%' }} />
        <col style={{ width: '20%' }} />
        <col style={{ width: '70px' }} />
      </colgroup>
      <thead>
        <tr>
          <th> #</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Quant.</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr>
            <td>
              <p className="title1">{item.id}</p>
            </td>
            <td>
              <p className="title1">{item.name}</p>
            </td>
            <td>
              <p>{formatPrice(item.Orderitem.price)}</p>
            </td>
            <td>
              <p>{item.Orderitem.quantity}</p>
            </td>
            <td>
              <p>
                {formatPrice(item.Orderitem.price * item.Orderitem.quantity)}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
