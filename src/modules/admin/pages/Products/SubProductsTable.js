/* eslint-disable react/prop-types */
import React from 'react';

import TableButtons from '~/modules/admin/components/TableButtons';

import { Table, SubItem } from '~/shared/styles/showTable';

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
        <col style={{ width: '25%' }} />
        <col style={{ width: '5%' }} />
      </colgroup>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Peças por ciclo</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {items.map(
          item =>
            item.filtered && (
              <tr className={item.data.mold_id ? 'type-a' : 'type-b'}>
                <td>
                  <p className="title1">
                    {item.data.name}
                    <SubItem>
                      <small className="tag tag-2">
                        {item.data.mold && item.data.mold.name}
                      </small>
                    </SubItem>
                  </p>
                </td>
                <td>
                  <p>{item.data.piecesPerCicle}</p>
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
