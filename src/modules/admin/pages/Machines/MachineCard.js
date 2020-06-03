/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';

import { CardContainer, FieldActive } from '~/shared/styles/cards';

export default function Card({
  currentCard = {},
  onCreate = () => null,
  onUpdate = () => null,
  onCurrentCardItemChange = () => null,
  onCurrentCardItemActiveChange = () => null,
}) {
  const { item = {} } = currentCard;

  const readOnly = useMemo(() => currentCard.type === 'view', [currentCard]);

  const submitFunction = useMemo(() => {
    if (currentCard.type === 'create') {
      return onCreate;
    }
    if (currentCard.type === 'update') {
      return onUpdate;
    }
    return () => null;
  }, [currentCard, onCreate, onUpdate]);

  return (
    <CardContainer readOnly={!readOnly}>
      <strong>Nome:</strong>
      <input
        type="text"
        readOnly={readOnly}
        name="name"
        value={item.name}
        onChange={onCurrentCardItemChange}
      />
      <strong>Slot:</strong>
      <input
        type="text"
        readOnly={readOnly}
        name="slot"
        value={item.slot}
        onChange={onCurrentCardItemChange}
      />
      {item.id && (
        <FieldActive>
          <small>{item.active ? 'Item ativo' : 'Item inativo'}</small>
          {!readOnly ? (
            <button
              type="button"
              className="active"
              onClick={onCurrentCardItemActiveChange}
            >
              {item.active ? 'inativar' : 'ativar'}
            </button>
          ) : null}
        </FieldActive>
      )}
      {!readOnly && (
        <button
          className="submit-action-button"
          type="button"
          onClick={() => submitFunction(item)}
        >
          {item.id ? 'Atualizar' : 'Criar'}
        </button>
      )}
    </CardContainer>
  );
}
