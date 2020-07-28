/* eslint-disable react/prop-types */
import React from 'react';

import TableButtons from '~/components/admin/TableButtons';

import { Table } from '~/styles/showTable';

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
        <col style={{ width: '20%' }} />
        <col style={{ width: '50%' }} />
        <col style={{ width: '10%' }} />
        <col style={{ width: '70px' }} />
      </colgroup>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Slot</th>
          <th>Ativo</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {items.map(
          item =>
            item.filtered && (
              <tr className={item.data.active ? 'active' : 'inactive'}>
                <td>
                  <p className="title1">{item.data.name}</p>
                </td>
                <td>
                  <p>{item.data.slot}</p>
                </td>
                <td>
                  <p className={item.data.active ? 'active' : 'inactive'}>
                    {item.data.active ? 'Ativo' : 'Inativo'}
                  </p>
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
