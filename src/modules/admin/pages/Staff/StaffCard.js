/* eslint-disable react/prop-types */
import React, { useMemo } from 'react';

import { CardContainer, FieldActive, Avatar } from '~/shared/styles/cards';

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
      <Avatar>
        <img
          src={
            (item.avatar && item.avatar.url) ||
            'https://api.adorable.io/avatars/99/forture.png'
          }
          alt="avatar"
        />
      </Avatar>
      <strong>Nome:</strong>
      <input
        type="text"
        readOnly={readOnly}
        name="name"
        value={item.name}
        onChange={onCurrentCardItemChange}
      />
      <strong>Usuário:</strong>
      <input
        type="text"
        readOnly={readOnly}
        name="username"
        value={item.username}
        onChange={onCurrentCardItemChange}
      />
      <strong>E-mail:</strong>
      <input
        type="text"
        readOnly={readOnly}
        name="email"
        value={item.email}
        onChange={onCurrentCardItemChange}
      />
      <strong>Permissão:</strong>
      <input
        type="text"
        readOnly={readOnly}
        name="role"
        value={item.role}
        onChange={onCurrentCardItemChange}
      />
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
