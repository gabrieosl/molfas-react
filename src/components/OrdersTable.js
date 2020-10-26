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
        <col style={{ width: '20%' }} />
        <col style={{ width: '5%' }} />
        <col style={{ width: '50%' }} />
        <col style={{ width: '70px' }} />
      </colgroup>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Sub-produtos</th>
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
                  <p>{item.data.type}</p>
                </td>
                <td>
                  <SubItem>
                    {item.data.subproducts.map(sub => (
                      <p className="tag tag-0">
                        {sub.name}
                        <small className="tag tag-1">
                          {sub.piecesPerCicle}
                        </small>
                      </p>
                    ))}
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
