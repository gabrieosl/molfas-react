/* eslint-disable react/prop-types */
import React from 'react';

import TableButtons from '~/modules/admin/components/TableButtons';

import { Table } from '~/shared/styles/showTable';

export default function ShowTable({
  items,
  setCurrentCard = () => null,
  onView = null,
  onUpdate = null,
  onDelete = null,
  onAggregate = null,
}) {
  return (
    <Table>
      <colgroup>
        <col style={{ width: '70%' }} />
        <col style={{ width: '20%' }} />
        <col style={{ width: '70px' }} />
      </colgroup>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Fornecedores</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {items.map(
          item =>
            item.filtered && (
              <tr
                className={
                  (item.data.active &&
                    (item.data.active ? 'active' : 'inactive')) ||
                  'active'
                }
              >
                <td>
                  <p className="title1">{item.data.name}</p>
                </td>
                <td>
                  <p>Em desenvolvimento</p>
                </td>
                <td>
                  <TableButtons
                    item={item.data}
                    onView={onView && setCurrentCard}
                    onUpdate={onUpdate && setCurrentCard}
                    onDelete={onDelete}
                    onAggregate={onAggregate}
                  />
                </td>
              </tr>
            )
        )}
      </tbody>
    </Table>
  );
}
