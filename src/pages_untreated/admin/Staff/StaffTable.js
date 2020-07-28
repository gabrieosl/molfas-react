/* eslint-disable react/prop-types */
import React from 'react';

import TableButtons from '~/components/admin/TableButtons';

import { Table, SubItem } from '~/styles/showTable';

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
        <col style={{ width: '30%' }} />
        <col style={{ width: '10%' }} />
        <col style={{ width: '30%' }} />
        <col style={{ width: '20%' }} />
        <col style={{ width: '10%' }} />
        <col style={{ width: '70px' }} />
      </colgroup>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Usuário</th>
          <th>E-mail</th>
          <th>Permissão</th>
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
                  <p>{item.data.username}</p>
                </td>
                <td>
                  <p>{item.data.email}</p>
                </td>
                <td>
                  <SubItem>
                    <p className="tag tag-0">{item.data.role}</p>
                  </SubItem>
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
