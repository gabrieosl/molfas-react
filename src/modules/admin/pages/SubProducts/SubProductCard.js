/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';

import { CardContainer } from '~/shared/styles/cards';

export default function Card({
  currentCard = {},
  onCreate = () => null,
  onUpdate = () => null,
  onCurrentCardItemChange = () => null,
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
      <strong>Peças por ciclo:</strong>
      <input
        type="number"
        readOnly={readOnly}
        name="piecesPerCicle"
        value={item.piecesPerCicle}
        onChange={onCurrentCardItemChange}
      />
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
