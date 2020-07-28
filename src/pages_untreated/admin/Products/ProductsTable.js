/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';

import TableButtons from '~/components/admin/TableButtons';

import { formatPrice } from '~/util/format';

import { Table, SubItem, CategoryTag } from '~/styles/showTable';

export default function ShowTable({
  items,
  setCurrentCard = () => null,
  onView = null,
  onUpdate = null,
  onDelete = null,
  onAggregate = null,
}) {
  const products = useMemo(
    () =>
      items.map(item => ({
        ...item,
        data: {
          ...item.data,
          formattedPrice: formatPrice(item.data.price),
        },
      })),
    [items]
  );
  return (
    <Table>
      <colgroup>
        <col style={{ width: '5%' }} />
        <col style={{ width: '30%' }} />
        <col style={{ width: '20%' }} />
        <col style={{ width: '20%' }} />
        <col style={{ width: '5%' }} />
        <col style={{ width: '5%' }} />
        <col style={{ width: '70px' }} />
      </colgroup>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Nome</th>
          <th>Sub-Produtos</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Ativo</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {products.map(
          item =>
            item.filtered && (
              <tr className={item.data.active ? 'active' : 'inactive'}>
                <td>
                  <CategoryTag>NULL</CategoryTag>
                </td>
                <td>
                  <p className="title1">
                    <img
                      src={item.data.defaultImage && item.data.defaultImage.url}
                      alt=""
                    />
                    {item.data.name}
                  </p>
                </td>

                <td>
                  <SubItem>
                    {item.data.subproducts.map(subproduct => (
                      <p className="tag tag-0">
                        {subproduct.name}
                        <small className="tag tag-1">
                          {subproduct.piecesPerCicle}
                        </small>
                      </p>
                    ))}
                  </SubItem>
                </td>
                <td>
                  <p>{item.data.description}</p>
                </td>
                <td>
                  <p>{item.data.formattedPrice}</p>
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
