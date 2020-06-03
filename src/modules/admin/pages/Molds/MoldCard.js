/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';

import SubProducts from '../SubProducts/SubProducts';

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
      <strong>Tipo:</strong>
      <input
        type="text"
        readOnly={readOnly}
        name="type"
        value={item.type}
        onChange={onCurrentCardItemChange}
      />
      {item.id && (
        <>
          <strong>Sub-produtos:</strong>
          <div className="subcard-container">
            <SubProducts
              apiURL={`/api/molds/${item.id}/subproducts`}
              showTitle
              defaultCreateButton={!readOnly}
              readOnly={readOnly}
            />
          </div>
        </>
      )}
      {item.id && (
        <FieldActive>
          <small>{item.active ? 'Molde ativo' : 'Molde inativo'}</small>
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
