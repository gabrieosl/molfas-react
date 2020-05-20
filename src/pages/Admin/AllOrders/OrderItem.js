/* eslint-disable react/prop-types */
import React, { useState, useMemo } from 'react';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

import OrderItemTable from './OrderItemTable';
import { formatPrice } from '~/util/format';
import { OrderItemsContainer } from './styles';

export default function OrderItem({ item, onUpdate, refresh }) {
  const [show, setShow] = useState(false);

  const totalPrice = useMemo(
    () =>
      formatPrice(
        item.products.reduce((total, product) => {
          return total + product.Orderitem.price * product.Orderitem.quantity;
        }, 0)
      ),
    [item]
  );

  const totalItems = useMemo(
    () =>
      item.products.reduce((total, product) => {
        return total + product.Orderitem.quantity;
      }, 0),
    [item]
  );

  return (
    <>
      <tr
        className={
          item.accepted_at && !item.canceled_at ? 'active' : 'inactive'
        }
      >
        <td>
          <button type="button" onClick={() => setShow(!show)}>
            {show ? <MdExpandLess /> : <MdExpandMore />}
          </button>
        </td>
        <td>
          <p className="title1">{item.id}</p>
        </td>
        <td>
          <p className="title1">{item.customer.firstName}</p>
        </td>
        <td>
          <p>{totalItems}</p>
        </td>
        <td>
          <p>{totalPrice}</p>
        </td>

        <td>
          <div>
            {item.canceled_at ? (
              <p>Cancelado</p>
            ) : (
                (!item.accepted_at && (
                  <button
                    type="button"
                    onClick={() =>
                      onUpdate({ ...item, accepted_at: new Date() }) && refresh()
                    }
                  >
                    Aceitar
                  </button>
                )) || (
                  <>
                    <p>
                      Em fila de fabricação -{' '}
                      <button
                        onClick={() =>
                          onUpdate({ ...item, canceled_at: new Date() })
                        }
                      >
                        Cancelar
                    </button>
                    </p>
                  </>
                )
              )}
          </div>
        </td>
      </tr>
      {show && (
        <tr>
          <td colSpan={5}>
            <OrderItemsContainer>
              <OrderItemTable items={item.products} />
            </OrderItemsContainer>
          </td>
        </tr>
      )}
    </>
  );
}
