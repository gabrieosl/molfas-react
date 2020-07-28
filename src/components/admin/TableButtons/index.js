/* eslint-disable react/prop-types */
import React from 'react';
import { MdEdit, MdCallMade, MdDelete, MdAdd } from 'react-icons/md';

import { Container } from './styles';

export default function TableButtons({
  item = null,
  onView = null,
  onUpdate = null,
  onDelete = null,
  onAggregate = false,
}) {
  return (
    <Container>
      {onView && (
        <button
          className="details"
          type="button"
          onClick={() =>
            onView({
              item,
              type: 'view',
              readOnly: true,
              title: 'Detalhes',
            })
          }
        >
          <MdCallMade />
        </button>
      )}
      {onUpdate && (
        <button
          className="edit"
          type="button"
          onClick={() =>
            onUpdate({
              item,
              type: 'update',
              readOnly: false,
              title: 'updatear',
            })
          }
        >
          <MdEdit />
        </button>
      )}
      {onDelete && (
        <button type="button" className="delete" onClick={() => onDelete(item)}>
          <MdDelete />
        </button>
      )}
      {onAggregate && (
        <button
          type="button"
          className="aggregate"
          onClick={() => onAggregate(item)}
        >
          <MdAdd />
        </button>
      )}
    </Container>
  );
}
